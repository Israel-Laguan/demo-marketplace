import { authenticate } from "@/services/authService";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          const res = await authenticate(
            credentials.email,
            credentials.password
          );
          if (typeof res !== "undefined") {
            return { ...res.user };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session ({ session, token }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (
          c !== "iat" &&
          c !== "exp" &&
          c !== "jti" &&
          c !== "apiToken"
        ) {
          return { ...p, [c]: token[c] }
        } else {
          return p
        }
      }, {})
      return { ...session, user: sanitizedToken, apiToken: token.apiToken }
    },
    async jwt ({ token }) {
      return token
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
