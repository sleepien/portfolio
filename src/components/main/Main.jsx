import { About, Skills, Projects } from "./index";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Main = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!isVisible);
  }, []);

  return (
    <div className="w-[85%] max-w-[1000px] m-auto z-10 grow">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <About />
            <Skills />
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
