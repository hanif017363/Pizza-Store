import mongoose from "mongoose";
import { User } from "../../../models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        mongoose.connect(process.env.MONGODB_URL);
        const user = await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
          return user;
        }
      },
    }),
  ],
  secret: "CHANGE_THIS_TO_A_RANDOM_STRING",
});

export { handler as GET, handler as POST };
