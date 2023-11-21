import {useRef, useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {Work} from '../../components'
import {client} from '../../server/client'
import MotionWrap from '../../Wrapper/MotionWrap'
const Works = () => {
  const effectRun = useRef(true)
  const [filter, setFilter] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animatedCard, setAnimatedCard] = useState({y: 0, opacity: 1})
  const [filterProject, setFilterProject] = useState([])
  const [projects, setProjects] = useState([])
  useEffect(() => {
    if (effectRun.current) {
      const queryProjects = `*[_type == "work"]`
      const queryFilter = `*[_type == "filter"]`
      client.fetch(queryFilter).then((res) => setFilter(res[0]))
      client.fetch(queryProjects).then((res) => {
        setFilterProject(res)
        setProjects(res)
      })
      effectRun.current = false
    }
  }, [])
  const handleWorkFilter = (value) => {
    setActiveFilter(value)
    setAnimatedCard({y: 100, opacity: 1})
    setTimeout(() => {
      setAnimatedCard({y: 0, opacity: 1})
      if (value === 'All') {
        setFilterProject(projects)
      } else {
        setFilterProject(projects.filter((project) => project.filterType.includes(value)))
      }
    }, 500)
  }
  return (
    <div className="flex-grow py-4 dark:text-white work gap-y-6">
      <h2 className="2xl:text-4xl text-3xl block text-center mb-2">Work</h2>
      <div className="container__buttons flex-wrap flex justify-center my-8 gap-4">
        {filter.name &&
          filter?.name.map((name, index) => (
            <button
              onClick={() => handleWorkFilter(name)}
              key={index}
              className={`text-sm md:text-base border ${
                name === activeFilter && 'bg-blue-600 text-white border-none'
              } p-2 border-gray-500 dark:text-white  font-medium dark:border-white dark:hover:border-blue-500 hover:text-white rounded px-2 hover:bg-blue-500 hover:border-blue-500`}
            >
              {name}
            </button>
          ))}
      </div>
      <motion.div
        className="my__works  mt-8 flex px-3 md:px-2 last:pb-20 md:last:pb-0 justify-center gap-3 gap-y-4 flex-wrap "
        animate={animatedCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
      >
        {filterProject.length
          ? filterProject.map((project, index) => (
              <Work project={project} index={index} key={project._id} id={project._id} />
            ))
          : ''}
      </motion.div>
    </div>
  )
}
export default MotionWrap(Works, 'work w-full', 'work');