import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Analysis.scss";
import Loader from "../../components/Loader/Loader";

const Analysis = ({ link }) => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	// const [generatingGraphs, setGeneratingGraphs] = useState(false);

	useEffect(() => {
		if (!link) {
			navigate("/");
		}

		setIsLoading(true);
	}, []);

	useEffect(async () => {
		const response = await axios.post("http://localhost:3000/comments", {
			link,
		});
		console.log(response);
		setIsLoading(false);
	}, []);

	return <>{isLoading ? <Loader /> : <div>Analysis</div>}</>;
};

export default Analysis;
