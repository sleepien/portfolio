import { GiBurningMeteor } from "react-icons/gi";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <GiBurningMeteor className="mr-2" />
      <h1 className="font-bold mr-6">Portfolio</h1>
      <a
        href=""
        className="mr-6 hover:text-blue dark:hover:text-purple invisible lg:visible lg:text-xl"
      >
        Resume
      </a>
      <a
        href=""
        className="hover:text-blue dark:hover:text-purple invisible lg:visible lg:text-xl"
      >
        View Source
      </a>
    </div>
  );
};
