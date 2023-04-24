import { PythonShell } from "python-shell";
import sentimentClassifierModel from "../models/sentimentClassifierModel.js";
import videoDetailsModel from "../models/videoDetailsModel.js";

const commentHandler = async (req, res) => {
	/* * Just for some time
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
	*/

	// const predictions = await sentimentClassifierModel.find(
	// 	{
	// 		collection: "mongo_atlas.video_details",
	// 	},
	// 	{
	// 		"sentiment_classifier.sentiment": "sentiment",
	// 		// "video-details.comment": "comment",
	// 	}
	// );

	const answer = await videoDetailsModel.find({
		collection: "mongo_atlas.video_details",
		Title: "What to Do When Your College Doesn't Care About You?",
	});

	const comments = answer[0].comment;

	// const predictions = await comments.map(async comment => {
	// 	const prediction = await sentimentClassifierModel.find(comment);
	// 	return prediction;
	// });

	// * Declaring the function

	const getPredictions = comments => {
		let count = 0;
		return Promise.all(
			comments.map(async comment => {
				const prediction = await sentimentClassifierModel.find(comment);
				count++;
				console.log(prediction);
				console.log(`Count: ${count}`);
				console.log("-----------------");
				return prediction;
			})
		);
	};

	// * Calling the function
	const predictions = await getPredictions(comments);

	// const prediction = await sentimentClassifierModel.find(comments[0]);

	res.status(200).json({
		predictions,
	});
};

export default commentHandler;
