import { auth } from "@/lib/firebase/admin";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider, {
  type CredentialInput,
} from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider<{ idToken?: CredentialInput }>({
      credentials: {},
      authorize: async (credentials, _req) => {
        if (credentials?.idToken) {
          try {
            const decoded = await auth.verifyIdToken(credentials.idToken);

            return {
              ...decoded,
              id: decoded.uid,
              idToken: credentials.idToken,
            };
          } catch (e) {
            console.error(e);
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log("callback jwt", { token, user });
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      console.log("callback session", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          emailVerified: token.email_verified,
          uid: token.uid,
          // idToken: token.idToken,
        },
      };
    },
  },
};

export default NextAuth(authOptions);
