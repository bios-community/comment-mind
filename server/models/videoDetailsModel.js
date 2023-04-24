import mongoose from "mongoose";

const videoDetailsSchema = mongoose.Schema({
	Title: String,
	Subscriber: String,
	"Channel Name": String,
	comment: [Object],
	question: [String],
});

const videoDetailsModel = mongoose.model(
	"video_details",
	videoDetailsSchema,
	"video_details"
);

export default videoDetailsModel;
