import { GiHamburgerMenu } from "react-icons/gi";

export const Menu = () => {
  return (
    <div className="h-[2.5rem] w-[2.5rem] border-[1px] border-yellow dark:border-purple rounded-md flex items-center justify-center text-black dark:text-white text-base ">
      <GiHamburgerMenu />
    </div>
  );
};
