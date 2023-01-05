import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Cube from "../components/Cube";
import Header from "../components/Header";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
			<Head>
				<title>Create Next App</title>
			</Head>

			{/* <Cube /> */}

			{/* Header */}
			<Header />

			{/* Hero */}
			<section id="hero" className="snap-center">
				<Hero />
			</section>
		</div>
	);
}
