import { DiHtml5, DiCss3, DiReact, DiMongodb, DiGit } from "react-icons/di";
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import { useState } from "react";
import Skill from "./Skill";

export const Skills = () => {
  const [skills] = useState([
    { text: "HTML", icon: <DiCss3 /> },
    { text: "CSS", icon: <DiHtml5 /> },
    { text: "JavaScript", icon: <SiJavascript /> },
    { text: "TypeScript", icon: <SiTypescript /> },
    { text: "React", icon: <DiReact /> },
    { text: "Redux", icon: <SiRedux /> },
    { text: "Tailwind", icon: <SiTailwindcss /> },
    { text: "MongoDB", icon: <DiMongodb /> },
    { text: "Node JS", icon: <SiNodedotjs /> },
    { text: "Git", icon: <DiGit /> },
  ]);

  return (
    <div>
      <h1 className="mt-6 font-bold text-2xl">Skills</h1>
      <ul className="flex flex-wrap w-full justify-between mt-4">
        {skills.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </ul>
    </div>
  );
};
