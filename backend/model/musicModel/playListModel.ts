import { Schema, model } from "mongoose";

interface iPlayList {
  title: string;
  datecreated: string;
  songs: string;
}

interface iPlayListData extends iPlayList, Document {}

const iPlayListModel = new Schema<iPlayListData>(
  {
    title: {
      type: String,
    },
    datecreated: {
      type: String,
    },
    songs: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iPlayListData>("playlist", iPlayListModel);
