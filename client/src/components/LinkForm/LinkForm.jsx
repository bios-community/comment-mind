import React from "react";
import "./LinkForm.scss";

import SearchIcon from "../../assets/search.svg";

const LinkForm = () => {
	return (
		<div className="container">
			<div className="link-form">
				<input
					type="text"
					className="link-form__input"
					placeholder="Enter a YouTube Video Link"
				/>
				<button className="link-form__button">
					Analyze <img src={SearchIcon} alt="Search Icon" />
				</button>
			</div>
		</div>
	);
};

export default LinkForm;
