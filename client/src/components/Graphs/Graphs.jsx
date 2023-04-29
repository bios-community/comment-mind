import React from "react";
import BarGraphs from "../BarGraph/BarGraph";
import DoughnutGraph from "../DoughnutGraph/DoughnutGraph";
import WordCloud from "../WordCloud/WordCloud";

import "./Graphs.scss";

const Graphs = () => {
	return (
		<div className="graphs">
			<div className="graphs__chartjs">
				<BarGraphs />
				<DoughnutGraph />
			</div>
			<WordCloud />
		</div>
	);
};

export default Graphs;
