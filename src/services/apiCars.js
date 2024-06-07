import supabase from "./supabase";

export async function getCars(sort) {
  try {
    let query = supabase.from("cars").select("*");

    if (sort) {
      query = query.order(sort.at(0), {
        ascending: sort.at(1) === "ascending",
      });
    }

    const { data, error } = await query;
    if (error) throw new Error("Cars cannot be loaded");

    return data;
  } catch (err) {
    console.error("Error fetching cars:", err.message);
  }
}
export async function getSomeCars({ from, to }) {
  let { data, error } = await supabase.from("cars").select("*").range(from, to);

  if (error) throw new Error("Cars cannot be loaded");

  return data;
}
