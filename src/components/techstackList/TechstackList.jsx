import "./TechstackList.scss";

export const TechstackList = ({id,title,active,setSelected})=>{


    return (

        <li className={active ? "techstacklist active" : "techstacklist"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
