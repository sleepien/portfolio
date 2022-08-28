import { Logo, Menu, Switcher } from "./index";
import { useState } from "react";
import DropDownMenu from "./HeaderElements/DropDownMenu";

export const Header = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <div className="dark:bg-black/30 fixed top-0 z-10 w-screen flex items-center justify-between h-16 p-4 bg-white/30 backdrop-blur-sm">
        <Logo />
        <div className="flex">
          <Switcher />
          <div className="cursor-pointer" onClick={() => setVisible(true)}>
            <Menu />
          </div>
        </div>
      </div>
      <DropDownMenu isVisible={isVisible} setVisible={setVisible} />
    </div>
  );
};
