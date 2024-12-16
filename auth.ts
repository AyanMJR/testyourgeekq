import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./app/db";
import Credentials from "next-auth/providers/credentials";

function createAnonymousUser() {
  return {
    name: "anonymous",
    image: "",
    role: "guest",
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google,
    Credentials({
      name: "Anonymous",
      credentials: {},
      async authorize() {
        return createAnonymousUser();
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, account }) => {
      if (account && account?.provider === "google") {
        token.role = "user";
      }
      if (!token.role) token.role = "guest";
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
  },
  pages: {
    signIn: "/",
  },
});
