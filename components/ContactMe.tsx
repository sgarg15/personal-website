import { motion } from "framer-motion";
import React from "react";
import ContactForm from "./ContactForm";

type Props = {};

export default function ContactMe({}: Props) {
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
			className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
		>
			{/* <h3 className="absolute top-24 select-none pl-[20px] text-center text-2xl uppercase tracking-[20px] text-gray-500">
				Contact Me
			</h3> */}

			<motion.div>
				<section className="w-full-width dark:bg-darkPrimary pt-6 text-center dark:text-white">
					<p className="text-4xl font-bold">Get in touch</p>

					<p className="px-4 py-2 font-medium dark:text-gray-300">
						Want to talk? Please feel free to get in touch anytime, whether for
						work or to just Hi 🙋‍♂️.
					</p>
				</section>

				<section className="dark:bg-darkPrimary mx-auto flex w-full flex-col px-5 dark:text-white lg:flex-row lg:pb-10">
					{/* Left Contact form section */}
					<div className="mx-auto mt-10 w-full">
						<p className="my-2 w-full text-center text-2xl font-bold">
							Connect with me
						</p>

						<ContactForm />
					</div>
				</section>
			</motion.div>
		</motion.div>
	);
}
