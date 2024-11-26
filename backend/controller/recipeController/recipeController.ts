import { Request, Response } from "express";
import recipeModel from "../../model/recipeModel/recipeModel";

export const createRecipe = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, ingredients, description, creator, createdAt } = req.body;
    const recipe = await recipeModel.create({
      title,
      ingredients,
      description,
      creator,
      createdAt,
    });
    return res.status(201).json({
      message: "Recipe created successfully",
      data: recipe,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating recipe",
      data: error.message,
    });
  }
};

export const getAllRecipes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const recipe = await recipeModel.find();
    return res.status(201).json({
      message: "Recipes successfully fetched",
      data: recipe,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Failed to fetch recipes",
      data: error.message,
    });
  }
};
