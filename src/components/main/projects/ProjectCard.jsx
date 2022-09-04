import { DiGit } from "react-icons/di";
import { RiRadioButtonLine } from "react-icons/ri";
import portfolio from "../../../assets/images/portfolio.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full sm:w-[80%] md:w-[49.2%] aspect-video bg-sw  dark:bg-sb rounded-md p-3 lg:p-4">
      <div className="flex justify-between">
        <img
          src={portfolio}
          alt="portfolio-image"
          className="w-[60%] rounded-md"
        />
        <div className="w-[37%]">
          <h1 className="text-xl lg:text-2xl font-bold mb-2">
            {project.title}
          </h1>
          <p className="text-md lg:text-lg">{project.description}</p>
        </div>
      </div>
      <div className="mt-4 min-h-[200px]">
        <h1 className="font-bold">Stack:</h1>
        <div className="flex flex-wrap mt-2">
          {project.skills.map((skill) => (
            <div
              key={skill.id}
              className="w-[50%] flex items-center mt-1 lg:mt-2"
            >
              <div className="text-2xl lg:text-3xl mr-2">{skill.icon}</div>
              <p className="text-lg lg:text-xl">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[50%] m-auto mt-4 justify-between">
        <a
          href="https://kenesalisher.netlify.app/"
          className="w-20 px-2 py-1 rounded-md bg-green text-white dark:text-black flex text-lg lg:text-xl items-center justify-center"
        >
          <RiRadioButtonLine className="mr-1 text-red" />
          Live
        </a>
        <a
          href="https://github.com/whylone1y/portfolio"
          className="w-20 px-2 py-1 rounded-md bg-green text-white dark:text-black flex text-lg lg:text-xl items-center justify-center"
        >
          <DiGit />
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
