import { Schema, model } from "mongoose";

interface iNotes {
  title: string;
  content: string;
  category: string;
  createdBy: string;
  createdAt: Date;
}

interface iNotesData extends iNotes, Document {}

const noteModel = new Schema<iNotesData>(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iNotesData>("notes", noteModel);
