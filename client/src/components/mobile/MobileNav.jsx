import { useRef } from "react";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import MenuItem from "./MenuItem";
import { sidebar } from "../../motionOption/options";
import { navLink } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { closeMobileNav } from "../../redux/reducer/settings";
const MobileNav = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const { mobileNav } = useSelector((state) => state.settings);
  return (
    <motion.div
      className="md:hidden fixed w-full"
      initial={false}
      animate={mobileNav ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div
        className="background shadow-2xl fixed top-[64px] right-0 h-screen w-full "
        variants={sidebar}
      >
        <div
          onClick={() => dispatch(closeMobileNav())}
          className="flex-grow dark:bg-gray-900 bg-gray-200 opacity-50 "
        ></div>
        <motion.ul className="h-full w-10/12 dark:bg-gray-900 shadow-gray-800 dark:shadow-lg shadow-md  dark:text-white bg-gray-100 flex gap-5 p-10 flex-col ">
          {navLink.map((value, index) => (
            <MenuItem value={value} index={index} key={index} />
          ))}
        </motion.ul>
      </motion.div>
      <MenuToggle />
    </motion.div>
  );
};
export default MobileNav;