import React, { useContext, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import MotionWrap from '../../Wrapper/MotionWrap';
import { ThemeContext } from '../../context/themeContext';
import AppWrap from '../../Wrapper/AppWrap';
import { client, urlFor } from '../../server/client';
// Import Images
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import css from '../../assets/css.png';
const multipleClass = 'flex items-center justify-center rounded-full border-2 p-2 md:absolute md:w-20 md:h-20 h-16 w-16';
import ReactTooltip from 'react-tooltip';
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [person, setPerson] = useState({
    about: [],
    img: null
  });
  const isRun = useRef(true);
  useEffect(() => {
    if (isRun.current) {
      const query = '*[_type == "mainTitle"]';
      client.fetch(query).then(res => setPerson({ about: res[0].title, img: res[0].img }));
      isRun.current = false;
    }
  }, []);
  return (
    <div style={{ height: `calc(100vh - 64px)` }} className={`flex-grow  relative  justify-center flex items-center flex-col `}>
      <div className="about-container relative">
        <motion.div whileInView={{ scale: [0, 1] }} transition={{ duration: 3 }} className={`pt-2 overflow-hidden left-1/2 h-72 w-72 rounded-full border mb-5 border-gray-600`}>
          {person.img && <img className="w-full h-full object-contain" src={person.img && urlFor(person?.img)} alt="profile" />}
        </motion.div>
        {/* Programming */}
        <div className='flex justify-between'>
          <motion.div data-for='html' data-tip className={`cursor-pointer  ${theme.isActive ? 'bg-orange-300' : theme.dark + " border-orange-600"} -left-32 -top-0 ${multipleClass} `}>
            <motion.img whileTap={{ scale: 0.6 }} className="w-10/12 h-10/12" src={html} alt="html" />
            <ReactTooltip
              id='html'
              data-for="html"
              place='top'
              type='dark'
              backgroundColor='#F06529'
              effect='solid'
            >
              {'HTML'}
            </ReactTooltip>
          </motion.div>
          <motion.div data-for="css" data-tip whileInView={{ scale: [0, 1] }} transition={{ duration: 2 }} className={`cursor-pointer ${theme.isActive ? 'bg-blue-300' : 'bg-gray-700' + " border-blue-600"} -top-28 left-24 ${multipleClass} `}>
            <motion.img whileTap={{ scale: 0.6 }} className="w-10/12 h-10/12" src={css} alt="css" />
            <ReactTooltip
              backgroundColor='#264de4'
              id='css'
              place='top'
              effect='solid'
            >
              {"CSS"}
            </ReactTooltip>
          </motion.div>
          <motion.div data-for="javascript" data-tip className={`cursor-pointer ${theme.isActive ? 'bg-amber-200' : theme.dark + " border-amber-600"} -right-32 top-0 ${multipleClass} `}>
            <motion.img whileTap={{ scale: 0.6 }} className="w-full h-full rounded-full" src={javascript} alt="javascript" />
            <ReactTooltip
              backgroundColor='rgb(217,119,16)'
              id='javascript'
              place='top'
              effect='solid'
            >
              Javascript
            </ReactTooltip>
          </motion.div>
        </div>
      </div>
      <h1 className='md:text-4xl text-2xl mt-2'>
        <Typewriter
          options={{
            strings: person?.about,
            autoStart: true,
            loop: true,
          }} />
      </h1>
    </div>
  )
}

export default AppWrap(MotionWrap(Home, 'flex w-full'), 'home');