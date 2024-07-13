import supabase from "./supabase";

export async function getBookings(userId) {
  try {
    if (!userId) return null;

    let { data, error } = await supabase
      .from("reservations")
      .select(
        `
      *,
      cars (
        *
      )
    `
      )
      .eq("user_id", userId);

    if (error) {
      console.error(error);
    }

    return data;
  } catch (error) {
    console.error("Error fetching reservations:", error.message);
    throw error;
  }
}

export async function getCarBookings(carId) {
  try {
    if (!carId) return null;

    let { data, error } = await supabase
      .from("reservations")
      .select("*")
      .eq("car_id", carId);

    if (error) {
      console.error("Error fetching reservations:", error);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Error fetching reservations:", error.message);
    throw error;
  }
}