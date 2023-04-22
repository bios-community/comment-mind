import { PythonShell } from "python-shell";

const commentHandler = async (req, res) => {
	try {
		const options = {
			mode: "text",
			args: [req.body.link],
			scriptPath: "./python_db/",
		};
		const message = await PythonShell.run("mongo_client.py", options);
		res.status(200).json({
			message,
		});
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
};

export default commentHandler;
