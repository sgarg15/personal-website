import { motion, Variants } from "framer-motion";
import React from "react";
import { skills } from "../content/skillsData";

type Props = {};

export default function Skills({}: Props) {
	const FadeContainer: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { delayChildren: 0, staggerChildren: 0.05 },
		},
	};

	const popUp: Variants = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
			},
		},
	};

	function showHoverAnimation(e: any) {
		const rect = e.target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
		e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
	}

	function removeHoverAnimation(e: any) {
		e.target.style.background = null;
		e.target.style.borderImage = null;
	}

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
			className="relative mx-auto flex h-screen max-w-6xl flex-col items-center justify-center px-10 text-center md:flex-row md:text-left "
		>
			<h3 className="absolute top-24 select-none pl-[20px] text-center text-2xl uppercase tracking-[20px] text-gray-500">
				Skills
			</h3>

			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={FadeContainer}
				viewport={{ once: true }}
				className="my-10 grid w-full grid-cols-3 gap-4"
			>
				{skills.map((skill, index) => {
					const Icon = skill.Icon;
					return (
						<motion.div
							variants={popUp}
							onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
								showHoverAnimation(e)
							}
							key={index}
							onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
								removeHoverAnimation(e)
							}
							className="group flex origin-center transform items-center justify-center gap-5 rounded-sm border border-neutral-700 p-4 sm:justify-start md:origin-top"
						>
							<div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-110">
								<Icon className="h-8 w-8" />
							</div>
							<p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base ">
								{skill.name}
							</p>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
}
