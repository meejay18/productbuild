import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import env from "dotenv";
import { mainApp } from "./mainApp";
env.config();
import productRouter from "./router/productRouter";

const app: Application = express();
app.use(express.json());

app.use("/api", productRouter);

const port: number = parseInt(process.env.PORT as string);
app.use(cors());

mainApp(app);
app.listen(port, () => {
  dbConfig();
});
