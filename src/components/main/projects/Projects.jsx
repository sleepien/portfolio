import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { DiReact, DiGit } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Portfolio",
      skills: [
        {
          id: 1,
          icon: <DiReact />,
          title: "react",
        },
        { id: 2, icon: <SiTailwindcss />, title: "tailwind" },
        { id: 3, icon: <DiGit />, title: "git" },
      ],
      description: "Portfolio to show my skills",
      github: "https://github.com/whylone1y/portfolio",
      live: "https://kenesalisher.netlify.app/",
    },
    {
      id: 2,
      title: "Portfolio",
      skills: [
        {
          id: 1,
          icon: <DiReact />,
          title: "react",
        },
        { id: 2, icon: <SiTailwindcss />, title: "tailwind" },
        { id: 3, icon: <DiGit />, title: "git" },
      ],
      description: "Portfolio to show my skills",
      github: "https://github.com/whylone1y/portfolio",
      live: "https://kenesalisher.netlify.app/",
    },
  ]);

  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl lg:text-3xl">Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard />
          </div>
        ))}
      </div>
    </div>
  );
};
