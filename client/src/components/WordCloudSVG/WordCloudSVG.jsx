import React from "react";

const WordCloudSVG = ({ svgMarkup }) => {
	return <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />;
};

export default WordCloudSVG;
