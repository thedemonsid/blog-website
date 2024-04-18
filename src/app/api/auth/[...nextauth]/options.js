import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "siddhesh@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          email: credentials.email,
          password: credentials.password,
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GithubProvider({
      profile(profile) {
        console.log("Profile :\n", profile);
        let userRole = "Github User";
        if (profile.email == "siddheshshrirame@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GithubId,
      clientSecret: process.env.GithubSecret,
    }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile\n".profile);
        return {
          ...profile,
          id: profile.sub,
        };
      },
      clientId: process.env.GoogleId,
      clientSecret: process.env.GoogleSecret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.role = token.role;
      return session;
    },
  },
};
