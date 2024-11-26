import { Schema, model } from "mongoose";

interface iMusic {
  musicname: string;
  genre: string;
  dateCreated: string;
  artiste: string;
  Duration: string;
}

interface iMusicData extends iMusic, Document {}

const musicModel = new Schema<iMusicData>(
  {
    musicname: {
      type: String,
    },
    genre: {
      type: String,
    },
    dateCreated: {
      type: String,
    },
    Duration: {
      type: String,
    },
    artiste: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iMusicData>("music", musicModel);
