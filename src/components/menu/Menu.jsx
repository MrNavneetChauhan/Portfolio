import { useContext, useState } from "react"
import { NavContextApi } from "../contextApi/navContextApi"
import "./Menu.scss"
import { List } from "../list/list"

export const Menu = ()=>{
    const {active} = useContext(NavContextApi)


    let obj = [{id:"#intro",text:"Home"},{id:"#techstack",text:"Tech-Stacks"},{id:"#works",text:"Projects"},{id:"#contacts",text:"Contacts"}]

    return (
        <div className={"Menu " + (active && "active")}>
            <ul>
            {obj.map((item)=>{
               return  <List key={Date.now} {...item}/>
            })}
            </ul>
        </div>
    )
}