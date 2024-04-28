import dbConnect from "@/dbConfig/dbConfig";
import { User } from "@/models/blogModel";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GithubId,
      clientSecret: process.env.GithubSecret,
    }),

    GoogleProvider({
      clientId: process.env.GoogleId,
      clientSecret: process.env.GoogleSecret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ profile }) {
      try {
        await dbConnect();
        const userExist = await User.findOne({ email: profile.email });
        if (!userExist) {
          const user = await User.create({
            email: profile.email,
            name: profile.name || "",
            image: profile.avatar_url || profile.picture || "",
          });
          return true;
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session, token }) {
      await dbConnect();
      if (session) {
        const sessionUser = await User.findOne({ email: session.user.email });
        if (sessionUser) {
          session.user.id = sessionUser._id;
        }
      }
      return session;
    },
  },
};
