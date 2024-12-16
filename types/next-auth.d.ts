import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT } from "@auth/core/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    role: string & DefaultJWT;
  }
}
