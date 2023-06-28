import React from "react";
import { motion } from "framer-motion";
import { BarLoader } from "react-spinners";
import { html, css, react } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Loading = () => {
  return (
    <div className="loading flex-col gap-10 bg-gradient-to-r from-orange-700 via-gray-900 to-blue-500 h-screen flex items-center justify-center">
      <div className="frame__works flex-col md:flex-row flex gap-10">
        <motion.div className="frame__work-item">
          <motion.div whileInView={{ x: [-200, 0] }} className="w-20 h-20">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={html}
              alt="html"
            />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ rotate: [-180, 0] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
          className="frame__work-item"
        >
          <LazyLoadImage
            className="w-20 h-20"
            effect="blur"
            src={react}
            alt="react"
          />
        </motion.div>
        <motion.div className="frame__work-item">
          <motion.div className="w-20 h-20" whileInView={{ x: [200, 0] }}>
            <LazyLoadImage
              effect="blur"
              className="h-full w-full"
              src={css}
              alt="css"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div whileInView={{ y: [200, 0] }}>
        <BarLoader
          className="rounded bg-gradient-to-r from-orange-700 via-gray-900 to-blue-500"
          width={250}
          color="#3b82f6"
        />
      </motion.div>
    </div>
  );
};
export default Loading;