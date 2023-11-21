import { AnimatePresence, motion } from "framer-motion";
import { urlFor } from "../server/client";
import { close } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { clearSkill } from "../redux/reducer/skills";
const AnimatedSkill = () => {
  const { selectedSkill } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(clearSkill())}
        className="h-screen absolute grid place-items-center  w-screen top-0 left-0"
      />
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            layoutId={selectedSkill._id}
            style={{ background: selectedSkill?.animatedCardBg }}
            className="absolute  text-white p-2 py-4 z-20 flex flex-col md:w-80 w-[90%]  rounded"
          >
            <span className="border border-white rounded-full p-2 self-center">
              <motion.img
                animate={{
                  rotate: selectedSkill.name == "React" ? [180, 0] : [0, 0],
                }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                className="w-10 h-10 object-contain skill-aspect"
                src={urlFor(selectedSkill?.icon)}
                alt={selectedSkill?.name}
              />
            </span>
            <span className="self-center py-1">{selectedSkill?.name}</span>
            <div className="w-full bg-gray-200 rounded-full h-4 ">
              <div
                className="bg-blue-600 text-xs transition-all duration-300  font-medium text-blue-100 flex items-center justify-center text-center h-full leading-none rounded-full"
                style={{ width: selectedSkill?.skillExperience + "%" }}
              >
                {selectedSkill?.skillExperience}%
              </div>
            </div>
            <button
              onClick={() => dispatch(clearSkill())}
              className="absolute bg-red-600 right-3 p-1 rounded hover:bg-red-700 top-2"
            >
              <img src={close} alt="close-icon" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AnimatedSkill;