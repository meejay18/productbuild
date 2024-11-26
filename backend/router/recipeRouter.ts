import { Router } from "express";
import { getAllRecipes } from "../controller/recipeController/recipeController";
import { createRecipe } from "../controller/recipeController/recipeController";

const router: any = Router();

router.route("/get-all-recipes").get(getAllRecipes);
router.route("/create-recipe").post(createRecipe);

export default router;
