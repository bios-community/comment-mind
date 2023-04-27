import React from "react";
import BarGraphs from "../BarGraph/BarGraph";
import DoughnutGraph from "../DoughnutGraph/DoughnutGraph";

import "./Graphs.scss";

const Graphs = () => {
	return (
		<div className="graphs">
			<div className="graphs__chartjs">
				<BarGraphs />
				<DoughnutGraph />
			</div>
		</div>
	);
};

export default Graphs;
