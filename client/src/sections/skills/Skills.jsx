import { Skill, AnimatedSkill } from "../../components";
import MotionWrap from "../../Wrapper/MotionWrap";
import ExperienceYear from "../../components/ExperienceYear";
import useGetQueries from "../../hook/useGetQueries";
import { queryExperience, querySkills } from "../../server/queries";
import { useDispatch, useSelector } from "react-redux";
import { handleSkill } from "../../redux/reducer/skills";
const Skills = () => {
  const { selectedSkill } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const [{ data: experience }, { data: skill }] = useGetQueries([
    queryExperience,
    querySkills,
  ]);
  const filterSkill = (id) =>
    skill.filter(
      (skill) => skill._id === id && dispatch(handleSkill({ skill: skill }))
    );
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
    </section>
  );
};
export default MotionWrap(Skills, "skills__experience w-full", "skills");
