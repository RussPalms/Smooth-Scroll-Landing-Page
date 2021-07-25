import car from "../../images/svg-1.svg";
// import online_transactions from "../../images/svg-2.svg";
import savings from "../../images/svg-3.svg";
import secure from "../../images/svg-4.svg";
// import benefits from "../../images/svg-5.svg";
// import online_work from "../../images/svg-6.svg";

export const homeObjOne = {
	id: "about",
	lightBg: false,
	lightText: true,
	lightTextDesc: true,
	topLine: "Premium Bank",
	headline: "Unlimited Transactions with zero fees",
	description:
		"Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
	buttonLabel: "Get Started",
	imgStart: false,
	// does not work
	// img: require("../../images/svg-1.svg"),
	img: car,
	alt: "Car",
	dark: true,
	primary: true,
	darkText: false,
};

export const homeObjTwo = {
	id: "discover",
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: "Unlimited Access",
	headline: "Login to your account at any time",
	description:
		"We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
	buttonLabel: "Learn More",
	imgStart: true,
	// does not work
	// img: require("../../images/svg-1.svg"),
	img: savings,
	alt: "Savings",
	dark: false,
	primary: false,
	darkText: true,
};

export const homeObjThree = {
	id: "signup",
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: "Join our Team",
	headline: "Creating an account is extremely easy.",
	description:
		"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
	buttonLabel: "Start Now",
	imgStart: false,
	// does not work
	// img: require("../../images/svg-1.svg"),
	img: secure,
	alt: "Paper",
	dark: false,
	primary: false,
	darkText: true,
};
