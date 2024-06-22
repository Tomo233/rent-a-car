import supabase from "./supabase";

export async function getCars(formData, sort, filters, rangeFilters) {
  try {
    let query = supabase
      .from("cars")
      .select("*")
      .eq("location", formData.location);

    if (sort) {
      query = query.order(sort[0], { ascending: sort[1] === "ascending" });
    }

    if (filters.length > 0) {
      filters.map((f) => {
        const [column, value] = f.split("-");

        return (query = query.eq(
          column,
          value.charAt(0).toUpperCase() + value.slice(1)
        ));
      });
    }

    if (rangeFilters.length > 0) {
      rangeFilters.map((f) => {
        const [column, value, secondValue] = f.split("-");
        console.log(Number(value));
        return (query = query
          .gt(column, Number(value))
          .lt(column, Number(secondValue)));
      });
    }

    const { data: cars, error: carsError } = await query;

    if (carsError) {
      throw new Error("Error fetching cars:", carsError.message);
    }

    const { data: reservations, error: reservationsError } = await supabase
      .from("reservations")
      .select("*");

    if (reservationsError) {
      throw new Error(
        "Error fetching reservations:",
        reservationsError.message
      );
    }

    const filteredCars = cars.filter((car) => {
      // Find reservations that belong to this car
      const carReservations = reservations.filter((r) => r.car_id === car.id);

      if (carReservations.length === 0) {
        // If there are no reservations for this car, include it
        return true;
      }

      // Check if any reservation overlaps with the formData dates and times
      const hasOverlap = carReservations.some((r) => {
        const {
          startDate: resStartDate,
          endDate: resEndDate,
          endTime: resEndTime,
          startTime: resStartTime,
        } = r;
        const {
          startDate: formStartDate,
          endDate: formEndDate,
          startTime: formStartTime,
          endTime: formEndTime,
        } = formData;

        // Convert dates to Date objects for comparison
        const resStart = new Date(resStartDate);
        const resEnd = new Date(resEndDate);
        const formStart = new Date(formStartDate);
        const formEnd = new Date(formEndDate);

        // Basic date overlap check
        const dateOverlap = formStart <= resEnd && formEnd >= resStart;

        // Additional time overlap checks
        const startTimeOverlap =
          formStartDate === resEndDate && formStartTime <= resEndTime;
        const endTimeOverlap =
          formEndDate === resStartDate && formEndTime >= resStartTime;

        // Determine if there is a valid overlap
        return dateOverlap && !(startTimeOverlap || endTimeOverlap);
      });

      // Include the car if no reservation overlaps with the formData dates and times
      return !hasOverlap;
    });

    return filteredCars;
  } catch (error) {
    console.error("Error fetching cars:", error.message);
    throw error;
  }
}

export async function getSomeCars({ from, to }) {
  let { data, error } = await supabase.from("cars").select("*").range(from, to);

  if (error) throw new Error("Cars cannot be loaded");

  return data;
}

export async function getCarById(id) {
  let { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error("Car cannot be loaded");

  return data;
}

export async function bookCarById(
  carId,
  { startDate, endDate, startTime, endTime }
) {
  try {
    const { data, error } = await supabase.from("reservations").insert([
      {
        car_id: carId,
        startDate,
        endDate,
        startTime,
        endTime,
      },
    ]);

    if (error) {
      throw error;
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error reserving car:", error.message);
    throw new Error("Car reservation failed");
  }
}
