import useDarkSide from "../../../hooks/useDarkMode";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Switcher() {
  const [isVisible] = useState(true);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toogleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <AnimatePresence mode={"wait"} initial={false}>
      {isVisible && (
        <motion.div
          style={{ display: "inline-block" }}
          key={colorTheme === "dark" ? "light" : "dark"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            checked={darkSide}
            onClick={toogleDarkMode}
            className="w-[2.5rem] h-[2.5rem] flex items-center justify-center mr-2 rounded-md bg-yellow dark:bg-purple cursor-pointer"
          >
            {colorTheme === "dark" ? <IoSunnyOutline /> : <IoMdMoon />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
