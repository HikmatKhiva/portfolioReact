import { motion } from "framer-motion";
import { moon, sun } from "../../assets";
import useTheme from "../../hook/useTheme";
const Mode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative right-12 top-1"
      whileInView={{ scale: [0, 1], rotate: [45, 0] }}
      whileTap={{ scale: [0.9, 1], rotate: [45, 0] }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="w-6 h-6"
        src={theme === "dark" ? sun : moon}
        alt="theme"
      />
    </motion.button>
  );
};
export default Mode;