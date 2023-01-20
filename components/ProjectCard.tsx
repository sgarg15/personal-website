import { motion } from "framer-motion";
import React from "react";
import ModelViewer from "./ModelViewer";
import { ProjectType } from "../content/projectsData";
const parse = require("html-react-parser");

type Props = {
	project: ProjectType;
};

export default function ProjectCard({ project }: Props) {
	return (
		<article className="flex w-full flex-shrink-0  snap-center flex-row items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-80 transition-opacity duration-300 hover:opacity-100 xl:w-full">
			<div className="w-full select-none px-0">
				<p className="mt-1 text-2xl font-bold">{project.name}</p>
				<h4 className="text-4l font-light">{project.position}</h4>
				<div className="my-2 flex space-x-2"></div>
				<p className="py-5 uppercase text-gray-300">{project.date}</p>

				<ul className="ml-5 list-disc space-y-4 text-lg">
					{project.description.map((desc, index) => {
						return <li key={index}>{parse(desc)}</li>;
					})}
					{/* <li>
						Developed and maintained automated test scripts for the Boeing 737
						MAX
					</li>
					<li>Performed manual testing on the Boeing 737 MAX</li>
					<li>Worked with a team of 5 other QA Developers</li>
					<li>Attended many meetings in and out of office</li> */}
				</ul>
			</div>
			<div className=" flex h-96 w-2/3 cursor-grabbing">
				<ModelViewer
					modelPath={project.threeDModel}
					scale={project.scale}
					intensity={project.intensity}
					position={project.modelPosition}
					autoRotateSpeed={0.0001}
					initAngle={project.initAngle}
				/>
			</div>
		</article>
	);
}
