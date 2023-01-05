import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="flex-items-start sticky top-0 z-20 mx-auto flex max-w-7xl justify-between p-5 xl:items-center">
			{/* Icons */}
			<motion.div
				initial={{
					x: -100,
					opacity: 0,
					scale: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center"
			>
				<SocialIcon
					url="https://github.com/sgarg15"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/sgarg15"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/sgarg15"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 100,
					opacity: 0,
					scale: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex cursor-pointer flex-row items-center text-gray-300"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>

				<p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
					Get in Touch
				</p>
			</motion.div>
		</header>
	);
}
