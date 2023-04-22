import React, { useEffect } from "react";
import "./PreLoader.scss";

import { preloaderAnimation } from "../../animations/preloader";

const PreLoader = () => {
	useEffect(() => {
		preloaderAnimation();
	}, []);
	return (
		<div className="preloader">
			<span className="word">Analyze.</span>
			<span className="word">Study.</span>
			<span className="word">Improve.</span>
		</div>
	);
};

export default PreLoader;
