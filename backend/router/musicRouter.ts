import { Router } from "express";
import { createPlaylist } from "../controller/musicController/musicController";
import { searchSongs } from "../controller/musicController/musicController";

const router: any = Router();

router.route("/create-playlist").post(createPlaylist);
router.route("/search-songs").post(searchSongs);

export default router;
