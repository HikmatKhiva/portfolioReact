import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Skill, PdfView, AnimatedSkill } from '../../components/export';
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap';
import { client } from '../../server/client';
import ExperienceYear from '../../components/experienceYear/experienceYear';
import { download } from '../../setting/downloadFunc';
const Skills = () => {
    const effectRun = useRef(true);
    const [skill, setSkill] = useState([]);
    const [experience, setExperience] = useState([]);
    const [resume, setResume] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [showResume, setShowResume] = useState(false)
    const queryExperience = '*[_type == "experience"]';
    const querySkills = '*[_type == "skills"]';
    const queryResume = '*[_type == "resume"]{"resume":resume.asset->url}';
    useEffect(() => {
        if (effectRun.current) {
            client.fetch(queryExperience).then((res) => setExperience(res));
            client.fetch(querySkills).then((res) => setSkill(res));
            client.fetch(queryResume).then((res) => setResume(res));
            effectRun.current = false
        }
    }, [])
    const filterSkill = (id) => skill.filter(skill => skill._id === id && setSelectedSkill(skill));
    const cancelAnimatedSkill = () => setSelectedSkill(null);
    return (
        <div style={{ minHeight: `calc(100vh - 64px)` }} className="flex-grow py-5 lex overflow-hidden  relative items-center flex-col gap-y-6">
            <span className='2xl:text-4xl text-3xl block text-center mb-2'>Skills & Experience</span>
            <div className="flex md:w-1/2 w-10/12 md:gap-y-8 gap-y-2  mx-auto flex-wrap justify-center py-4 ">
                {/* Skills Container Start */}
                <div className="left flex-grow xl:w-1/2  w-full skills-container flex justify-center 2xl:justify-start flex-wrap gap-4">
                    {/* Skills Item */}
                    {skill && skill.map(skill => (
                        <div className='skills-item ' key={skill._id}>
                            <Skill filterSkill={filterSkill} skill={skill} />
                        </div>
                    ))}
                    {/* Client Selected Skill About */}
                    {selectedSkill && <AnimatedSkill selectedSkill={selectedSkill} cancelAnimatedSkill={cancelAnimatedSkill} />}
                </div>
                {/* Skills Container End */}
                {/* Experience Container Start */}
                <div className="right experience lg:w-1/2 flex flex-col 2xl:items-end gap-4 items-center flex-grow ">
                    {/* Experience Item Start */}
                    {experience && experience.map((data) => (
                        <div key={data._id}>
                            <ExperienceYear data={data} />
                        </div>
                    ))}
                    {/* Experience Item End */}
                </div>
                {/* Experience Container End */}
            </div>
            {/* My resume */}
            {/* View Resume */}
            {showResume && <motion.div className='flex justify-center'>
                {resume && <PdfView url={resume[0].resume} />}
            </motion.div>}
            <motion.div className='md:pt-7 py-1 lg:w-full text-center flex gap-4 justify-center'>
                {resume && <motion.button whileInView={{ opacity: [0, 1] }} onClick={() => download(resume[0].resume, 'resume')}
                    className='border cursor-pointer py-2 px-1 md:py-3 md:px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium'
                >Download Resume</motion.button>}
                <motion.button whileInView={{ opacity: [0, 1] }} onClick={() => setShowResume(prev => !prev)} className='border cursor-pointer py-3 px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium'>
                    {showResume ? 'Hidden' : 'Show resume'}
                </motion.button>
            </motion.div>
        </div >
    )
}
export default AppWrap(MotionWrap(Skills, 'skills__experience w-full'), 'skills');