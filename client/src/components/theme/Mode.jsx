import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import {moon, sun} from '../../assets'
import { useZustandStore } from '../../zustand'
const Mode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const colorTheme = theme == 'light' ? 'dark' : 'light'
  const {handleChangeTheme} = useZustandStore()
  useEffect(() => {
    handleChangeTheme(theme)
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative right-12 top-1"
      whileInView={{scale: [0, 1], rotate: [45, 0]}}
      whileTap={{scale: [0.9, 1], rotate: [45, 0]}}
      transition={{duration: 0.5}}
    >
      <img className="w-6 h-6" src={theme === 'dark' ? sun : moon} alt="theme" />
    </motion.button>
  )
}
export default Mode
