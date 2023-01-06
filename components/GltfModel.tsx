import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath = "", scale = 40, position = [0, 0, 0] }) => {
	const ref = useRef<THREE.Mesh>(null!);
	const gltf = useLoader(GLTFLoader, modelPath);
	console.log("GltfModel: modelPath: ", modelPath);

	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => {
		ref.current.rotation.y += 0.005;
		// ref.current.rotation.x -= 0.002;
		// ref.current.rotation.z += 0.002;
	});
	return (
		<>
			<primitive ref={ref} object={gltf.scene} position={position} />
		</>
	);
};

export default GltfModel;
