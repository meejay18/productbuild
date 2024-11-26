import { Schema, model } from "mongoose";

interface iUser {
  username: string;
  password: string;
  email: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>({});
