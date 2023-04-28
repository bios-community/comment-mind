import React from "react";
import "./WordCloudSVG.scss";

const WordCloudSVG = ({ svgMarkup }) => {
	return (
		<div className="word-cloud-svg--wrapper">
			<div
				dangerouslySetInnerHTML={{ __html: svgMarkup }}
				className="word-cloud-svg"
			/>
			<div className="word-cloud-text">
				<span className="word-cloud-text--bigger">Word Cloud</span>
				<span className="word-cloud-text--smaller">
					based on feedbacks analysis
				</span>
			</div>
		</div>
	);
};

export default WordCloudSVG;
