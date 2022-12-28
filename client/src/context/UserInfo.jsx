import { createContext, useState } from "react";
export const UserInfoContext = createContext()
/* eslint-disable react/prop-types */
export const UserInfoContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([])
    /* eslint-disable react/react-in-jsx-scope */
    return <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserInfoContext.Provider>
}