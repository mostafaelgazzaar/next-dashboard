import type { NextAuthConfig } from "next-auth";
import { User } from "@/app/lib/definitions";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return { ...token };
    },
    async session({ session, token }) {
      session.user = token.user as User;
      return { ...session, ...token };
    },
  },
  providers: [],
} satisfies NextAuthConfig;
