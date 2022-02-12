import "./Techstack.scss";
import { TechstackList } from "../techstackList/TechstackList";
import { useEffect, useState } from "react";
import {Frontend, Backend,Other} from "../../data"



export const Techstack = () => {
  const [selected,setSelected] = useState("frontend")
  const [data,setData] = useState([])
  const list = [
    {
      id:"frontend",
      title:"Frontend"
    },
    {
      id:"backend",
      title:"Backend"
    },
    {
      id:"other",
      title:"Other"
    }
  ]


  useEffect(()=>{

    switch (selected) {
      case "frontend":setData(Frontend);
        break;
        case"backend":setData(Backend);
        break;
        case "other":setData(Other);
        break;
      default:setData(Frontend);
    }

  },[selected])


  return (
    <div className="techstack" id="techstack">
      <h1>Tech-Stacks</h1>
      <ul>
        {list.map((item)=>{
          return <TechstackList {...item} active={selected === item.id}
          setSelected={setSelected}
          />
        })}
      </ul>
      <div className="container">
        {data.map((item)=>{
          return (<div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>)
        })}
      </div>
    </div>
  );
};
