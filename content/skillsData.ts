import {
	SiJavascript,
	SiPython,
	SiGit,
	SiTypescript,
	SiReact,
	SiC,
	SiCplusplus,
	SiJava,
	SiRos,
	SiAutodesk,
} from "react-icons/si";
import { FaDraftingCompass, FaMicrochip, FaRobot } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdPrecisionManufacturing, MdSensors } from "react-icons/md";
import { IconType } from "react-icons/lib";

//Create SkillType
type SkillType = {
	name: string;
	Icon: IconType;
};

//Create SkillsData
export const skills: SkillType[] = [
	{
		name: "Robotics",
		Icon: FaRobot,
	},
	{
		name: "ROS",
		Icon: SiRos,
	},
	{
		name: "PID Control",
		Icon: MdPrecisionManufacturing,
	},
	{
		name: "Path Planning",
		Icon: GiPathDistance,
	},
	{
		name: "Embedded Systems",
		Icon: FaMicrochip,
	},
	{
		name: "Sensors",
		Icon: MdSensors,
	},
	{
		name: "CAD Design",
		Icon: FaDraftingCompass,
	},
	{
		name: "Autodesk",
		Icon: SiAutodesk,
	},
	{
		name: "Javascript",
		Icon: SiJavascript,
	},
	{
		name: "Typescript",
		Icon: SiTypescript,
	},
	{
		name: "React.js",
		Icon: SiReact,
	},
	{
		name: "Java",
		Icon: SiJava,
	},
	{
		name: "C Programming",
		Icon: SiC,
	},
	{
		name: "C++",
		Icon: SiCplusplus,
	},
	{
		name: "Python",
		Icon: SiPython,
	},
	{
		name: "Git",
		Icon: SiGit,
	},
];
