import React, { useState, useEffect } from "react";
import videoDetails from "../../constants/videoDetails";
import axios from "axios";

import WordCloudSVG from "../WordCloudSVG/WordCloudSVG";
import Loader from "../Loader/Loader";

const WordCloudElement = () => {
	const [wordCloudSVG, setWordCloudSVG] = useState(null);
	const [wordCloudLoaded, setWordCloudLoaded] = useState(false);

	const getWordCloud = async () => {
		try {
			const res = await axios.post("https://quickchart.io/wordcloud", {
				text: wordCloudData,
				format: "svg",
				width: 500,
				height: 500,
				maxNumWords: 100,
				removeStopwords: true,
				colors: [
					"#f5b5fc",
					"#96f7d2",
					"#f0f696",
					"#fcb1b1",
					"#61f4de",
					"#6c8def",
					"#65cbe9",
				],
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
		<>
			{wordCloudLoaded ? (
				<WordCloudSVG svgMarkup={wordCloudSVG} />
			) : (
				<Loader />
			)}
		</>
	);
};

export default WordCloudElement;
