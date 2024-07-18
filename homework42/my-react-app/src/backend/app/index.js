import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { logger } from "../libs/logger.js";
import todoRouter from "./todoRouters.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.n1tlszo.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  logger.error(`Connection error: ${JSON.stringify(error)}`);
});

db.on("open", () => {
  logger.info("Connected to MongoDB 🎉🎉🎉");
});

const logRequestMiddleware = process.env.LOGGER_LEVEL === "debug"
  ? (req, res, next) => {
      logger.info(`${req.method}: '${req.path}'`);
      next();
    }
  : (req, res, next) => next();

app.use(logRequestMiddleware);
app.use("/api", todoRouter); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

export { app };
