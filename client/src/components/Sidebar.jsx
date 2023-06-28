import {useRef} from 'react'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types'
import MenuToggle from './Menu/MenuToggle'
import MenuItem from './Menu/MenuItem'
import {sidebar} from '../motionOption/options'
import {useZustandStore} from '../zustand'
const Sidebar = ({navLink}) => {
  const containerRef = useRef(null)
  const {mobileNav,CloseMobileNav} = useZustandStore()
  return (
    <motion.div
      className="md:hidden fixed w-full"
      initial={false}
      animate={mobileNav ? 'open' : 'closed'}
      ref={containerRef}
    >
      <motion.div
        className="background shadow-2xl  fixed top-[64px] right-0 h-screen w-full "
        variants={sidebar}
      >
        <div onClick={CloseMobileNav} className="flex-grow"></div>
        <motion.ul  className="h-full w-10/12  dark:bg-gray-900 shadow-gray-800 dark:shadow-lg shadow-md  dark:text-white bg-gray-100  flex items-center justify-center flex-col gap-4">
          {navLink.map((value, index) => (
            <MenuItem value={value} index={index} key={index} />
          ))}
        </motion.ul>
      </motion.div>
      <MenuToggle />
    </motion.div>
  )
}
Sidebar.propTypes = {
  navLink: PropTypes.array,
}
export default Sidebar
