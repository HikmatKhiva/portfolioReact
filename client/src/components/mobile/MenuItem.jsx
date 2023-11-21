import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { MenuItemVariants } from "../../motionOption/options";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileNav } from "../../redux/reducer/settings";
const MenuItem = ({ value, index }) => {
  const dispatch = useDispatch()
  const { mobileNav } = useSelector(state => state.settings)
  return (
    <AnimatePresence>
      {mobileNav && <motion.li
        onClick={() => dispatch(toggleMobileNav())}

        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        whileInView={{
          y: [-50, 0], opacity: [0, 1], transition: {
            delay: index * 0.2,
            type: "spring",
          }
        }}
        transition={{
          delay: index * 0.2,
          type: "spring",
        }}
        className="cursor-pointer"
      >
        <a
          href={"#" + value}
          className="icon-placeholder capitalize text-xl sm:text-2xl text-gray-600 dark:text-white"
        >
          {value}
        </a>
      </motion.li>}
    </AnimatePresence>
  );
};
MenuItem.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default MenuItem;