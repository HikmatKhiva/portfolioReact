import { motion } from "framer-motion";
import { Skill, PdfView, AnimatedSkill } from "../../components";
import MotionWrap from "../../Wrapper/MotionWrap";
import ExperienceYear from "../../components/ExperienceYear";
import useGetQueriyes from "../../hook/useGetQueriyes";
import {
  queryExperience,
  queryResume,
  querySkills,
} from "../../server/queries";
import { useZustandStore } from "../../zustand";
const Skills = () => {
  const {
    selectedSkill,
    handleSelect,
    showResume,
    toggleShowResume,
    downloadFile,
  } = useZustandStore();
  const [{ data: experience }, { data: resume }, { data: skill }] =
    useGetQueriyes([queryExperience, queryResume, querySkills]);
  const filterSkill = (id) =>
    skill.filter((skill) => skill._id === id && handleSelect(skill));
  return (
    <section className="flex-grow py-10 lex overflow-hidden dark:text-white relative items-center flex-col gap-y-6">
      <h2 className="2xl:text-4xl text-3xl block text-center mb-2">
        Skills & Experience
      </h2>
      <div className="flex md:w-1/2 w-10/12 md:gap-y-8 gap-y-2  mx-auto flex-wrap justify-center py-4 ">
        {/* Skills Container Start */}
        <div className="left flex-grow xl:w-1/2  w-full skills-container flex justify-center 2xl:justify-start flex-wrap gap-4">
          {/* Skills Item */}
          {skill &&
            skill.map((skill, index) => (
              <Skill
                filterSkill={filterSkill}
                index={index}
                key={index}
                skill={skill}
              />
            ))}
          {/* Client Selected Skill About */}
          {selectedSkill && <AnimatedSkill />}
        </div>
        {/* Skills Container End */}
        {/* Experience Container Start */}
        <div className="right experience flex flex-col 2xl:items-end gap-4 items-center flex-grow ">
          {/* Experience Item Start */}
          {experience &&
            experience.map((data, index) => (
              <ExperienceYear index={index} key={index} data={data} />
            ))}
          {/* Experience Item End */}
        </div>
        {/* Experience Container End */}
      </div>
      {/* My resume */}
      {/* View Resume */}
      {showResume && (
        <motion.div className="flex justify-center drop-shadow-lg mt-5">
          {resume && <PdfView url={resume[0].resume} />}
        </motion.div>
      )}
      <motion.div className="md:pt-7 py-1 lg:w-full text-center flex gap-4 justify-center">
        {resume && (
          <motion.button
            whileInView={{ opacity: [0, 1] }}
            onClick={() => downloadFile(resume[0].resume, "resume")}
            className="border cursor-pointer py-2 px-1 md:py-3 md:px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium"
          >
            Download Resume
          </motion.button>
        )}
        <motion.button
          whileInView={{ opacity: [0, 1] }}
          onClick={toggleShowResume}
          className="border cursor-pointer py-3 px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium"
        >
          {showResume ? "Hidden" : "Show resume"}
        </motion.button>
      </motion.div>
    </section>
  );
};
export default MotionWrap(Skills, "skills__experience w-full", "skills");