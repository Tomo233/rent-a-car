import supabase from "./supabase";

export async function signUp(signUpEmail, signUpPassword) {
  console.log(signUpEmail);
  console.log(signUpPassword);
  try {
    let { data, error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
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

export async function login({ email, password }) {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      throw new Error(`Login Error: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}
