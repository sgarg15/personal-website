import React from "react";
import { motion } from "framer-motion";
import Chess from "./Chess";
//import react icons
import { BsGear, BsCode, BsGithub } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import type { GetStaticProps, GetStaticPropsResult } from "next/types";
type Props = {};

export default function About({ repoCount }: any) {
	const date = new Date();

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
			className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left "
		>
			<h3 className="absolute top-24 select-none pl-[20px] text-center text-2xl uppercase tracking-[20px] text-gray-500">
				About
			</h3>

			<motion.img
				src="/Satvik.jpg"
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{ once: true }}
				className="md:h-95 -mb-20 h-44 w-44 flex-shrink-0 items-center rounded-full object-cover text-center md:mb-0 md:w-64 md:rounded-lg xl:h-[400px] xl:w-[400px]"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
					background
				</h4>
				<p className="text-base">
					Hi, I'm Satvik. I'm a second year student in Simon Fraser University
					majoring in Computer Science. I have always been passionate about
					programming and technologies in general. So I try to channel that
					passion through projects such as this website as well as many others
					found on my resume.
				</p>

				<div className="ml-10 flex flex-col ">
					<div className="flex items-center">
						<BsGithub className="mr-5 inline-block text-3xl" />
						<p className="text-left text-base uppercase tracking-widest text-gray-300">
							{repoCount} Repositories
						</p>
					</div>
					<div className="mt-5 flex items-center">
						<BsCode className="mr-5 inline-block text-3xl" />
						<p className="text-left text-base uppercase tracking-widest text-gray-300 ">
							{date.getFullYear() - 2017} Years of Programming
						</p>
					</div>
					<div className="mt-5 flex cursor-pointer items-center text-left">
						<AiOutlinePaperClip className="mr-5 inline-block text-3xl" />
						<p
							onClick={handleClick}
							className="text-base uppercase tracking-widest text-gray-300 "
						>
							Download My Resume
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function handleClick() {
	window.open("/Resume.pdf");
}

