import supabase from "./supabase";

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

export async function getCars(formData) {
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
