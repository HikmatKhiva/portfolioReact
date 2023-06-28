import {motion} from 'framer-motion'
import PropTypes from 'prop-types'
import {MenuItemVariants} from '../../motionOption/options'
import {useZustandStore} from '../../zustand'
const MenuItem = ({value, index}) => {
  const {toggleMobileNav} = useZustandStore()
  return (
    <motion.li
      onClick={toggleMobileNav}
      variants={MenuItemVariants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      whileInView={{x: [50, 0]}}
      key={index}
      className="cursor-pointer"
    >
      <a
        href={'#' + value}
        className="icon-placeholder capitalize text-xl sm:text-2xl text-gray-600 dark:text-white"
      >
        {value}
      </a>
    </motion.li>
  )
}
MenuItem.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
export default MenuItem
