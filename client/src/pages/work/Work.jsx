import React, { useRef, useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Work } from '../../components/export';
import { client } from '../../server/client';
import { ThemeContext } from '../../context/themeContext';
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap';
const Works = () => {
    const effectRun = useRef(true);
    const [filter, setFilter] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
    const [filterProject, setFilterProject] = useState([]);
    const [projects, setProjects] = useState([]);
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        if (effectRun.current) {
            const queryFilter = `*[_type == "filter"]`;
            const queryProjects = `*[_type == "work"]`;
            client.fetch(queryFilter).then((res) => setFilter(res[0]));
            client.fetch(queryProjects).then((res) => {
                setFilterProject(res);
                setProjects(res);
            });
            effectRun.current = false;
        }
    }, [])
    const handleWorkFilter = (value) => {
        setActiveFilter(value);
        setAnimatedCard({ y: 100, opacity: 1 });
        setTimeout(() => {
            setAnimatedCard({ y: 0, opacity: 1 });
            if (value === 'All') {
                setFilterProject(projects);
            } else { setFilterProject(projects.filter((project) => project.filterType.includes(value))); }
        }, 500)
    }
    return (
        <div className="flex-grow py-4  work gap-y-6">
            <span className='2xl:text-4xl text-3xl block text-center mb-2'>Work</span>
            <div className="container__buttons flex-wrap flex justify-center my-8 gap-4">
                {filter.name && filter?.name.map((name, index) => (
                    <button onClick={() => handleWorkFilter(name)} key={index} className={`text-sm md:text-base border ${name === activeFilter && 'bg-blue-500 border-none'} p-1 ${theme.isActive && 'border-gray-500 hover:text-white'} rounded px-2 hover:bg-blue-500 hover:border-blue-500`}>{name}</button>
                ))}
            </div>
            <motion.div
                className='my__works  mt-8 flex px-3 md:px-2 last:pb-20 md:last:pb-0 justify-center gap-3 gap-y-4 flex-wrap '
                animate={animatedCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
            >
                {filterProject.length ? filterProject.map(project => (
                    <div className='h-[350px] work__item w-full md:w-[350px] p-2  relative ' key={project._id}>
                        <Work project={project} id={project._id} />
                    </div>
                )) : ''}

            </motion.div>
        </div >
    )
}
export default AppWrap(MotionWrap(Works, 'work w-full'), 'work');