import { Request, Response } from "express";

import { connect } from "mongoose";
import env from "dotenv";

env.config();

export const dbConfig = async () => {
  try {
    await connect(process.env.DB_URL as string).then(() => {
      console.log("Server connected successfully❤️❤️❤️");
    });
  } catch (Error) {
    console.log(Error);
  }
};
