import supabase from "./supabase";

export async function getReservations(userId) {
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
