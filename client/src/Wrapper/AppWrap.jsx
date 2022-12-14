import React, { useContext } from 'react'
import { NavigationsDot } from '../components/export'
import SocialLink from '../components/SocialLink/SocialLink'
import { ThemeContext } from '../context/themeContext'

const AppWrap = (Component, idName,className ) => function HOC() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`pt-16 ${theme.isActive ? theme.light + ' text-gray-900' : theme.dark + ' text-white'}`} id={idName}>
            <div style={{ minHeight: `calc(100vh - 64px)` }} className={`wrapper md:pl-4 md:flex-row flex-col-reverse  flex relative ${className}`}>
                <SocialLink />
                <Component />
                <NavigationsDot idName={idName} />
            </div>
        </div>
    )
}

export default AppWrap