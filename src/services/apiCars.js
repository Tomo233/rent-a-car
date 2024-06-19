import supabase from "./supabase";

// eslint-disable-next-line no-unused-vars
export async function getCars(sort, filters, rangeFilters, formData) {
  try {
    let query = supabase.from("cars").select("*");

    if (sort) {
      query = query.order(sort.at(0), {
        ascending: sort.at(1) === "ascending",
      });
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
        return (query = query
          .gte(column, Number(value))
          .lte(column, Number(secondValue)));
      });
    }

    let { data: reservations, error: reservationErr } = await supabase
      .from("reservations")
      .select("*");

    if (reservationErr) throw new Error("reservations cannot be loaded");

    if (formData && Object.keys(formData).length > 0) {
      const {
        startDate: formStartDate,
        endDate: formEndDate,
        // startTime: formStartTime,
        // endTime: formEndTime,
      } = formData;

      reservations.map((reservation) => {
        console.log(reservation);

        //     query.or(
        //   `startDate.is.null,endDate.is.null,startDate.gt.${formEndDate},endDate.lt.${formStartDate}`
        // );
      });

      // query.or(
      //   `startDate.is.null,endDate.is.null,startDate.gt.${formEndDate},endDate.lt.${formStartDate}`
      // );
    }

    const { data, error } = await query;
    if (error) throw new Error("Cars cannot be loaded");

    return data;
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

export async function reserveCarById(
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

export async function fetchCars(formData) {
  try {
    const { data: cars, error: carsError } = await supabase
      .from("cars")
      .select("*");

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
      } else {
        // Check if any reservation overlaps with the formData dates
        const overlaps = carReservations.some((r) => {
          const { startDate: resStartDate, endDate: resEndDate } = r;
          const { startDate: formStartDate, endDate: formEndDate } = formData;

          // Convert dates to Date objects for comparison
          const resStart = new Date(resStartDate);
          const resEnd = new Date(resEndDate);
          const formStart = new Date(formStartDate);
          const formEnd = new Date(formEndDate);

          // Check if there is an overlap
          return formStart <= resEnd && formEnd >= resStart;
        });

        // Include the car if no reservation overlaps with the formData dates
        return !overlaps;
      }
    });

    return filteredCars;
  } catch (error) {
    console.error("Error fetching cars:", error.message);
    throw error;
  }
}
