import React from "react";
import "./Home.scss";

import Header from "../../components/Header/Header";
import LinkForm from "../../components/LinkForm/LinkForm";

const Home = ({ setLink }) => {
	return (
		<>
			<Header />
			<LinkForm setLink={setLink} />
		</>
	);
};

export default Home;
