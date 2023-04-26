import MindsDB from "mindsdb-js-sdk";
import dotenv from "dotenv";

dotenv.config();

const MINDSDB_EMAIL = process.env.MINDSDB_EMAIL;
const MINDSDB_PASSWORD = process.env.MINDSDB_PASSWORD;

await MindsDB.default.connect({
	user: MINDSDB_EMAIL,
	password: MINDSDB_PASSWORD,
});

// * For getting the `mongo_atlas` database
// const mongoAtlasDB = await MindsDB.default.Databases.getDatabase("mongo_atlas");
// console.log(mongoAtlasDB.video_details);

// * For getting all the data in the `video_details` collection
const queryForData = `SELECT * FROM mongo_atlas.video_details`;
const data = await MindsDB.default.SQL.runQuery(queryForData);

// * For getting the comments & questions from the document we want
const videoDetails = data.rows.find(row => {
	if (row.title == "Docker in 100 Seconds") return row;
});

const title = videoDetails.title;
const feedback = videoDetails.comment;
const questions = videoDetails.question;

const feedbackArray = feedback.map(comment => comment.comment);

// * For getting the sentiment_classifier model
// const sentimentClassifierModel = await MindsDB.default.Models.getModel(
// 	"sentiment_classifier",
// 	"mindsdb"
// );

// * For predicting a single comment
/*
const answer = await MindsDB.default.Models.queryModel(
	"sentiment_classifier",
	1,
	"sentiment",
	"mindsdb",
	{ where: 'comment="I Love This!"' }
);
console.log("This ran!");
console.log(answer);
*/

// * For predicting multiple comments
// ! Not Working
/*
const answer = await MindsDB.default.Models.queryModel(
	"sentiment_classifier",
	1,
	"sentiment",
	"mindsdb",
	{
		where: `comment="I love this video" AND comment="I hate this video"`,
	}
);
*/
