import { motion } from "framer-motion";
import React from "react";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { ExperienceType } from "../content/experienceData";
import ModelViewer from "./ModelViewer";

type Props = {
	experience: ExperienceType;
};

export default function ExperienceCard({ experience }: Props) {
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (elementRef.current) {
			new VanillaTilt(elementRef.current, {
				max: 2, // maximum tilt angle
				perspective: 3000, // perspective value
				scale: 1.01, // scale on hover
				speed: 100, // tilt speed
			});
		}
	}, []);

	return (
		<article
			ref={elementRef}
			className="flex w-full flex-shrink-0 snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-7 opacity-80 transition-opacity duration-300 hover:opacity-100 lg:flex-row xl:w-full"
		>
			<div className="w-full select-none px-0">
				<div className="text-center lg:text-left">
					<p className="mt-1 text-2xl font-bold">{experience.company}</p>
					<h4 className="text-4l font-light">{experience.role}</h4>
					<div className="my-2 flex space-x-2"></div>
					<p className="pb-5 uppercase text-gray-300">{experience.date}</p>
				</div>

				<ul className="ml-5 list-disc space-y-4 text-base md:text-lg">
					{experience.description.map((desc, index) => {
						return <li key={index}>{desc}</li>;
					})}
				</ul>
			</div>
			<motion.div
				initial={{
					y: -50,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
				viewport={{ once: true }}
				className="flex h-40 w-40 cursor-grabbing md:h-60 md:w-1/3 lg:w-1/3"
			>
				<ModelViewer
					modelPath={experience.threeDModel}
					scale={experience.scale}
					intensity={experience.intensity}
					position={experience.modelPosition}
					autoRotateSpeed={0.0001}
					initAngle={experience.initAngle}
				/>
			</motion.div>
		</article>
	);
}
