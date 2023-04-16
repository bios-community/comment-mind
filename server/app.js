import express from "express";

import commentRouter from "./routes/commentRouter.js";

const app = express();

app.use(express.json());

app.use("/comments", commentRouter);

export default app;
