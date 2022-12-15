import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsEye } from 'react-icons/bs';
import { ThemeContext } from '../../context/themeContext';
import { urlFor } from '../../server/client';
const Work = ({ project, id, animatedCard }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <motion.div
            animate={animatedCard}
            key={id}
            whileInView={{ y: [100, 0,], opacity: [0, 1] }}
            whileHover={{ scale: 1 }}
            transition={{ duration: .9 }}
            className={`work__item ${theme.isActive ? 'bg-gray-300 shadow-gray-700 transition duration-300  hover:shadow-gray-800 text-gray-900' : 'bg-slate-600 '} p-2 rounded relative h-60 mx-auto w-[90%] xl:w-[250px] xl:h-[330px] shadow-2xl  `}>
            <div className="img-container h-[70%] cursor-pointer relative ">
                <img className='w-full h-full rounded opacity-100' src={urlFor(project.image)} alt={project.workTitle} />
                <span className={`absolute link__container rounded w-full h-full transition duration-300  ${theme.isActive ? 'bg-slate-600' : 'bg-gray-900'} top-0 left-0 opacity-0 flex items-center justify-center gap-4 `}>
                    {project.gitUrl && <a href={project.gitUrl} target='_blank' rel='noopener noreferrer'><BsGithub className='text-white hover:scale-110 transition duration-300 opacity-100' size={20} /></a>}
                    {project.urlProject && <a href={project.UrlProject} target='_blank' rel='noopener noreferrer'> <BsEye className='text-white hover:scale-110 transition duration-300 opacity-100' size={20} /></a>}
                </span>
            </div>
            <span className={`absolute inline-block ${theme.isActive ? 'bg-gray-300 text-gray-600' : 'bg-slate-600 '} top-0 rounded p-1 px-2  text-white font-semibold left-1/2 -translate-x-1/2 `}>{project.title ? project.title : 'Web App'}</span>
            <div className="desc flex h-[30%] flex-col  py-2">
                <span className='work__title self-center lg:text-xl font-medium text-lg'>{project.workTitle}</span>
                <p className='work__title w-full text-sm font-medium space-x-0.5'>{project.description && project.description} </p>
            </div>
        </motion.div>
    )
}
export default Work;