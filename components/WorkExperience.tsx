import { motion } from "framer-motion";
import React from "react";
import { useRef, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from "react-icons/md";

type Props = {};

export default function WorkExperience({}: Props) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// console.log(containerRef.current);

		const handleLeftScroll = () => {
			if (containerRef.current) {
				containerRef.current.scrollBy({
					left: -500,
					behavior: "smooth",
				});
			}
		};

		const handleRightScroll = () => {
			if (containerRef.current) {
				containerRef.current.scrollBy({
					left: 500,
					behavior: "smooth",
				});
			}
		};

		const leftButton = document.querySelector(".btn-scroll-left");
		if (leftButton) {
			// console.log(leftButton);
			leftButton.addEventListener("click", handleLeftScroll);
		}

		const rightButton = document.querySelector(".btn-scroll-right");
		if (rightButton) {
			// console.log(rightButton);

			rightButton.addEventListener("click", handleRightScroll);
		}

		return () => {
			if (leftButton) {
				leftButton.removeEventListener("click", handleLeftScroll);
			}
			if (rightButton) {
				rightButton.removeEventListener("click", handleRightScroll);
			}
		};
	}, []);

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="relative mx-auto h-screen max-w-full flex-col items-center justify-evenly px-10 pt-24 text-left md:flex-row"
		>
			<h3 className="select-none pl-[20px] text-center text-2xl uppercase tracking-[20px] text-gray-500">
				Experience
			</h3>

			<div className="flex flex-row">
				<button className=" btn-scroll-left inset-y-0 w-16 pr-6">
					<MdOutlineArrowBackIosNew className="text-2xl" />
				</button>
				<div
					ref={containerRef}
					className="no-scrollbar flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 "
				>
					{/* Experience Cards */}
					<ExperienceCard />
					{/* <ExperienceCard /> */}
				</div>
				<button className="btn-scroll-right inset-y-0 w-16 pl-6 ">
					<MdOutlineArrowForwardIos className="text-2xl" />
				</button>
			</div>
		</motion.div>
	);
}
