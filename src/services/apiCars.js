import supabase from "./supabase";

export async function GetCars() {
  let { data: cars, error } = await supabase.from("cars").select("*");

  if (error) throw new Error("Cars cannot be loaded");

  return cars;
}
