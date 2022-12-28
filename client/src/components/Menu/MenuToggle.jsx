import React from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/themeContext';
import PropTypes from 'prop-types';
const MenuToggle = ({ toggle }) => {
  const { theme } = React.useContext(ThemeContext);
  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={theme.isActive ? 'hsl(0, 0%, 18%)' : 'rgb(255, 255, 255)'}
      strokeLinecap="round"
      {...props}
    />
  );
  return (
    <button className={`relative right-4 top-2 `} onClick={toggle}>
      <svg width="23" height="23" className={`${theme.isActive ? 'text-black' : 'text-white'}`} viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  )
};
MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
}
export default MenuToggle;