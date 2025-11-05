import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "../../../models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        await mongoose.connect(process.env.MONGODB_URL);
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
});

export { handler as GET, handler as POST };
