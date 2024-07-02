import supabase from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function signUp({
  signUpEmail,
  signUpPassword,
  phone,
  userName,
  avatar,
}) {
  try {
    const uniqueId = uuidv4();
    const fileName = avatar ? `${uniqueId}_${avatar.name}` : null;
    const filePath = avatar
      ? `https://ieffmbujdqbtydbuhuiw.supabase.co/storage/v1/object/public/avatars/${fileName}`
      : null;

    let { data, error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
      options: {
        data: {
          phone,
          userName,
          avatarUrl: filePath,
        },
      },
    });

    if (error) {
      console.error("Error while signing up:", error.message);
      throw new Error(`Error while signing up: ${error.message}`);
    }

    // Upload the avatar to storage
    if (avatar) {
      const { error: storageError } = await supabase.storage
        .from("avatars")
        .upload(fileName, avatar);

      if (storageError) {
        console.error("Error with storage:", storageError.message);
        throw new Error(`Error with storage: ${storageError.message}`);
      }
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

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function changeAvatar(avatar) {
  const uniqueId = uuidv4();
  const fileName = avatar ? `${uniqueId}_${avatar.name}` : null;
  const filePath = avatar
    ? `https://ieffmbujdqbtydbuhuiw.supabase.co/storage/v1/object/public/avatars/${fileName}`
    : null;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) {
    console.error("Error with storage:", storageError.message);
    throw new Error(`Error with storage: ${storageError.message}`);
  }

  const { data, error } = await supabase.auth.updateUser({
    data: { avatarUrl: filePath },
  });

  if (error) {
    console.error("Login error:", error.message);
    throw new Error(`Login Error: ${error.message}`);
  }

  return data;
}

export async function deleteAvatar() {
  const { data, error } = await supabase.auth.updateUser({
    data: { avatarUrl: null },
  });

  if (error) {
    console.error("Login error:", error.message);
    throw new Error(`Login Error: ${error.message}`);
  }

  return data;
}
