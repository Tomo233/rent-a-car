import supabase from "./supabase";

export async function getReservations() {
  try {
    let { data, error } = await supabase.from("reservations").select(`
      *,
      cars (
        *
      )
    `);

    if (error) {
      console.error(error);
    }

    return data;
  } catch (error) {
    console.error("Error fetching reservations:", error.message);
    throw error;
  }
}
