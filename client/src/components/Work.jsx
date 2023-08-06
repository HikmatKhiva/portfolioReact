import {motion} from 'framer-motion'
import PropTypes from 'prop-types'
import {urlFor} from '../server/client'
import {eye, github} from '../assets'
import {fadeCard} from '../motionOption/options'
import {LazyLoadImage} from 'react-lazy-load-image-component'
const Work = ({project, id, index}) => {
  return (
    <motion.div
      variants={fadeCard(0.2 * index)}
      initial="start"
      animate="finished"
      transition={{delay: 0.2 * index}}
      className="bg-gray-300 h-[350px] work__item w-full md:w-[350px] p-2  relative dark:text-white rounded shadow-gray-300 dark:shadow-gray-900 transition duration-300 hover:shadow-gray-800 text-gray-900 dark:bg-gray-800  shadow-2xl  "
    >
      <div className="img-container h-[70%] cursor-pointer rounded-t relative flex justify-center">
        <LazyLoadImage
          className="w-full h-full aspected rounded opacity-100"
          src={urlFor(project?.image)}
          effect="blur"
          alt={project?.workTitle}
        />
        <div className="absolute link__container rounded-t w-full h-full transition duration-300  bg-slate-400 dark:bg-gray-900 top-0 left-0 opacity-0 flex items-center justify-center gap-4">
          {project.gitUrl && (
            <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" />
            </a>
          )}
          {project.urlProject && (
            <a href={project.urlProject} target="_blank" rel="noopener noreferrer">
              <img src={eye} alt="eye" />
            </a>
          )}
        </div>
      </div>
      <span className="absolute inline-block bg-gray-300 text-gray-600 dark:bg-gray-800 top-0  rounded p-1 px-2 dark:text-white font-semibold left-1/2 -translate-x-1/2">
        {project.title ? project.title : 'Web App'}
      </span>
      <div className="desc  flex rounded h-[30%] flex-col p-2">
        <span className="work__title self-center pt-3 lg:text-xl font-medium text-lg">
          {project?.workTitle}
        </span>
        <p className="work__title w-full text-center  text-sm font-medium space-x-0.5">
          {project.description && project?.description}{' '}
        </p>
      </div>
    </motion.div>
  )
}
Work.propTypes = {
  project: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
export default Work
