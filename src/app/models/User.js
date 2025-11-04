import bcrypt from "bcrypt";
import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass?.length < 5) {
          new Error("Password must be at least 5 characters long");
        }
      },
    },
  },
  { timestamps: true }
); // 1. create schema

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

export const User = models?.User || model("User", UserSchema);
// 2. create model if not user in database it will create new model
// must have api/signup/route.js to use this model and send req from there using post methode to send email and pass
