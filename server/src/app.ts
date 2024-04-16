import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import appRouter from "./routes/index.js";

config();
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors());

app.use("/api/v1", appRouter);

export default app;
