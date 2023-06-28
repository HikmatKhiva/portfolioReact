import React from 'react'
import ReactTooltip from 'react-tooltip'
import {motion} from 'framer-motion'
import {urlFor} from '../server/client'
import PropTypes from 'prop-types'
import {fadeCard} from '../motionOption/options'
const Skill = ({skill, filterSkill, index}) => {
  return (
    <motion.div
      layoutId={skill._id}
      onClick={() => filterSkill(skill._id)}
      variants={fadeCard(0.3 * index)}
      animate="finished"
      initial="start"
      data-tip
      data-for={skill?.name}
      style={{background: skill?.bgColor}}
      className="skills-item cursor-pointer rounded-full relative p-2 w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
    >
      <motion.img
        animate={{rotate: skill.name == 'React' ? [180, 0] : [0, 0]}}
        transition={{duration: 3, ease: 'linear', repeat: Infinity}}
        src={urlFor(skill?.icon)}
        className='h-10 w-10 object-contain skill-aspect'
        alt={skill?.name}
      />
      <ReactTooltip backgroundColor={skill?.tooltipColor || '#000'} id={skill?.name} effect="solid">
        {skill?.name}
      </ReactTooltip>
    </motion.div>
  )
}
Skill.propTypes = {
  skill: PropTypes.object.isRequired,
  filterSkill: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}
export default Skill
