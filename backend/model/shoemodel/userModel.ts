import { Schema, model } from "mongoose";

interface iUser {
  username: string;
  password: string;
  email: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("user", userModel);
