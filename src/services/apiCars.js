import supabase from "./supabase";

export async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");

  if (error) throw new Error("Cars cannot be loaded");

  return data;
}
