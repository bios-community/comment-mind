import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const DATABASE_URI = process.env.MONGODB_URI;
mongoose.connect(DATABASE_URI).then(() => {
	console.log("Connected To DataBase!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server started on Port ${PORT}`);
});

import app from "./app.js";
