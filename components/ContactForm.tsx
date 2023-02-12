import { motion } from "framer-motion";
import React, { useRef } from "react";

type Props = {};

function ContactForm({}: Props) {
	const formRef = useRef<HTMLFormElement>(null!);

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const formData = new FormData(formRef.current);

		const data = Object.fromEntries(formData);

		// console.log(data);

		//clear data
		formRef.current.reset();
	};

	return (
		<motion.form
			ref={formRef}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex mx-auto my-10 w-full max-w-xl flex-col items-center dark:text-gray-300"
		>
			<div className="grid w-full grid-cols-2 gap-6 ">
				<motion.div className="group relative z-0 mb-6 w-full">
					<input
						type="text"
						name="first_name"
						id="floating_first_name"
						className="text-white-900 peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent py-2 px-0 text-sm focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_first_name"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white"
					>
						First name
					</label>
				</motion.div>
				<motion.div className="group relative z-0 mb-6 w-full">
					<input
						type="text"
						name="last_name"
						id="floating_last_name"
						className="peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent py-2 px-0 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_last_name"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white"
					>
						Last name
					</label>
				</motion.div>
			</div>
			<motion.div className="group relative z-0 mb-6 w-full">
				<input
					type="email"
					name="email"
					id="floating_email"
					className="peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent py-2 px-0 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white focus:dark:border-white"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_email"
					className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white"
				>
					Email address
				</label>
			</motion.div>
			<motion.div className="group relative z-0 mb-6 w-full">
				<input
					type="subject"
					name="subject"
					id="floating_subject"
					className="peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent py-2 px-0 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_subject"
					className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white"
				>
					Subject
				</label>
			</motion.div>
			<motion.div className="group relative z-0 mb-6 w-full">
				<textarea
					name="message"
					id="floating_message"
					className="peer mt-2 block min-h-[100px] w-full resize-y appearance-none border-0 border-b-2 border-slate-500 bg-transparent py-2 px-0 text-sm text-gray-900 focus:border-black focus:outline-none  focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_message"
					className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white"
				>
					Message
				</label>
			</motion.div>
			<motion.div className="w-full overflow-hidden rounded-lg shadow-lg sm:max-w-sm">
				<div
					className="flex w-full justify-center"
					color="rgba(225, 225,225,0.2)"
				>
					<button
						type="submit"
						onClick={handleSubmit}
						className="dark:bg-darkSecondary relative  w-full overflow-hidden rounded-lg bg-neutral-800 px-4 py-3 text-center text-sm font-medium text-white outline-none transition duration-300 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
					>
						Send
					</button>
				</div>
			</motion.div>
		</motion.form>
	);
}

export default ContactForm;
