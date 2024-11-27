import { Router } from "express";
import { createNote } from "../controller/notesController/notesController";

const router: any = Router();

router.route("/create-note").post(createNote);
router.route("/create-note").delete(createNote);

export default router;
