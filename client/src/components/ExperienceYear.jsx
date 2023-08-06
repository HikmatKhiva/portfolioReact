import React from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeCard } from "../motionOption/options";
const ExperienceYear = ({ data, index }) => {
  return (
    <div>
      <motion.div
        variants={fadeCard(0.3 * index)}
        initial="start"
        animate="finished"
        transition={{ duration: 1 }}
        key={data._id}
        className="experience-item flex w-full md:items-start items-center justify-between gap-4"
      >
        <span className="year text-xl md:text-2xl ">{data.year}</span>
        {data.works &&
          data?.works.map((work) => (
            <div key={work?._key} className="flex-col flex ">
              <span className="company 2xl:text-2xl text-end text-lg">
                {work?.company}
              </span>
              <span
                data-tooltip-id={work?.company}
                data-tooltip-content={work?.desc}
                data-tooltip-place="bottom"
                className="position 2xl:text-xl text-base"
              >
                {work?.position}
              </span>
              <Tooltip id={work?.company} effect="solid" place="left">
                {work?.desc}
              </Tooltip>
            </div>
          ))}
      </motion.div>
    </div>
  );
};
ExperienceYear.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default ExperienceYear;
