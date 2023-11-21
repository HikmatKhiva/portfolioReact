import React from "react";
import { motion } from "framer-motion";
import Loading from "../loadings/Loading";
const MotionWrap = (Component, classNames, idName) =>
  function HOC() {
    return (
      <React.Suspense fallback={Loading}>
        <motion.div
          transition={{ duration: 0.5 }}
          className={`${classNames}`}
          id={idName}
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        >
          <Component />
        </motion.div>
      </React.Suspense>
    );
  };
export default MotionWrap;