import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import AppWrap from '../../Wrapper/AppWrap';
import { client } from '../../server/client';
import { SkillItem } from '../../components/export';
import ExperienceYear from '../../components/experienceYear/experienceYear';
const Skills = () => {
    const isRun = useRef(true);
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);
    const [resume, setResume] = useState(null);

    useEffect(() => {
        if (isRun.current) {
            const querySkills = '*[_type == "skills"]';
            const queryExperience = '*[_type == "experience"]';
            const queryResume = '*[_type == "resume"]{"resume":resume.asset->url}';
            client.fetch(querySkills).then((res) => setSkills(res));
            client.fetch(queryExperience).then((res) => setExperience(res));
            client.fetch(queryResume).then((res) => setResume(res));
            isRun.current = false
        }
    }, [])
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
                        {skills && skills.map((skill, index) => (
                            <SkillItem skill={skill} id={skill._id + index} />
                        ))}
                    </div>
                </div>
                {/* Skills Container End */}

                {/* Experience Container Start */}
                <div className="right experience lg:w-1/2 flex flex-col 2xl:items-end gap-4 items-center flex-grow ">
                    {/* Experience Item Start */}
                    {experience && experience.map((data) => (
                        <ExperienceYear data={data} />
                    ))
                    }
                    {/* Experience Item End */}
                </div>
                {/* Experience Container End */}
                {/* My resume */}
            </div>
            <motion.div className='pt-7 lg:w-full text-center'>
                {resume && <motion.button whileInView={{ opacity: [0, 1] }} onClick={download}
                    className='border cursor-pointer py-3 px-2 rounded hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white transition duration-300 font-medium'
                >Download Resume</motion.button>}
            </motion.div>
        </div >
    )
}

export default AppWrap(Skills, 'skills');