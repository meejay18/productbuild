import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import env from "dotenv";
import { mainApp } from "./mainApp";
env.config();
import productRouter from "./router/productRouter";
import musicRouter from "./router/musicRouter";
import recipeRouter from "./router/recipeRouter";
import noteRouter from "./router/noteRouter";
import fitnessRouter from "./router/fitnessRouter";

const app: Application = express();
app.use(express.json());

app.use("/api", productRouter);
app.use("/api", musicRouter);
app.use("/api", recipeRouter);
app.use("/api", noteRouter);
app.use("/api", fitnessRouter);

const port: number = parseInt(process.env.PORT as string);
app.use(cors());

mainApp(app);
app.listen(port, () => {
  dbConfig();
});
