import express from "express";

import commentHandler from "../handlers/commentHandler.js";

const router = express.Router();

router.route("/").post(commentHandler);

export default router;
