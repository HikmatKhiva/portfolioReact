import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import { FaTimes } from 'react-icons/fa'
import { Skill } from '../../components/export';
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap';
import { client, urlFor } from '../../server/client';
import ExperienceYear from '../../components/experienceYear/experienceYear';
const Skills = () => {
    const effectRun = useRef(true);
    const [skill, setSkill] = useState([]);
    const [experience, setExperience] = useState([]);
    const [resume, setResume] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);
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

    const download = () => {
        const url = resume[0].resume;
        saveAs(url, 'resume.pdf');
    }
    return (
        <div style={{ height: `calc(100vh - 64px)` }} className="flex-grow py-5 flex items-center flex-col  gap-y-6">
            <span className='2xl:text-5xl text-2xl block text-center mb-2'>Skills & Experience</span>
            <div className="flex md:w-1/2 w-10/12 gap-y-8   mx-auto flex-wrap justify-center py-4">
                {/* Skills Container Start */}
                <div className="left flex-grow xl:w-1/2 w-full ">
                    <div className="skills-container flex justify-center 2xl:justify-start flex-wrap gap-4">
                        {/* Skills Item */}
                        {skill && skill.map(skill => (
                            <div className='skills-item ' key={skill._id}>
                                <Skill filterSkill={filterSkill} skill={skill} />
                            </div>
                        ))}
                        {/* Client Selected Skill About */}
                        <AnimatePresence>
                            {selectedSkill && <motion.div layoutId={selectedSkill._id} style={{ background: selectedSkill?.animatedCardBg }} className='absolute text-white p-2 py-4 flex flex-col w-72  rounded'>
                                <span className='border border-white rounded-full p-2 self-center'>

                                    <img className='w-10 h-10 ' src={urlFor(selectedSkill?.icon)} alt={selectedSkill?.name} />
                                </span>
                                <span className='self-center py-1'>{selectedSkill?.name}</span>
                                <div className='skill__progress relative rounded h-4 w-full bg-gray-500'>
                                    <div
                                        style={{ background: selectedSkill?.progressBg ? selectedSkill?.progressBg : 'blue', width: selectedSkill?.skillExperience + '%' }}
                                        className={`absolute h-full top-1/2 rounded inline-block text-sm text-end -translate-y-1/2 left-0 `}>
                                        {selectedSkill?.skillExperience}%
                                    </div>
                                </div>
                                <button onClick={() => setSelectedSkill(null)} className='absolute bg-red-600 right-3 p-1 rounded hover:bg-red-700 top-2'><FaTimes /></button>
                            </motion.div>}
                        </AnimatePresence>
                    </div>
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
            <motion.div className='pt-7 lg:w-full text-center'>
                {resume && <motion.button whileInView={{ opacity: [0, 1] }} onClick={download}
                    className='border cursor-pointer py-3 px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium'
                >Download Resume</motion.button>}
            </motion.div>
        </div >
    )
}

export default AppWrap(MotionWrap(Skills, 'skills__experience w-full'), 'skills');