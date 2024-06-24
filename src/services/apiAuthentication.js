import supabase from "./supabase";

export async function signUp(signUpEmail, signUpPassword) {
  console.log(signUpEmail);
  console.log(signUpPassword);
  try {
    let { data, error } = await supabase.auth.signUp({
      email: "tomo12b@gmail.com",
      password: "tomo5555555555",
    });

    if (error) {
      console.error("Error while signing up:", error.message);
      throw new Error(`Error while signing up: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Sign-up error:", error.message);
    throw error;
  }
}
