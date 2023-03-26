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
import DrawingBoard from "../components/AI-Page/DrawingBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ repoCount }: any) {
	return (
		<div className=" flex h-screen items-center justify-center">
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

			<DrawingBoard />
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
