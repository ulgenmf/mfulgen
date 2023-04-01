import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	const [picHovered, setPicHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia("max-witdh:500");

		setIsMobile(mediaQuery.matches);
		function handleMediaQueryChange(e) {
			setIsMobile(e.matches);
		}
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<section className="relative w-full   h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute    mx-w-7xl  mx-auto  flex flex-row  gap-5 items-start inset-0 top-[120px]`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-purple-700" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className={`"sm:absolute    h-52  left-28"`}>
					{" "}
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi! I am<span className="text-purple-600"> Furkan</span>
					</h1>
					<p className={`${styles.heroSubText} flex flex-wrap  mt-2 text-gray-100`}>
						A junior software developer based in{" "}
						<span className="text-blue-400 ml-2 underline underline-offset-8">
							Istanbul
						</span>
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-32  w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] border-secondary justify-center flex border-4 rounded-3xl  ">
						<motion.div
							animate={{ y: [0, 40, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
