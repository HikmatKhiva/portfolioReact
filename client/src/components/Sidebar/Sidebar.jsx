import React, { useContext, useRef } from "react";
import { motion, useCycle } from "framer-motion";

import { useDimensions } from '../../hook/useDimensions';
import { MenuToggle } from '../Menu/MenuToggle'
import { MenuItem } from '../Menu/MenuItem'
import { ThemeContext } from "../../context/themeContext";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Sidebar = ({ navLink }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      className="md:hidden fixed w-full"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={`background ${theme.isActive ? theme.light + " shadow-2xl" : theme.dark + " shadow-2xl shadow-gray-800"}  fixed top-[64px] right-0 h-screen w-[90%]  md:w-1/2 ${theme.isActive ? 'border-l-2' : 'border-l-2 border-gray-600'} ${!isOpen && 'hidden'}`} variants={sidebar} >
        <motion.ul className=" h-full w-full flex items-center justify-center flex-col gap-4">
          {navLink.map((value, index) => (
            <MenuItem toggleOpen={toggleOpen} value={value} index={index} key={index} />
          ))}
        </motion.ul>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

