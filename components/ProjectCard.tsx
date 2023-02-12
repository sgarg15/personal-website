import { motion } from "framer-motion";
import React from "react";
import ModelViewer from "./ModelViewer";
import { ProjectType } from "../content/projectsData";
import { SocialIcon } from "react-social-icons";
const parse = require("html-react-parser");

type Props = {
	project: ProjectType;
};

export default function ProjectCard({ project }: Props) {
	return (
		<article className="flex w-full flex-shrink-0  snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-80 transition-opacity duration-300 hover:opacity-100 lg:flex-row xl:w-full">
			<div className="w-full select-none px-0">
				<div className="text-center lg:text-left">
					<div className="flex justify-center pl-10 md:pl-0 lg:justify-start">
						<p className="mt-1 text-2xl font-bold">{project.name}</p>
						<SocialIcon
							url={project.url}
							fgColor="gray"
							bgColor="transparent"
							target="_blank"
							rel="noopener noreferrer"
							className="ml-2"
						/>
					</div>

					<h4 className="text-4l font-light">{project.position}</h4>
					<div className="flex my-2 space-x-2"></div>
					<p className="pb-5 uppercase text-gray-300">{project.date}</p>
				</div>

				<ul className="ml-5 list-disc space-y-4 text-base md:text-lg">
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
			<div className="flex h-40 w-40 cursor-grabbing md:h-60 md:w-1/3 lg:w-2/3 ">
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
