import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Analysis.scss";
import Loader from "../../components/Loader/Loader";
import Graphs from "../../components/Graphs/Graphs";
import Table from "../../components/Table/Table";

const Analysis = ({ link }) => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [videoDetails, setVideoDetails] = useState(null);

	const fetchData = async () => {
		const response = await axios.post("http://localhost:3000/comments", {
			link,
		});

		// * Using fetch
		// const response = await fetch("http://localhost:3000/comments", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		link: link,
		// 	}),
		// });

		// const data = await response.json();

		console.log(response.data.data[0]);
		setVideoDetails(response.data.data[0]);
		setIsLoading(false);
	};

	// useEffect(() => {
	// 	console.log(videoDetails && videoDetails);
	// }, [videoDetails]);

	useEffect(() => {
		if (!link) {
			navigate("/");
		}
		setIsLoading(true);
		fetchData();
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				videoDetails && (
					<div className="container">
						<h1 className="analysis-title">{videoDetails.Title}</h1>
						<div className="tables">
							<Table
								contentArray={videoDetails.question}
								type="Questions"
							/>
							<Table
								contentArray={videoDetails.comment}
								type="Feedbacks"
							/>
						</div>
						<>
							<Graphs videoDetails={videoDetails} />
						</>
					</div>
				)
			)}
		</>
	);
};

export default Analysis;
