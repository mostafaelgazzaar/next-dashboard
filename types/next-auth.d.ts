import NextAuth from "next-auth";
import { User } from "@/app/lib/definitions";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
  }

  interface JWT {
    user?: User;
  }
}
