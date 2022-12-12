import React from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';
import { urlFor } from '../../server/client';
const SkillItem = ({ skill, id }) => {
    console.log(skill);
    return (
        <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ delayChildren: 1, type: "spring" }}
            data-tip
            data-for={skill.name}
            style={{ background: skill?.bgColor }}
            key={id}
            className="skills-item cursor-pointer rounded-full relative p-2 w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16">
            <motion.img
                animate={{ rotate: skill.name == 'React' ? [180, 0] : [0, 0] }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }} src={urlFor(skill.icon)} alt={skill.name} />
            <ReactTooltip
                backgroundColor={skill?.tooltipColor || '#000'}
                id={skill.name}
                effect="solid"
            >
                {skill.name}
            </ReactTooltip>
        </motion.div>
    )
}

SkillItem.prototypes = {
    skill: PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.shape({
            assets: PropTypes.object,
            _type: PropTypes.string
        }),
        bgColor: PropTypes.string,
        tooltipColor: PropTypes.string,
    })
}

export default SkillItem;