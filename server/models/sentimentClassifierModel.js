// import mongoose from "mongoose";

// const sentimentClassifierSchema = new mongoose.Schema({
// 	sentiment: String,
// 	feedbacks: {},
// });

// const sentimentClassifier = mongoose.model(
// 	"sentiment_classifier",
// 	sentimentClassifierSchema,
// 	"sentiment_classifier"
// );

import mongoose from "mongoose";

const sentimentClassifier = new mongoose.Schema({
	comment: {
		type: [String],
		required: [true, "It must have a Comment!"],
	},
});

const sentimentClassifierModel = mongoose.model(
	"sentiment_classifier",
	sentimentClassifier,
	"sentiment_classifier"
);
export default sentimentClassifierModel;
