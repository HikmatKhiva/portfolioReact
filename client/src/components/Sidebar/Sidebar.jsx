import React, { useContext, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import PropTypes from 'prop-types';
import { useDimensions } from '../../hook/useDimensions';
import MenuToggle from '../Menu/MenuToggle';
import MenuItem from '../Menu/MenuItem';
import { ThemeContext } from '../../context/themeContext';
import { sidebar } from '../../motionOption/options';
const Sidebar = ({ navLink }) => {
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
Sidebar.propTypes = {
  navLink: PropTypes.array
}
export default Sidebar;