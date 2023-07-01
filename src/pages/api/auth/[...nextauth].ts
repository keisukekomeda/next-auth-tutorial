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

            return { ...decoded, id: decoded.uid };
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
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          emailVerified: token.emailVerified,
          uid: token.uid,
        },
      };
    },
  },
};

export default NextAuth(authOptions);
