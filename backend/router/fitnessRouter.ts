import { Router } from "express";
import { createExercise } from "../controller/fitnessController/fitnessController";
import { getAllExercises } from "../controller/fitnessController/fitnessController";

const router: any = Router();

router.route("/create-Exercise").post(createExercise);
router.route("/get-All-Exercises").get(getAllExercises);

export default router;
