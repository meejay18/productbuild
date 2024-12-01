import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../../model/shoemodel/userModel";
import crypto from "crypto";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const acc = crypto.randomBytes(2).toString("hex");

    const user = await userModel.create({
      email,
      username,
      password: hashed,
      accNumber: acc,
    });

    return res.status(200).json({
      message: "user created successfully",
      status: 200,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating user",
      status: 404,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const getUser = await userModel.findOne({ email });

    if (getUser) {
      const passwordCheck = await bcrypt.compare(password, getUser.password);
      return res.status(200).json({
        message: "Welcome to the application",
        data: passwordCheck,
        status: 200,
      });
    } else {
      return res.status(404).json({
        message: "invalid credentials, check your credentials",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error logging in",
      status: 404,
    });
  }
};

export const forgetUserPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(200).json({
        message: "A message has been sent to your email address",
      });
    } else {
      return res.status(404).json({
        message: "No user with the email in our database",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};
