import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProjectCard from "./ProjectCard";
import { projects } from "../content/projectsData";

type Props = {};

export default function Projects({}: Props) {
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
					left: 700,
					behavior: "smooth",
				});
			}
		};

		const leftButton = document.querySelector(".btn-scroll-left-project");
		if (leftButton) {
			// console.log(leftButton);
			leftButton.addEventListener("click", handleLeftScroll);
		}

		const rightButton = document.querySelector(".btn-scroll-right-project");
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
			className="relative mx-auto h-screen max-w-6xl flex-col items-center justify-center px-10 pt-20 text-center md:flex-row md:text-left"
		>
			<h3 className="select-none pl-[20px] text-center text-2xl uppercase tracking-[20px] text-gray-500">
				Projects
			</h3>

			<div className="flex flex-row">
				<button className="btn-scroll-left-project inset-y-0 w-16 pr-6">
					<MdOutlineArrowBackIosNew className="text-2xl" />
				</button>
				<div
					ref={containerRef}
					className="no-scrollbar flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10"
				>
					{/* Project Cards */}
					{projects.map((project, index) => {
						return <ProjectCard key={index} project={project} />;
					})}
				</div>
				<button className="btn-scroll-right-project inset-y-0 w-16 pl-6 ">
					<MdOutlineArrowForwardIos className="text-2xl" />
				</button>
			</div>
		</motion.div>
	);
}
