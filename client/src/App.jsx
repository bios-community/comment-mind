import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Analysis from "./pages/Analysis/Analysis";
import Home from "./pages/Home/Home";

import PreLoader from "./components/PreLoader/PreLoader";

import "./App.scss";

function App() {
	const [link, setLink] = useState("");
	return (
		<>
			<PreLoader />
			<Nav />
			<Routes>
				<Route path="/" element={<Home setLink={setLink} />} />
				<Route path="/analysis" element={<Analysis link={link} />} />
			</Routes>
		</>
	);
}

export default App;
