import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiPython,
	SiGit,
	SiMysql,
	SiFirebase,
	SiTypescript,
	SiReact,
	SiC,
	SiCplusplus,
	SiFigma,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

//Create SkillType
type SkillType = {
	name: string;
	Icon: IconType;
};

//Create SkillsData
export const skills: SkillType[] = [
	{
		name: "HTML",
		Icon: SiHtml5,
	},
	{
		name: "CSS",
		Icon: SiCss3,
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
		name: "Next.js",
		Icon: SiNextdotjs,
	},
	{
		name: "Tailwind CSS",
		Icon: SiTailwindcss,
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
	{
		name: "Firebase",
		Icon: SiFirebase,
	},
	{
		name: "Figma",
		Icon: SiFigma,
	},
];
