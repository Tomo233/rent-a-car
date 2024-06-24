import supabase from "./supabase";

export async function signUp() {
  try {
    let { data, error } = await supabase.auth.signUp({
      email: "someone@email.com",
      password: "QzkAKPyOXazjUuVOfBDI",
    });

    if (error) throw new Error("Error while signing up", error.message);

    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
