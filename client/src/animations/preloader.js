import gsap from "gsap";

export const preloaderAnimation = () => {
	const tl = gsap.timeline();

	tl.to(".preloader .word", {
		duration: 2,
		opacity: 1,
		delay: 0.2,
	}).to(".preloader", {
		y: "100%",
		duration: 0.6,
		delay: 0.2,
	});
};
