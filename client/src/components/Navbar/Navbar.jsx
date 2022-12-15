import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { ThemeContext } from '../../context/themeContext';
const navLink = ['home', 'skills', 'work', 'contact'];
import { UserInfoContext } from '../../context/UserInfo';
const Navbar = () => {
    const { userInfo } = useContext(UserInfoContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const handleChangeTheme = () => setTheme((prev) => ({ ...prev, isActive: !theme.isActive }));
    return (
        <>
            <nav
                className={`flex justify-between  items-center p-4 ${theme.isActive ? theme.light : theme.dark}
            backdrop-blur-md shadow-md  w-full
            fixed top-0 left-0 right-0 z-50`}>
                <div className="flex items-center">
                    <a href='#home' className="cursor-pointer">
                        <span className={`text-2xl font-medium ${theme.isActive ? 'text-blue-500' : 'text-white'}`}>
                            Hikmat
                        </span>
                    </a>
                </div>
                <div className="items-center hidden space-x-8 md:flex lg:flex">
                    {navLink.map((link, index) => (
                        <a key={index} href={'#' + link} className={`flex ${theme.isActive ? 'text-gray-600' : 'text-white'} capitalize hover:text-blue-500
                        cursor-pointer transition-colors duration-300`}>
                            {link}
                        </a>
                    ))}
                </div>
                <div className="flex items-center ">
                    <Sidebar navLink={navLink} />
                    <motion.button onClick={handleChangeTheme} className='relative right-12 top-1'
                        whileInView={{ scale: [0, 1], rotate: [45, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        {!theme.isActive ? <motion.span whileInView={{ rotate: [90, 0] }}> <BsFillSunFill className='text-yellow-400 text-2xl' /></motion.span> : <BsFillMoonFill className='text-gray-600 text-2xl' />}
                    </motion.button>
                    {userInfo?.ip ? <>
                        <img data-for='ip' data-tip className='w-8 h-8 mt-2' src='./web-address-64.png' alt="anonymousMask" />
                        <ReactTooltip
                            id='ip'
                            effect='solid'
                        >
                            <span> Your Ip {userInfo.ip}</span> <br />
                            <span> Your City {userInfo.city}</span>
                        </ReactTooltip>
                    </> :
                        <>
                            <img data-for='anonymous' data-tip className='w-8 h-8 mt-2 cursor-pointer' src='./anonymous-mask.svg' alt="anonymousMask" />
                            <ReactTooltip
                                id='anonymous'
                                effect='solid'
                            >
                                You anonymous
                            </ReactTooltip>
                        </>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;