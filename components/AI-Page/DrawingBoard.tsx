import { useState, useRef } from "react";

const ImageDisplay = ({ src }: { src: string }) => {
	return (
		<img src={src} alt="Drawn image" style={{ imageRendering: "pixelated" }} />
	);
};
const DrawingBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [drawing, setDrawing] = useState(false);
	const [lastX, setLastX] = useState(0);
	const [lastY, setLastY] = useState(0);
	const [eraser, setEraser] = useState(false);
	const [drawnImage, setDrawnImage] = useState<string | null>(null);

	const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
		setDrawing(true);
		setLastX(event.nativeEvent.offsetX);
		setLastY(event.nativeEvent.offsetY);
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
		if (!drawing) return;

		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (context) {
			context.beginPath();
			context.moveTo(lastX, lastY);

			if (eraser) {
				context.strokeStyle = canvas?.style.backgroundColor || "#ffffff";
				context.lineWidth = 10;
			} else {
				context.strokeStyle = "#000000";
				context.lineWidth = 20;
			}

			context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
			context.stroke();

			setLastX(event.nativeEvent.offsetX);
			setLastY(event.nativeEvent.offsetY);
		}
	};

	const handleMouseUp = () => {
		setDrawing(false);
	};

	const handleEraserClick = () => {
		setEraser(!eraser);
	};

	const handleClearClick = () => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (context) {
			context.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);
		}
	};

	const handleSaveClick = async () => {
		const imageData = getImageData();
		setDrawnImage(imageData);

		// Convert the image data to a base64 string
		const base64ImageData = imageData.split(",")[1];
		console.log(base64ImageData);

		// Send a POST request to the Flask API
		const response = await fetch("http://localhost:5000/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ image: base64ImageData }),
		});

		// Handle the response from the Flask API
		const prediction = await response.json();
		console.log(prediction);
	};

	const getImageData = () => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (context && canvas) {
			const originalColor = canvas.style.backgroundColor;
			canvas.style.backgroundColor = "white"; // Set the background color to white
			const imageData = canvas.toDataURL("image/png");
			canvas.style.backgroundColor = originalColor; // Restore the original background color
			return imageData;
		}

		return "";
	};

	return (
		<div>
			<canvas
				ref={canvasRef}
				className="rounded-md border-2 border-gray-500"
				width="400"
				height="400"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			/>
			<div className="my-4">
				<button
					className="mr-4 rounded bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-600 "
					onClick={handleEraserClick}
				>
					{eraser ? "Draw" : "Eraser"}
				</button>
				<button
					className="rounded bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-600"
					onClick={handleClearClick}
				>
					Clear
				</button>
				<button
					className="mr-4 rounded bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-600"
					onClick={handleSaveClick}
				>
					Save
				</button>
			</div>
			{drawnImage && <ImageDisplay src={drawnImage} />}
		</div>
	);
};

async function callFlaskAPI(image: string): Promise<any> {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ image }),
	};
	const response = await fetch("http://localhost:5000/predict", requestOptions);
	const data = await response.json();
	return data;
}

export default DrawingBoard;
