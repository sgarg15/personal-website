import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Edges, OrbitControls } from "@react-three/drei";

type Props = {};
const Queen = () => {
	const gltf = useLoader(GLTFLoader, "./QueenPiece.gltf");
	return (
		<>
			<primitive object={gltf.scene} scale={0.1} />
			<Edges />
		</>
	);
};

export default function Chess({}: Props) {
	return (
		<div className="m-0 flex justify-center p-0">
			<div className="h-66 w-66 -mt-20">
				<Canvas camera={{ zoom: 0.3 }}>
					<Suspense fallback={null}>
						<Queen />
						<OrbitControls enableZoom={false} enablePan={false} />
						<ambientLight />
						<directionalLight color="red" position={[0, 0, 5]} />
						<pointLight position={[10, 10, 10]} />
					</Suspense>
					<axesHelper />
				</Canvas>
			</div>
		</div>
	);
}
