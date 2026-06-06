import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

type Props = {};

function ContactForm({}: Props) {
	const formRef = useRef<HTMLFormElement>(null!);
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
		"idle"
	);
	const [statusMessage, setStatusMessage] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);

		setStatus("sending");
		setStatusMessage("");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(responseData.message || "Unable to send message");
			}

			formRef.current.reset();
			setStatus("success");
			setStatusMessage("Thanks, your message was sent.");
		} catch (error) {
			setStatus("error");
			setStatusMessage(
				error instanceof Error
					? error.message
					: "Something went wrong. Please try again."
			);
		}
	};

	return (
		<motion.form
			ref={formRef}
			onSubmit={handleSubmit}
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
					type="text"
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
						disabled={status === "sending"}
						className="dark:bg-darkSecondary relative  w-full overflow-hidden rounded-lg bg-neutral-800 px-4 py-3 text-center text-sm font-medium text-white outline-none transition duration-300 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
					>
						{status === "sending" ? "Sending..." : "Send"}
					</button>
				</div>
			</motion.div>
			{statusMessage && (
				<p
					className={`mt-4 text-sm ${
						status === "success" ? "text-green-400" : "text-red-400"
					}`}
				>
					{statusMessage}
				</p>
			)}
		</motion.form>
	);
}

export default ContactForm;
