import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Cube from "../components/Cube";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from '../components/About';
import Chess from "../components/Chess";
import ModelViewer from "../components/ModelViewer";
import { GetStaticProps } from "next/types";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { MobilePlaceHolder } from "../components/MobilePlaceHolder";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ repoCount }: any) {
	return (
		<div className=" z-0 h-screen bg-[rgb(36,36,36)] text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scrollbar-thumb-rounded sm:snap-y sm:snap-mandatory sm:scroll-smooth">
			<Head>
				<title>Satvik's Portfolio</title>
			</Head>

			{/* <Cube /> */}
			{/* <Chess /> */}
			{/* 
			<div className="flex h-full w-full">
				<ModelViewer
					modelPath={"/MapModel.glb"}
					scale={0.2}
					intensity={0.8}
					position={[0, 0, 0]}
					autoRotateSpeed={0.001}
				/>
			</div> */}

			{/* Header */}
			<Header />

			{/* Hero */}
			<section id="hero" className="sm:snap-center sm:snap-always">
				<Hero />
			</section>

			<section className="">
				<MobilePlaceHolder />
			</section>

			{/* About */}
			<section id="about" className="hidden snap-center sm:block">
				<About repoCount={repoCount} />
			</section>

			{/* Experience */}
			{/* <section id="experience" className="snap-center">
				<WorkExperience />
			</section> */}

			{/* Skills */}
			<section id="skills" className="hidden snap-start sm:block">
				<Skills />
			</section>

			{/* Projects */}
			<section id="projects" className="hidden snap-center sm:block">
				<Projects />
			</section>

			{/* Contact */}
			<section id="contact" className="hidden snap-start sm:block">
				<ContactMe />
			</section>

			<Link href="#hero ">
				<motion.button
					className="fixed bottom-0 right-0 hidden p-10 sm:block"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						default: {
							duration: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
						},
						scale: {
							type: "spring",
							damping: 5,
							stiffness: 100,
							restDelta: 0.001,
						},
					}}
				>
					<FaArrowUp size={25} />
				</motion.button>
			</Link>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetch("https://api.github.com/users/sgarg15/repos");
	const json = await data.json();

	return {
		props: {
			repoCount: json.length,
		},
	};
};
