import { createContext, useState } from "react";

export const NavContextApi = createContext();

export const NavContextApiProvider = ({children})=>{
    const [active,setActive] = useState(false)
    const handleActiveState = (value)=>{
        setActive(!value)
    }
    return <NavContextApi.Provider value = {{active,handleActiveState}} >{children}</NavContextApi.Provider>
}