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
			className="flex mx-auto h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center	md:text-left"
		>
			<h3 className=" select-none pl-[20px] text-center text-2xl uppercase tracking-[20px] text-gray-500 max-md:mx-auto max-md:mt-4 max-md:text-center">
				About
			</h3>

			<div className="flex justify-center align-middle max-md:flex-col max-sm:flex">
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
					className="-mb-20 h-44 w-44 flex-shrink-0 items-center rounded-full object-cover text-center max-md:my-4 max-md:mx-auto max-md:h-[200px] max-md:w-[200px] max-md:items-center md:mb-0 md:h-[300px] md:w-[300px] md:rounded-lg xl:h-[400px] xl:w-[400px]"
				/>

				<div className="space-y-10 px-0 align-middle sm:my-4 sm:w-full md:px-10">
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

					<div className="flex ml-10 flex-col ">
						<div className="flex items-center">
							<BsGithub className="mr-5 inline-block text-3xl" />
							<p className="text-left text-base uppercase tracking-widest text-gray-300">
								{repoCount} Repositories
							</p>
						</div>
						<div className="flex mt-5 items-center">
							<BsCode className="mr-5 inline-block text-3xl" />
							<p className="text-left text-base uppercase tracking-widest text-gray-300 ">
								{date.getFullYear() - 2017} Years of Programming
							</p>
						</div>
						<div className="flex mt-5 cursor-pointer items-center text-left">
							<AiOutlinePaperClip className="mr-5 inline-block text-3xl" />
							<p
								onClick={handleResumeClick}
								className="text-base uppercase tracking-widest text-gray-300 "
							>
								Download My Resume
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function handleResumeClick() {
	window.open("/Satvik Resume.pdf");
}

