import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { DiReact, DiGit, DiMongodb,DiFirebase } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiNodedotjs } from "react-icons/si";
import portfolio from "../../../assets/images/portfolio.png";
import anime from "../../../assets/images/99d93b2a-5594-43b6-82d7-712bd343d692.jpg.png";

export const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Portfolio",
      img: portfolio,
      skills: [
        {
          id: 1,
          icon: <DiReact />,
          title: "React",
        },
        { id: 2, icon: <SiTailwindcss />, title: "Tailwind" },
        { id: 3, icon: <DiGit />, title: "Git" },
      ],
      description: "Portfolio to show my skills",
      github: "https://github.com/whylone1y/portfolio",
      live: "https://kenesalisher.netlify.app/",
    },
    {
      id: 2,
      img: anime,
      title: "Anime Tracker",
      skills: [
        {
          id: 1,
          icon: <DiReact />,
          title: "react",
        },
        { id: 1, icon: <SiTailwindcss />, title: "tailwind" },
        { id: 2, icon: <SiTypescript />, title: "TypeScript" },
        { id: 3, icon: <DiGit />, title: "Git" },
        { id: 4, icon: <DiReact />, title: "React Native" },
        { id: 5, icon: <DiFirebase />, title: "Firebase" },
      ],
      description: "App for tracking anime",
      github: "https://github.com/whylone1y/T-Anime",
      live: "",
    },
  ]);

  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl lg:text-3xl mb-4">Projects</h1>
      <div className="flex justify-center md:justify-between flex-wrap w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
