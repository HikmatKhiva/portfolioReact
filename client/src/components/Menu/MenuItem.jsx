import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/themeContext';
import PropTypes from 'prop-types';
import { MenuItemVariants } from '../../motionOption/options';
const MenuItem = ({ value, index, toggleOpen }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.li
      onClick={() => toggleOpen()}
      variants={MenuItemVariants}
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
MenuItem.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  toggleOpen: PropTypes.func.isRequired
}
export default MenuItem;