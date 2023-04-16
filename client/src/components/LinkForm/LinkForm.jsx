import React from "react";
import { Link } from "react-router-dom";
import "./LinkForm.scss";

import GearIcon from "../../assets/gear.svg";

const LinkForm = ({ setLink }) => {
	return (
		<div className="container">
			<form className="link-form">
				<input
					type="text"
					className="link-form__input"
					placeholder="Enter a YouTube Video Link"
					onChange={e => setLink(e.target.value)}
				/>
				<Link className="link-form__button" to="/analysis">
					Analyze <img src={GearIcon} alt="Gear Icon" />
				</Link>
			</form>
		</div>
	);
};

export default LinkForm;
