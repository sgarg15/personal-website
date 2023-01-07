import { motion } from "framer-motion";
import React from "react";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

type Props = {};

export default function ExperienceCard({}: Props) {
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (elementRef.current) {
			new VanillaTilt(elementRef.current, {
				max: 2, // maximum tilt angle
				perspective: 1000, // perspective value
				scale: 1.02, // scale on hover
				speed: 200, // tilt speed
			});
		}
	}, []);

	return (
		<article
			ref={elementRef}
			className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-50 transition-opacity duration-300 hover:opacity-100 md:w-[500px] xl:w-[900px]"
		>
			<motion.img
				initial={{
					y: -100,
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
				className="h-32 w-32 rounded-full object-cover object-center xl:h-[130px] xl:w-[130px]"
				src="/Boeing-Logo.png"
				alt=""
			/>

			<div className="px-0 ">
				<h4 className="text-4l font-light">QA Developer</h4>
				<p className="mt-1 text-2xl font-bold">Boeing</p>
				<div className="my-2 flex space-x-2"></div>
				<p className="py-5 uppercase text-gray-300">
					January 2023 - August 2023
				</p>

				<ul className="ml-5 list-disc space-y-4 text-lg">
					<li>
						Developed and maintained automated test scripts for the Boeing 737
						MAX
					</li>
					<li>Performed manual testing on the Boeing 737 MAX</li>
					<li>Worked with a team of 5 other QA Developers</li>
					<li>Attended many meetings in and out of office</li>
				</ul>
			</div>
		</article>
	);
}
