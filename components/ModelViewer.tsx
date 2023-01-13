import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({
	modelPath = "",
	scale = 1,
	position = [0, 0.5, 0],
	intensity = 1,
	autoRotateSpeed = 0.005,
	initAngle = 0.2,
}) => {
	return (
		<Canvas shadows>
			<ambientLight intensity={intensity} />
			<ambientLight intensity={intensity * 0.1} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Suspense fallback={null}>
				<GltfModel
					modelPath={modelPath}
					scale={scale}
					position={position}
					autoRotateSpeed={autoRotateSpeed}
					initAngle={initAngle}
				/>
				<OrbitControls enablePan={false} enableZoom={false} autoRotate />
			</Suspense>
		</Canvas>
	);
};

export default ModelViewer;
