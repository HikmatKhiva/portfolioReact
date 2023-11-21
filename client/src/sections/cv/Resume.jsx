import { useState } from "react";
import useGetQuery from "../../hook/useGetQuery";
import { queryResume } from "../../server/queries";
import { motion } from "framer-motion";
import { PdfView } from "../../components";
import { saveAs } from "file-saver";
const Resume = () => {
  const { data: resume } = useGetQuery("resume", queryResume);
  const [showResume, setShowResume] = useState(false);
  if (resume)
    return (
      <section id="resume" className="dark:text-white pb-2">
        <h2 className="2xl:text-4xl text-3xl block text-center mb-2">
          See My CV
        </h2>
        <motion.div className="flex justify-center drop-shadow-lg mt-5">
          {resume && showResume && <PdfView url={resume[0].resume} />}
        </motion.div>
        <motion.div className="md:pt-7 py-1 lg:w-full text-center flex gap-4 justify-center">
          {resume && (
            <motion.button
              whileInView={{ opacity: [0, 1] }}
              onClick={() =>
                saveAs(resume[0].resume, "HikmatCV " + new Date().getMinutes())
              }
              className="border cursor-pointer py-2 px-1 md:py-3 md:px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium"
            >
              Download Resume
            </motion.button>
          )}
          <motion.button
            whileInView={{ opacity: [0, 1] }}
            onClick={() => setShowResume(!showResume)}
            className="border cursor-pointer py-3 px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium"
          >
            {showResume ? "Hidden" : "Show resume"}
          </motion.button>
        </motion.div>
      </section>
    );
};
export default Resume;
