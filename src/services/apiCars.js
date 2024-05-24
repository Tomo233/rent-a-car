import supabase from "./supabase";

export async function getCars({ sortQuery, ascending }) {
  let query = supabase.from("cars").select("*");

  if (sortQuery) {
    query = query.order(sortQuery, { ascending: ascending });
  }

  const { data, error } = await query;
  if (error) throw new Error("Cars cannot be loaded");

  return data;
}
export async function getSomeCars({ from, to }) {
  let { data, error } = await supabase.from("cars").select("*").range(from, to);

  if (error) throw new Error("Cars cannot be loaded");

  return data;
}
