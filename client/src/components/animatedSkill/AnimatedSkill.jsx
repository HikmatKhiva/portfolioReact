import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { urlFor } from '../../server/client';
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';
const AnimatedSkill = ({ selectedSkill, cancelAnimatedSkill }) => {
    return (
        <AnimatePresence>
            {selectedSkill && <motion.div layoutId={selectedSkill._id} style={{ background: selectedSkill?.animatedCardBg }} className='absolute  text-white p-2 py-4 flex flex-col w-72  rounded'>
                <span className='border border-white rounded-full p-2 self-center'>
                    <img className='w-10 h-10 ' src={urlFor(selectedSkill?.icon)} alt={selectedSkill?.name} />
                </span>
                <span className='self-center py-1'>{selectedSkill?.name}</span>
                <div className='skill__progress relative rounded h-4 w-full bg-gray-500'>
                    <div
                        style={{ background: selectedSkill?.progressBg ? selectedSkill?.progressBg : 'blue', width: selectedSkill?.skillExperience + '%' }}
                        className={`absolute h-full  rounded inline-block text-sm text-end  left-0 `}>
                        <span className='flex flex-col justify-center h-full'>
                            {selectedSkill?.skillExperience}%
                        </span>
                    </div>
                </div>
                <button onClick={cancelAnimatedSkill} className='absolute bg-red-600 right-3 p-1 rounded hover:bg-red-700 top-2'><FaTimes /></button>
            </motion.div>}
        </AnimatePresence>
    )
}
AnimatedSkill.propTypes = {
    selectedSkill: PropTypes.object.isRequired,
    cancelAnimatedSkill: PropTypes.func.isRequired
}
export default AnimatedSkill;