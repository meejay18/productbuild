import { Request, Response } from "express";
import musicAppModel from "../../musicModel/musicAppModel";
import playListModel from "../../musicModel/playListModel";

export const searchSongs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const { query } = req.query;
    const { musicname, artiste, genre, Duration, dateCreated } = req.body;
    const songs = await musicAppModel.find({
      musicname,
      artiste,
      genre,
      Duration,
      dateCreated,
    });

    return res.status(201).json({
      message: "song found successfully",
      data: songs,
      status: 201,
    });
  } catch (error) {
    return res.status(500).json({
      message: "couldn't find song",
      error,
    });
  }
};

export const createPlaylist = async (req: Request, res: Response) => {
  try {
    const { title, datecreated, songs } = req.body;

    const playlist = await playListModel.create({ title, datecreated, songs });

    return res.status(201).json({
      message: "playlist created successfully",
      data: playlist,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "playlist not created",
      data: error.message,
      status: 404,
    });
  }
};
