import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackgroundCircles";
import Cube from "./Cube";

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hey, The Name's Satvik",
			"My digital playground down below!",
			"Foodie, Gamer, Developer",
			"Proud to be a Nerd :)",
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="flex h-screen translate-y-10 flex-col items-center justify-center  text-center">
			<BackGroundCircles />
			<Cube />
			<div className="z-20 ">
				<h2 className="select-none pb-2 text-sm uppercase tracking-[15px] text-gray-500	">
					Software Developer
				</h2>
				<h1 className="select-none px-10 text-2xl font-semibold lg:text-5xl	">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<div className="hidden pt-5 sm:block">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					{/* <Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link> */}
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
