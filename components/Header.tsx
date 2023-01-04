import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="flex-items-start sticky top-0 z-20 mx-auto flex max-w-7xl justify-between p-5 xl:items-center">
			{/* Icons */}
			<div className="flex flex-row items-center">
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
			</div>

			<div className="flex cursor-pointer flex-row items-center text-gray-300">
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>

				<p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
					Get in Touch
				</p>
			</div>
		</header>
	);
}
