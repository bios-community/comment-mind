import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = ({ comment, question }) => {
	const numOfFeedback = comment.length;
	const numOfQuestions = question.length;

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

	return (
		<div className="doughnut-wrapper">
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default DoughnutGraph;
