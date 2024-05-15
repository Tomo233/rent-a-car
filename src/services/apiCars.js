import supabase from "./supabase";

export async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");

  if (error) throw new Error("Cars cannot be loaded");

  return data;
}
export async function getSomeCars({ from, to }) {
  let { data, error } = await supabase.from("cars").select("*").range(from, to);

  if (error) throw new Error("Cars cannot be loaded");

  return data;
}
