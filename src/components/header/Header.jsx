import { Logo, Menu, Switcher } from "./index";
import { useState } from "react";
import DropDownMenu from "./HeaderElements/DropDownMenu";

export const Header = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="dark:bg-black/30 bg-white/30 backdrop-blur-sm fixed top-0 z-10 w-screen h-16 lg:h-20 flex lg:text-2xl">
      <div className="w-[350px] lg:w-[1200px] flex items-center justify-between m-auto px-4">
        <Logo />
        <div className="flex">
          <Switcher />
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setVisible(true)}
          >
            <Menu />
          </div>
        </div>
      </div>
      <DropDownMenu isVisible={isVisible} setVisible={setVisible} />
    </div>
  );
};
