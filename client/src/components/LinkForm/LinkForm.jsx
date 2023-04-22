import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LinkForm.scss";

import GearIcon from "../../assets/gear.svg";
import InfoIcon from "../../assets/info.svg";

const LinkForm = ({ setLink }) => {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const youtubeRegex =
		/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?=.*v=\w+)(?:\S+)?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})(?:\S+)?$/;

	const handleSubmit = e => {
		e.preventDefault();
		const errorElement = document.querySelector(".error-element");
		const input = document.querySelector(
			".link-form__input-wrapper__input"
		);

		if (youtubeRegex.test(inputValue)) {
			errorElement.style.display = "none";
			input.classList.remove("link-form__input-wrapper__input--error");

			setLink(inputValue);
			navigate("/analysis");
		} else {
			setInputValue("");

			errorElement.style.display = "flex";

			input.classList.add("link-form__input-wrapper__input--error");
			// errorElement.classList.add("link-form__input-wrapper--error");
			// alert("Please enter a valid YouTube video link.");
		}
	};

	return (
		<div className="container">
			<form className="link-form">
				<div className="link-form__input-wrapper">
					<input
						type="text"
						className="link-form__input-wrapper__input"
						placeholder="Enter a YouTube Video Link"
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
						onSubmit={handleSubmit}
					/>
					<span className="error-element">
						<img
							src={InfoIcon}
							alt="Info Icon"
							className="error-element__icon"
						/>
						<span className="error-element__message">
							Enter a Valid YouTube Video Link!
						</span>
					</span>
				</div>
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
