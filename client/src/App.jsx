import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./components/Nav/Nav";
import CommentAnalysis from "./components/CommentAnalysis/CommentAnalysis";
import Home from "./components/Home/Home";

import "./App.scss";

function App() {
	const [link, setLink] = useState("");
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home setLink={setLink} />} />
				<Route
					path="/comment-analysis"
					element={<CommentAnalysis link={link} />}
				/>
			</Routes>
		</>
	);
}

export default App;
