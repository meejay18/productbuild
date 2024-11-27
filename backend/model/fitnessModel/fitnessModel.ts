import { Schema, model } from "mongoose";
interface IWorkout {
  title: string;
  description: string;
  exercises: Array<string>;
  createdBy: string;
}

interface iWorkoutData extends IWorkout, Document {}

const fitnessModel = new Schema<iWorkoutData>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    exercises: {
      type: [String],
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iWorkoutData>("fitness", fitnessModel);
