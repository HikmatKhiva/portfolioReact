import React, { useContext } from 'react'
import { NavigationsDot } from '../components/export'
import SocialLink from '../components/SocialLink/SocialLink'
import { ThemeContext } from '../context/themeContext'

const AppWrap = (Component, idName, classNames) => function HOC() {
    const { theme } = useContext(ThemeContext)
    
    return (
        <div className={`${theme.isActive ? theme.light + ' text-gray-900' : theme.dark + ' text-white'}`} id={idName}>
            <div className="wrapper pt-16 md:pl-4 flex relative overflow-hidden">
                <SocialLink />
                <Component />
                <NavigationsDot idName={idName} />
            </div>
        </div>
    )
}

export default AppWrap