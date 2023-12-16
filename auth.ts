import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

async function getUser(email: string) {
  try {
    const user = await sql`select * from users where email=${email}`;
    return user.rows[0];
  } catch (e) {
    throw new Error("Failed to fetch user.");
  }
}
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      //@ts-ignore
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string(), password: z.string() })
          .safeParse(credentials);
        //@ts-ignore
        const { email, password } = parsedCredentials?.data;
        const user = await getUser(email);
        if (parsedCredentials.success) {
          const user = await getUser(email);
          if (!user) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }

          return null;
        }
      },
    }),
  ],
});
