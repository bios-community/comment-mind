import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header container">
			{/* <div className="header__token">Comment Mind</div> */}
			<h1 className="header__title">
				<span className="header__title--highlight">Comment Mind</span> -
				Analyze YouTube Comments and Discover Insights
			</h1>
			<p className="header__description">
				Get started today and discover what your YouTube audience is
				saying about your content with Comment Mind. We use AI model to
				analyze and generate graphs to help you understand your audience
				better.
			</p>
		</header>
	);
};

export default Header;
