import { motion } from "framer-motion";
import React from "react";
import ModelViewer from "./ModelViewer";

type Props = {};

export default function ProjectCard({
	projectName = "",
	url = "",
	scale = 1,
	intensity = 1,
	initAngle = 0.2,
}) {
	return (
		<article className="flex w-full flex-shrink-0 cursor-pointer snap-center flex-row items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-80 transition-opacity duration-300 hover:opacity-100 md:w-[600px] xl:w-full">
			<div className="w-full select-none px-0">
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
			<div className=" flex h-96 w-2/3 cursor-grabbing">
				<ModelViewer
					modelPath={url}
					scale={scale}
					intensity={intensity}
					position={[0, 0, 0]}
					autoRotateSpeed={0.0001}
					initAngle={initAngle}
				/>
			</div>
		</article>
	);
}
