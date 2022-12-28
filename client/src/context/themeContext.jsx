import { useState, createContext } from 'react';
export const ThemeContext = createContext()
/* eslint-disable react/prop-types */
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isActive: false,
        dark: 'bg-gray-700',
        light: 'bg-gray-200'
    })

    const handleChangeTheme = () => { setTheme((prev) => ({ ...prev, isActive: !theme.isActive })) }
    const value = { theme, handleChangeTheme };
    /* eslint-disable react/react-in-jsx-scope */
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}