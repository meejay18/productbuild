import { Schema, model } from "mongoose";

interface iRecipe {
  ingredients: Array<string>;
  title: string;
  description: string;
  creator: string;
  createdAt: Date;
}

interface iRecipeData extends iRecipe, Document {}

const recipeModel = new Schema<iRecipeData>(
  {
    ingredients: {
      type: [String],
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    creator: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iRecipeData>("recipes", recipeModel);
