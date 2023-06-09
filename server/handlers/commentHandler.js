import { PythonShell } from "python-shell";
import videoDetailsModel from "../models/videoDetailsModel.js";

const commentHandler = async (req, res) => {
	try {
		// * Creating options
		const options = {
			mode: "text",
			args: [req.body.link],
			scriptPath: "./python_db/",
		};
		// * To run Python Script
		const Title = await PythonShell.run("mongo_client.py", options);
		// console.log(title);

		const data = await videoDetailsModel.find({
			Title,
		});

		res.status(200).json({
			data,
		});
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
};

export default commentHandler;
