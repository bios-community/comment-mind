import gsap from "gsap";
import SplitType from "split-type";

const headerReveal = () => {
	const headerTitle = new SplitType(".header__title", {
		types: "words, lines",
	});

	// const headerDescription = new SplitType(".header__description", {
	// 	types: "words, lines",
	// });
	// console.log(headerTitle);

	const tl = gsap.timeline();

	tl.to(".header__title .word", {
		opacity: 1,
		y: 0,
		stagger: 0.1,
		duration: 0.7,
		delay: 3,
	})
		.to(".header__description", {
			opacity: 1,
			y: 0,
			stagger: 0.05,
			duration: 0.7,
		})
		.to(".header__title--highlight__background", {
			"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: "power4.out",
		});
};

export default headerReveal;
