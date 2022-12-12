import React from 'react';
import { motion } from 'framer-motion';
const navLink = ['home', 'skills', 'work', 'contact'];
const NavigationsDot = ({ idName }) => {
    return (
        <motion.div
            whileInView={{
                opacity: [0, 1],
                transition: { ease: 'easeInOut', delayChildren: 0.3 },
                y: [300, 0],
            }}
            className=' flex-col justify-center gap-2 hidden md:flex pr-4'
        >
            {navLink.map((link, index) => (
                <a href={`${'#' + link}`} style={{ background: idName === link && '#3B82F6' }} className={'inline-block w-4 h-4 bg-gray-300 rounded-full hover:bg-blue-600 duration-300'} key={index + link} />
            ))}
        </motion.div>
    )
}
export default NavigationsDot;