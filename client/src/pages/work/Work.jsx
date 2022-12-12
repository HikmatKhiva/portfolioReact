import React, { useRef, useState, useEffect, useContext } from 'react';
import { WorkItem } from '../../components/export';
import AppWrap from '../../Wrapper/AppWrap';
import { client } from '../../server/client';
import { ThemeContext } from '../../context/themeContext';
const Work = () => {
    const isRun = useRef(true)
    const [filter, setFilter] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
    const [filterProject, setFilterProject] = useState([]);
    const [projects, setProjects] = useState([]);
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        if (isRun.current) {
            const queryFilter = `*[_type == "filter"]`;
            const queryProjects = `*[_type == "work"]`;
            client.fetch(queryFilter).then((res) => setFilter(res[0]));
            client.fetch(queryProjects).then((res) => {
                setFilterProject(res);
                setProjects(res);
            });
            isRun.current = false;
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
        <div style={{ height: `calc(100vh - 64px)` }} className="flex-grow py-4 overflow-y-auto work overflow-hidden gap-y-6">
            <span className='2xl:text-5xl text-2xl block text-center mb-2'>Work</span>
            <div className="container__buttons flex justify-center my-8 gap-4">
                {filter.name && filter?.name.map((name, index) => (
                    <button onClick={() => handleWorkFilter(name)} key={index} className={`border ${name === activeFilter && 'bg-blue-500 border-none'} p-1 ${theme.isActive && 'border-gray-500 hover:text-white'} rounded px-2 hover:bg-blue-500 hover:border-blue-500`}>{name}</button>
                ))}
            </div>
            <div className='my__works mt-8 flex w-[60%] gap-3 flex-wrap mx-auto'>
                {filterProject.length ? filterProject.map((project, index) => (
                    <WorkItem animatedCard={animatedCard} project={project} id={project._id + index} />)) : ''
                }
            </div>
        </div >
    )
}

export default AppWrap(Work, 'work');