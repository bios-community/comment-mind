import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

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
