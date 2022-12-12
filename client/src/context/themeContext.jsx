import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isActive: false,
        dark: 'bg-gray-700',
        light: 'bg-gray-200'
    })
    const value = { theme, setTheme };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}