export type ExperienceType = {
	company: string;
	role: string;
	date: string;
	description: string[];
	threeDModel: string;
	scale?: number;
	intensity?: number;
	initAngle?: number;
	modelPosition?: [number, number, number];
};

export const experiences: ExperienceType[] = [
	{
		company: "Amazon",
		role: "Software Developer Intern",
		date: "May 2025 - August 2025",
		description: [
			"Migrated FNSku Maps backup from Java Reactor to Datapath Precompute, reducing costs by 40% and latency by 20%",
			"Authored migration design doc and implemented solution using DQL and CI/CD pipelines with automated testing",
			"Created bulk FNSku Map upload tool in Java, automating 300+ requests annually and enabling customer self-service",
			"Contributed to modernization by migrating additional internal reactors from JDK 8 to JDK 17 for long-term maintainability",
		],
		threeDModel: "/amazon-logo.stl.glb",
		scale: 0.1,
		intensity: 0.9,
		initAngle: 0,
		modelPosition: [0, 0, 0],
	},
	{
		company: "Simon Fraser University",
		role: "Software Undergraduate Research Assistant",
		date: "May 2024 - August 2024",
		description: [
			"Conducted research on multi-agent reach-avoid games through simulation and real-world implementations",
			"Designed Mixed Integer Programming and learning-based control logic to maximize defender captures and scale to higher-dimensional games",
			"Controlled TurtleBot3 using ROS and Python for real-life simulations, demonstrating the method's effectiveness",
		],
		threeDModel: "/ros-logo.stl.glb",
		scale: 0.45,
		intensity: 0.9,
		initAngle: 0,
		modelPosition: [-22.73, -10.9, -0.83],
	},
	{
		company: "The Boeing Company",
		role: "Software Quality Assurance Intern",
		date: "January 2023 - August 2023",
		description: [
			"Developed Java/Selenium E2E and smoke tests, increasing automated regression coverage by 45%",
			"Integrated Adobe Analytics on multiple application pages while creating QUnit test cases for accurate tracking",
			"Cooperated closely with the infrastructure team to support CI/CD pipelines and integrate E2E tests",
			"Reduced reporting time by 40% by automating Excel data collection and Power BI visualization using Azure DevOps data",
		],
		threeDModel: "/boeing-logo.glb",
		scale: 0.05,
		intensity: 0.9,
		initAngle: 0,
		modelPosition: [0, 0, 0],
	},
];
