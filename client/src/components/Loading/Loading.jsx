import React from 'react';
import { motion } from 'framer-motion';
import { BarLoader } from 'react-spinners'
import react from '../../assets/react.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
const Loading = () => {
    return (
        <div className='loading flex-col gap-10 bg-gradient-to-r from-orange-700 via-gray-900 to-blue-500 h-screen flex items-center justify-center'>
            <div className="frame__works flex-col md:flex-row flex gap-10">
                <motion.div className="frame__work-item">
                    <motion.img className='w-20 h-20' whileInView={{ x: [-200, 0] }} src={html} alt="html" />
                </motion.div>
                <motion.div animate={{ rotate: [-180, 0] }} transition={{ duration: 3, ease: "linear", times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity }} className="frame__work-item">
                    <motion.img className='w-20 h-20' whileInView={{ scale: [0, 1] }} src={react} alt="react" />
                </motion.div>
                <motion.div className="frame__work-item">
                    <motion.img className='w-20 h-20' whileInView={{ x: [200, 0] }} src={css} alt="css" />
                </motion.div>
            </div>
            <motion.div whileInView={{ y: [200, 0] }}>
                <BarLoader className='rounded bg-gradient-to-r from-orange-700 via-gray-900 to-blue-500' width={250} color="#3b82f6" />
            </motion.div>
        </div>
    )
}
export default Loading