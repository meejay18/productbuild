import { Request, Response } from "express";
import fitnessModel from "../../model/fitnessModel/fitnessModel";

export const createExercise = async (req: Request, res: Response) => {
  try {
    const { title, description, exercises, createdBy } = req.body;

    const fitness = await fitnessModel.create({
      title,
      description,
      exercises,
      createdBy,
    });

    res.status(201).json({
      message: "Exercise created successfully",
      data: fitness,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create exercise",
      error: error.message,
    });
  }
};

export const getAllExercises = async (req: Request, res: Response) => {
  try {
    const exercises = await fitnessModel.find();
    res.status(200).json({
      message: "Exercises retrieved successfully",
      data: exercises,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to retrieve exercises",
      error: error.message,
    });
  }
};
