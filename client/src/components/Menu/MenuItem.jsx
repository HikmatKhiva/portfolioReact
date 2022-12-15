import React from "react";
import { motion } from "framer-motion";
import { ThemeContext } from '../../context/themeContext';
import { useContext } from "react";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ value, index, toggleOpen }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.li
      onClick={() => toggleOpen()}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.90 }}
      whileInView={{ x: [50, 0] }}
      key={index}
      className="cursor-pointer"
    >
      <a href={'#' + value} className={`icon-placeholder capitalize text-xl sm:text-2xl ${theme.isActive ? 'text-gray-600' : 'text-white'}`} >{value}</a>
    </motion.li>
  );
};