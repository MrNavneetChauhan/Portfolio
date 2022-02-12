import { useContext } from "react"
import { NavContextApi } from "../contextApi/navContextApi"

export const List = ({id,text})=>{
    const {active,handleActiveState} = useContext(NavContextApi)
    return (
        <li onClick={()=>(handleActiveState(active))}>
            <a href={id}>{text}</a>
        </li>
    )
}