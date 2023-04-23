import { PythonShell } from "python-shell";
import sentimentClassifierModel from "../models/sentimentClassifierModel.js";

const commentHandler = async (req, res) => {
	try {
		// * Creating options
		// const options = {
		// 	mode: "text",
		// 	args: [req.body.link],
		// 	scriptPath: "./python_db/",
		// };

		// * To run Python Script
		// const message = await PythonShell.run("mongo_client.py", options);

		const answer = await sentimentClassifierModel.find(
			{
				collection: `mongo_atlas.f_UzLyqpo`,
			},
			{
				"sentiment_classifier.sentiment": "sentiment",
				"f_UzLyqpo.comment": "comment",
			}
		);

		// // 	const answer = await sentimentClassifier.find("what a shit video!");

		res.status(200).json({
			answer,
		});
		// 	// db.sentiment_classifier.find(
		// 	// 	{'collection': 'mongo_atlas.feedbacks'},
		// 	// 	{'sentiment_classifier.sentiment': 'sentiment',
		// 	// 	 'feedbacks.comment': 'comment'
		// 	// 	}
		// 	// )
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
	// const answer = await sentimentClassifierModel.find({
	// 	comment: ["what a shit video!", "what a beautiful day!"],
	// });

	// res.status(200).json({
	// 	answer,
	// });
};

export default commentHandler;
