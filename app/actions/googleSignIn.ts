"use server";

import { signIn } from "@/auth";

export async function googleSignIn() {
  await signIn("google", { redirectTo: "/play" });
}

export async function guestSignIn() {
  await signIn("credentials", { redirectTo: "/play" });
}
