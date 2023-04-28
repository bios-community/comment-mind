import React, { useState, useEffect } from "react";
import videoDetails from "../../constants/videoDetails";
import axios from "axios";
import WordCloudSVG from "../WordCloudSVG/WordCloudSVG";

const WordCloudElement = () => {
	const [wordCloudSVG, setWordCloudSVG] = useState(null);
	const [wordCloudLoaded, setWordCloudLoaded] = useState(false);

	const getWordCloud = async () => {
		try {
			const res = await axios.post("https://quickchart.io/wordcloud", {
				text: wordCloudData,
				format: "svg",
			});
			setWordCloudSVG(res.data);
			setWordCloudLoaded(true);
			console.log(wordCloudSVG);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getWordCloud();
	}, []);

	console.log("The word cloud element is being rendered");

	const commentsArray = videoDetails.feedback.map(feedback => {
		return feedback.comment[0];
	});

	const wordCloudData = commentsArray.join(" ");

	return (
		<div className="word-cloud-wrapper">
			{wordCloudLoaded ? <WordCloudSVG svgMarkup={wordCloudSVG} /> : ""}
		</div>
	);
};

export default WordCloudElement;
