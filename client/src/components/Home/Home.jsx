import React from "react";
import "./Home.scss";

import Header from "../Header/Header";
import LinkForm from "../LinkForm/LinkForm";

const Home = ({ setLink }) => {
	return (
		<>
			<Header />
			<LinkForm setLink={setLink} />
		</>
	);
};

export default Home;
