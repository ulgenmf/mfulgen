import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	workAi,
	havaDurumu,
	follio,
	library,
	task,
	redux2,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "FrontEnd Developer",
		icon: web,
	},

	{
		title: "BackEnd Developer",
		icon: backend,
	},
	{
		title: "UI/ UX",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I was impressed by Furkans's ability to quickly pick up new concepts and apply them to their projects. He has a strong work ethic and are always willing to go the extra mile.",
		name: "Dan McAtee",
		designation: "Lead Instructor",
		company: "DevHaus Leipzig",
		image:
			"https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdan.22800191.png&w=384&q=75",
	},

	{
		testimonial:
			"Furkan is not only a skilled developer, but also an excellent communicator. He has a knack for explaining technical concepts in a way that is easy for non-technical people to understand. I always trusted Furkan to handle difficult situations with professionalism and integrity.",
		name: "Franz Wollang",
		designation: "CoFounder",
		company: "DevHaus Leipzig",
		image:
			"https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffranz.d7ecd7ee.jpg&w=3840&q=75",
	},
	{
		testimonial:
			"Living with Furkan was incredibly fun. His ability to bridge cultural differences and get along with all kinds of people is remarkable. He was by far the best roommate I have ever had, and I miss him.",
		name: "Maxim Sokol",
		designation: "Former Roommate ",
		company: "Furkan",
		image: redux2,
	},
];

const projects = [
	{
		name: "To-Do App",
		description:
			"This app allows you to not only manage your to-do list but also view and save posts from your favorite subreddits. With an easy-to-use interface, you can quickly add tasks and browse your favorite Reddit feeds all in one place",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "storyBook",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: task,
		source_code_link: "https://github.com/ulgenmf/camp6-frontend-project",
	},
	{
		name: "Weather App",

		description:
			"Stay up-to-date on the latest weather conditions with this really simple and intuitive app. Enter any city and get an instant forecast, complete with temperature, humidity, and precipitation details. You'll never leave home unprepared for the weather again!",
		tags: [
			{
				name: "js",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: havaDurumu,
		source_code_link: "https://github.com/ulgenmf/hava-durumu",
	},
	{
		name: "Remote Library",
		description:
			"Access your files from anywhere with this remote library app. Upload, download, and delete files with ease, all from a user-friendly interface. Whether you're at home, at work, or on the go, your files are always just a few clicks away.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "Firebase",
				color: "pink-text-gradient",
			},
		],
		image: library,
		source_code_link: "https://github.com/ulgenmf/RemoteLibrary",
	},
	{
		name: "AI Prompt Generator",
		description:
			"Let this AI-powered app spark your creativity with text prompts. Simply enter a keyword or phrase, and the app will generate a  related image.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "express",
				color: "pink-text-gradient",
			},
		],
		image: workAi,
		source_code_link: "https://github.com/ulgenmf/Ai-Image-Creator",
	},
	{
		name: "FurkanOS ",
		description:
			"I wanted to create an old Windows-like app to relive the nostalgia, but it turned out to be more challenging than I anticipated. While attempting to implement games, I encountered several issues that I found difficult to resolve. As a result, I have decided to put the project on hold for now. However, I hope to revisit it in the future and create my own nostalgic operating system.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: follio,
		source_code_link: "https://furkanfoolio.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
