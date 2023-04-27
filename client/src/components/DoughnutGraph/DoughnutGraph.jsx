import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import videoDetails from "../../constants/videoDetails";

ChartJS.register(ArcElement, Tooltip, Legend);

const numOfFeedback = videoDetails.feedback.length;
const numOfQuestions = videoDetails.question.length;

const data = {
	labels: ["Feedback", "Questions"],
	datasets: [
		{
			label: "Count",
			data: [numOfFeedback, numOfQuestions],
			backgroundColor: ["rgba(54, 162, 235)", "rgba(255, 206, 86)"],
			borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
			borderWidth: 1,
		},
	],
};

const options = {
	offset: 50,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Number of Comments & Questions",
			font: {
				size: 20,
				family: "serif",
				weight: "bold",
			},
			color: "#fff",
			padding: {
				top: 10,
				bottom: 30,
			},
		},
	},
};

// "rgba(255, 99, 132, 0.2)",
// "rgba(54, 162, 235, 0.2)",
// "rgba(255, 206, 86, 0.2)",
// "rgba(75, 192, 192, 0.2)",
// "rgba(153, 102, 255, 0.2)",
// "rgba(255, 159, 64, 0.2)"

const DoughnutGraph = () => {
	return (
		<div className="doughnut-wrapper">
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default DoughnutGraph;
