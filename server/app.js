import express from "express";
import cors from "cors";

import commentRouter from "./routes/commentRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/comments", commentRouter);

export default app;
