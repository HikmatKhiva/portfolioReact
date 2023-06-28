import ReactTooltip from 'react-tooltip'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import MotionWrap from '../../Wrapper/MotionWrap'
import {urlFor} from '../../server/client'
import {mainTitle} from '../../server/queries'
import useGetQueriyes from '../../hook/useGetQueriyes'
const Home = () => {
  const [{data}] = useGetQueriyes([mainTitle])
  return (
    <div className="flex-grow home relative py-6 md:py-0 md:justify-center flex items-center flex-col">
      <div className="about-container relative">
        <motion.div
          whileInView={{scale: [0, 1]}}
          transition={{duration: 3}}
          className="pt-2 overflow-hidden left-1/2 h-60 w-60 md:h-72 md:w-72 rounded-full border mb-5 border-gray-600"
        >
          {data && (
            <img
              className="w-full h-full object-contain"
              src={urlFor(data[0]?.img)}
              alt="profile"
            />
          )}
        </motion.div>
        {/* Programming */}
        <div className="flex justify-between">
          <motion.div
            whileInView={{x: [20, 0]}}
            data-for="html"
            data-tip
            className="cursor-pointer home_skill dark:bg-transparent bg-orange-300  border-orange-600
            -left-32 -top-0 "
          >
            <motion.img
              whileTap={{scale: 0.6}}
              className="w-10/12 h-10/12 home-icon"
              src="./html.png"
              alt="html"
            />
            <ReactTooltip
              id="html"
              data-for="html"
              place="top"
              type="dark"
              backgroundColor="#F06529"
              effect="solid"
            >
              {'HTML'}
            </ReactTooltip>
          </motion.div>
          <motion.div
            data-for="css"
            data-tip
            whileInView={{scale: [0, 1]}}
            transition={{duration: 2}}
            className="cursor-pointer home_skill bg-blue-300 dark:bg-transparent border-blue-600 -top-24 left-24 "
          >
            <motion.img
              whileTap={{scale: 0.6}}
              className="w-10/12 h-10/12 home-icon"
              src="./css.png"
              alt="css"
            />
            <ReactTooltip backgroundColor="#264de4" id="css" place="top" effect="solid">
              {'CSS'}
            </ReactTooltip>
          </motion.div>
          <motion.div
            whileInView={{x: [-20, 0]}}
            data-for="javascript"
            data-tip
            className=" cursor-pointer home_skill dark:bg-transparent bg-amber-200 border-amber-600 -right-32 top-0 "
          >
            <motion.img
              whileTap={{scale: 0.6}}
              className="w-full h-full rounded-full home-icon"
              src="./javascript.png"
              alt="javascript"
            />
            <ReactTooltip
              backgroundColor="rgb(217,119,16)"
              id="javascript"
              place="top"
              effect="solid"
            >
              Javascript
            </ReactTooltip>
          </motion.div>
        </div>
      </div>
      <h1 className="md:text-4xl dark:text-white text-2xl mt-2">
        <Typewriter
          options={{
            strings: data ? data[0]?.title : [''],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  )
}
export default MotionWrap(Home, '', 'home')
