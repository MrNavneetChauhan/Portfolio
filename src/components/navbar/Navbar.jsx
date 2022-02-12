import "./Navbar.scss"

// icons imported //
import {Person,Mail} from "@material-ui/icons"
import { useContext } from "react"
import { NavContextApi } from "../contextApi/navContextApi"

export const Navbar = ()=>{
const {active,handleActiveState} = useContext(NavContextApi)
    return (
        <div className= {"navbar " + (active && "active")}  id="navbar">
            <div className="wrapper">
                <div className="left">
                <a href="#intro" className="logo">web-developer.</a> 
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+918219373214</span>
                </div>

                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>navneetchauhanfswd@gmail.com</span>
                </div>
                </div>
                <div className="right">
                <div onClick={()=>handleActiveState(active)} className="menu">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                </div>
            </div>
        </div>
    )
}