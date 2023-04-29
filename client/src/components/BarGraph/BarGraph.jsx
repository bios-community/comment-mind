import React from "react";
import videoDetails from "../../constants/videoDetails";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

// console.log(videoDetails);

let numOfPositiveComments = 0;
let numOfNeutralComments = 0;
let numOfNegativeComments = 0;

videoDetails.feedback.forEach(comment => {
	if (comment.sentiment === "positive") numOfPositiveComments++;
	else if (comment.sentiment === "neutral") numOfNeutralComments++;
	else numOfNegativeComments++;
});

const options = {
	maintainAspectRatio: false,
	responsive: true,
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				display: true,
				color: "rgba(255, 255, 255, 0.25)",
				lineWidth: [1, 0],
			},
			title: {
				display: true,
				text: "Number of Comments",
				font: {
					size: 14,
					weight: "normal",
				},
				padding: {
					top: 10,
					bottom: 20,
				},
				color: "rgba(255, 255, 255, 0.8)",
			},
			border: {
				dash: [5, 5],
			},
		},
		x: {
			beginAtZero: true,
			grid: {
				display: true,
				color: "rgba(255, 255, 255, 0.25)",
				lineWidth: [1],
				tickBorderDash: [5, 5],
			},
			border: {
				dash: [5, 5],
			},
			title: {
				display: true,
				text: "Sentiments",
				font: {
					size: 14,
					weight: "normal",
				},
				padding: {
					top: 10,
					bottom: 20,
				},
				color: "rgba(255, 255, 255, 0.8)",
			},
		},
	},
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Number of Comments by Sentiment Analysis",
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

const labels = ["Positive", "Neutral", "Negative"];

const data = {
	labels,
	datasets: [
		{
			label: "Number of Comments",
			data: [
				numOfPositiveComments,
				numOfNeutralComments,
				numOfNegativeComments,
			],
			backgroundColor: [
				"#rgb(75, 192, 192)",
				"#ebe0ff)",
				"#rgb(255, 99, 132)",
			],
			borderColor: [
				"rgb(75, 192, 192)",
				"rgb(153, 102, 255)",
				"rgb(255, 99, 132)",
			],
			borderWidth: 1,
			borderRadius: 6,
		},
	],
};

const BarChart = () => {
	return (
		<div className="bar-wrapper">
			<Bar options={options} data={data} height={100} />
		</div>
	);
};

export default BarChart;
