export type ProjectType = {
	name: string;
	url: string;
	position: string;
	date: string;
	description: string[];
	threeDModel: string;
	scale?: number;
	intensity?: number;
	initAngle?: number;
	modelPosition?: [number, number, number];
};

export const projects: ProjectType[] = [
	{
		name: "ConnectPharma",
		url: "https://github.com/sgarg15/ConnectPharma",
		position: "Software Developer",
		date: "May 2020 - August 2020",
		description: [
			`Developed an app to connect pharmacists to employers and vice-versa using Dart, Flutter, JavaScript and Firebase`,
			`Utilized Firestore and Firebase Storage to handle users' data and images, in addition to <span className="underline decoration-[#F7AB0A]/50">Google Cloud APIs</span> such as Places and Distance Matrix to quicken the Sign-Up process by auto-completing addresses`,
			`Abided <span className="underline decoration-[#F7AB0A]/50">Firestore Security rules and used Firebase Authentication</span> to maximize application security`,
			`Collaborated with a professional designers, Pharmacists and Pharmacies to create the UI oriented towards users in Figma`,
		],
		threeDModel: "/phone.glb",
		scale: 7,
		intensity: 0.5,
		initAngle: 0,
		modelPosition: [0, 0.2, 0.35],
	},
	{
		name: "VEX Robotics",
		url: "https://github.com/sgarg15/4549A-Public",
		position: "Software Lead",
		date: "September 2018 - June 2020",
		description: [
			`Programmed custom robots to compete in an international and inter-school robotics competition, ultimately <span className="underline decoration-[#F7AB0A]/50">qualifying for the 2019-2020 season world championships</span> `,
			`Competed against 720 teams from around the world and achieved <span className="underline decoration-[#F7AB0A]/50">3rd position in Canada</span> for our combined driver and autonomous score`,
			`Improved robot consistency by up to <span className="underline decoration-[#F7AB0A]/50">90%</span> using PID control and Pure Pursuit algorithms for precise and smooth movements of various robot component`,
			`Increased <span className="underline decoration-[#F7AB0A]/50">win-rate by 75%</span> by automating stacking and lift control as well as movements which require precise actions`,
		],
		threeDModel: "/robot.glb",
		scale: 9.5,
		intensity: 0.3,
		initAngle: 0.07,
	},
	{
		name: "Endless Enemies",
		url: "https://github.com/sgarg15/Endless-Enemies",
		position: "Lead Programmer",
		date: "January 2021 - May 2021",
		description: [
			`Developed a top-down shooter game where the user must shoot enemies spawning around them`,
			`Used the <span className="underline decoration-[#F7AB0A]/50">A* search algorithm</span> to control enemy AI's movements, giving the enemies the ability to pursue the player using the smallest path and spawn in tiles where the player may be camping`,
			`Utilized the <span className="underline decoration-[#F7AB0A]/50">Flood Fill algorithm</span> to create random maps without inaccessible paths as well determining the locations of deployed weapons and pick-up item`,
		],
		threeDModel: "/MapModel.glb",
		scale: 0.2,
		intensity: 1,
		initAngle: 0.2,
	},
];
