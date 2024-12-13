import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./app/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
});
