import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Analysis.scss";
import Loader from "../../components/Loader/Loader";
import Graphs from "../../components/Graphs/Graphs";
import Table from "../../components/Table/Table";

import videoDetails from "../../constants/videoDetails";

const Analysis = ({ link }) => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	// const [generatingGraphs, setGeneratingGraphs] = useState(false);

	useEffect(() => {
		if (!link) {
			navigate("/");
		}

		setIsLoading(true);
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	// useEffect(async () => {
	// 	const response = await axios.post("http://localhost:3000/comments", {
	// 		link,
	// 	});
	// 	console.log(response);
	// 	setIsLoading(false);
	// }, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="container">
					<h1 className="analysis-title">{videoDetails.title}</h1>
					<div className="tables">
						<Table
							contentArray={videoDetails.question}
							type="Questions"
						/>
						<Table
							contentArray={videoDetails.feedback}
							type="Feedbacks"
						/>
					</div>
					<>
						<Graphs />
					</>
				</div>
			)}
		</>
	);
};

export default Analysis;
