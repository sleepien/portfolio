import { GiBurningMeteor } from "react-icons/gi";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <GiBurningMeteor className="mr-2" />
      <h1 className="font-bold mr-6">Portfolio</h1>
      <div className="hidden lg:block">
        <a
          href="https://docs.google.com/document/d/1wuW1WWw1xA2uE9pS-0Lw7nJsE_4OQ0QxgFxQBNBQcBU/edit?usp=sharing"
          className="mr-6 hover:text-blue dark:hover:text-purple lg:text-xl"
        >
          Resume
        </a>
        <a
          href="https://github.com/whylone1y/portfolio"
          className="hover:text-blue dark:hover:text-purple lg:text-xl"
        >
          View Source
        </a>
      </div>
    </div>
  );
};
