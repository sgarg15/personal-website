import React, { useRef } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import styles from "../styles/Home.module.css";
import { OrbitControls, Edges } from "@react-three/drei";
import * as THREE from "three";

type Props = {};

function Box(props: ThreeElements["mesh"]) {
	const myMesh = useRef<THREE.Mesh>(null!);

	const [wireframe, setWireframe] = React.useState(false);

	useFrame(({ clock }) => {
		myMesh.current.rotation.x = clock.getElapsedTime() * 0.5;
		myMesh.current.rotation.y = clock.getElapsedTime() * 0.5;
	});

	return (
		<mesh ref={myMesh} {...props} onClick={(event) => setWireframe(!wireframe)}>
			<boxGeometry args={[2, 2, 2]} />
			<Edges />
			<meshLambertMaterial
				attach="material"
				color="white"
				wireframe={wireframe}
			/>
		</mesh>
	);
}

export default function Cube({}: Props) {
	return (
		<div className="flex justify-center">
			<div className="h-56 w-56">
				<Canvas shadows>
					<OrbitControls enableZoom={false} enablePan={false} />
					<directionalLight color="red" position={[0, 0, 5]} />
					<ambientLight />
					<pointLight position={[10, 10, 10]} />

					<Box position={[0, 0, 0]}></Box>
				</Canvas>
			</div>
		</div>
	);
}
