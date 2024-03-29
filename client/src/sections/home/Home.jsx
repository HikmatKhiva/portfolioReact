import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import MotionWrap from "../../Wrapper/MotionWrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { html, css, js, Hikmat } from "../../assets";
import { mainTitle } from "../../config";
const Home = () => {
  return (
    <div className="flex-grow home relative py-6 md:py-0 md:justify-center flex items-center flex-col">
      <div className="about-container relative">
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 3 }}
          className="pt-2 overflow-hidden left-1/2 h-60 w-60 md:h-72 md:w-72 rounded-full border mb-5 border-gray-600"
        >
          <LazyLoadImage
            effect="blur"
            className="w-full h-full object-cover"
            src={Hikmat}
            alt="profile"
          />
        </motion.div>
        {/* Programming */}
        <div className="flex justify-between">
          <motion.div
            whileInView={{ x: [20, 0] }}
            data-tooltip-id="html"
            data-tooltip-content="HTML"
            className="cursor-pointer home_skill dark:bg-transparent bg-orange-300  border-orange-600
            -left-32 -top-0 "
          >
            <motion.img
              whileTap={{ scale: 0.6 }}
              className="w-10/12 h-10/12 home-icon"
              src={html}
              alt="html"
            />
            <Tooltip
              id="html"
              place="top"
              type="dark"
              style={{ background: "#F06529" }}
              effect="solid"
            >
              {"HTML"}
            </Tooltip>
          </motion.div>
          <motion.div
            data-tooltip-id="css"
            data-tooltip-content="CSS"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 2 }}
            className="cursor-pointer home_skill bg-blue-300 dark:bg-transparent border-blue-600 -top-24 left-24 "
          >
            <motion.img
              whileTap={{ scale: 0.6 }}
              className="w-10/12 h-10/12 home-icon"
              src={css}
              alt="css"
            />
            <Tooltip
              style={{ background: "#264de4" }}
              id="css"
              place="bottom"
              effect="solid"
            >
              {"CSS"}
            </Tooltip>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 0] }}
            data-tooltip-id="javascript"
            data-tooltip-content="Javascript"
            className=" cursor-pointer home_skill dark:bg-transparent bg-amber-200 border-amber-600 -right-32 top-0 "
          >
            <motion.img
              whileTap={{ scale: 0.6 }}
              className="w-full h-full rounded-full home-icon"
              src={js}
              alt="javascript"
            />
            <Tooltip
              style={{ background: "rgb(217,119,16)" }}
              id="javascript"
              place="top"
              effect="solid"
            >
              Javascript
            </Tooltip>
          </motion.div>
        </div>
      </div>
      <h1 className="md:text-4xl dark:text-white text-2xl mt-2">
        <Typewriter
          options={{
            strings: mainTitle,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};
export default MotionWrap(Home, "", "home");