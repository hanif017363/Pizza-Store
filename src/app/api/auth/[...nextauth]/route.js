import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "../../../models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "../../../../libs/mongoConnect";

const handler = NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        await mongoose.connect(process.env.MONGODB_URI);
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValid = bcrypt.compareSync(password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  secret: "CHANGE_THIS_TO_A_RANDOM_STRING",
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
