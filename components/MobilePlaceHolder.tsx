import React from "react";
import { motion } from "framer-motion";

export const MobilePlaceHolder = () => {
	return (
		<motion.div
			className="flex h-screen items-center justify-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="rounded-lg p-6 shadow-lg ">
				<h2 className="mb-4 select-none text-2xl font-bold text-gray-300">
					This site is currently unavailable in mobile.
				</h2>
				<p className="mb-6 select-none text-lg text-gray-500">
					Please open sgarg.vercel.app on a desktop to get the full experience!
				</p>
			</div>
		</motion.div>
	);
};
