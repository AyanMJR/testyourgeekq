"use server"

import { signIn } from "@/auth"

export async function googleSignIn() {
  try {
    await signIn("google");
    return true;
  } catch(err) {
    console.log(err)
    return false;
  }
}