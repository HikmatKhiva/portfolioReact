import { createContext, useState } from "react";

export const UserInfoContext = createContext()

export const UserInfoContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([])
    return <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserInfoContext.Provider>
}