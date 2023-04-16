import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LinkForm.scss";

import GearIcon from "../../assets/gear.svg";

const LinkForm = ({ setLink }) => {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const youtubeRegex =
		/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?=.*v=\w+)(?:\S+)?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})(?:\S+)?$/;

	const handleSubmit = e => {
		e.preventDefault();

		if (youtubeRegex.test(inputValue)) {
			setLink(inputValue);
			navigate("/analysis");
		} else {
			setInputValue("");
			alert("Please enter a valid YouTube video link.");
		}
	};

	return (
		<div className="container">
			<form className="link-form">
				<input
					type="text"
					className="link-form__input"
					placeholder="Enter a YouTube Video Link"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
					onSubmit={handleSubmit}
				/>
				<button
					type="submit"
					className="link-form__button"
					onClick={handleSubmit}
				>
					Analyze <img src={GearIcon} alt="Gear Icon" />
				</button>
			</form>
		</div>
	);
};

export default LinkForm;
