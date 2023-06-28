import React from 'react';
import { motion } from 'framer-motion';
import { navLink } from '../setting/navLinks';
import PropTypes from 'prop-types';
const NavigationsDot = ({ idName }) => {
    return (
        <motion.div
            className=' flex-col justify-center gap-2 hidden md:flex pr-4'
        >
            {navLink.map((link, index) => (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a href={`${'#' + link}`} style={{ background: idName === link && '#3B82F6' }} className={'inline-block w-4 h-4 bg-gray-300 rounded-full hover:bg-blue-600 duration-300'} key={index + link} />
            ))}
        </motion.div>
    )
}
NavigationsDot.propTypes = {
    idName: PropTypes.string.isRequired
}
export default NavigationsDot;