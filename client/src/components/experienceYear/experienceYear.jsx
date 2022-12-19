import React from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';
const ExperienceYear = ({ data }) => {
    return (
        <motion.div whileInView={{ scale: [0, 1] }} transition={{ duration: 1 }} key={data._id} className="experience-item flex w-full md:items-start items-center justify-between gap-4">
            <span className="year text-xl md:text-2xl ">
                {data.year}
            </span>
            {data.works && data?.works.map((work) => (
                <div key={work?._key} className="flex-col flex ">
                    <span className="company 2xl:text-2xl text-end text-lg">{work?.company}</span>
                    <span data-for={work?.company} data-tip className="position 2xl:text-xl text-base">{work?.position}</span>
                    <ReactTooltip
                        id={work?.company}
                        effect="solid"
                        place="left"
                    >
                        {work?.desc}
                    </ReactTooltip>
                </div>
            ))}
        </motion.div>
    )
}


export default ExperienceYear