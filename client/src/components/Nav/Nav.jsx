import React from "react";
import Logo from "../../assets/logo.svg";
import GithubMark from "../../assets/github-mark.svg";

import "./Nav.scss";

const Nav = () => {
	return (
		<nav className="nav container">
			<img src={Logo} alt="logo" className="nav__logo-mark" />
			<a
				href="https://github.com/bios-community/comment-mind"
				className="nav__link"
			>
				<img src={GithubMark} alt="GitHub Logo" />
				GitHub
			</a>
		</nav>
	);
};

export default Nav;
