import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath = "", scale = 1, position = [0, 0.5, 0] }) => {
	return (
		<div className="h-16 w-14 ">
			<Canvas>
				<ambientLight intensity={0.3} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />
				<Suspense fallback={null}>
					<GltfModel modelPath={modelPath} scale={scale} position={position} />
					<OrbitControls enableZoom={false} enablePan={false} autoRotate />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ModelViewer;
