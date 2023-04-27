import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Analysis.scss";
import Loader from "../../components/Loader/Loader";
import Graphs from "../../components/Graphs/Graphs";

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
					<div className="graphs">
						<Graphs />
					</div>
				</div>
			)}
		</>
	);
};

export default Analysis;
