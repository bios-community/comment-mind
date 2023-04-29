import React from "react";
import BarGraphs from "../BarGraph/BarGraph";
import DoughnutGraph from "../DoughnutGraph/DoughnutGraph";
import WordCloud from "../WordCloud/WordCloud";

import "./Graphs.scss";

const Graphs = ({ videoDetails }) => {
	console.log(videoDetails);
	return (
		<div className="graphs">
			<div className="graphs__chartjs">
				<BarGraphs comment={videoDetails.comment} />
				<DoughnutGraph
					comment={videoDetails.comment}
					question={videoDetails.question}
				/>
			</div>
			<WordCloud comment={videoDetails.comment} />
		</div>
	);
};

export default Graphs;
