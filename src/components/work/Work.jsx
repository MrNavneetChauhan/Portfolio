import "./Work.scss";
import {ArrowBackIos,ArrowForwardIos} from "@material-ui/icons";
import {Data} from "../../projectData";
import { useState } from "react";
import {Visibility,GitHub} from "@material-ui/icons"


export const Work = ()=>{
    const [currentSlider,setCurrentSlider] = useState(0)

    function handleClick(nav){
        nav==="left"? setCurrentSlider(currentSlider > 0? currentSlider-1 : 2):setCurrentSlider(currentSlider < Data.length-1 ? currentSlider +1 : 0)
    }

    return (
        <div className="works" id = "works">
            <h1>Projects</h1>
            <div className="slider" style={{transform:`translateX(-${currentSlider*100}vw)`}} >
                {Data.map((item)=>{

                return (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/codinglogo.png" alt="" />
                                </div>

                                <h2>{item.title}</h2>
                                
                                <p>{item.desc}</p>
                                <div className="stacks">
                                {item.stack.map((stack)=>{
                                    return <img src={stack} alt="" />
                                })}
                                </div>
                                
                                <span>{item.workdist}</span>
                            </div>
                        </div>
                        <div className="right">
                        <img src={item.img} alt="" />
                        <div>
                            {
                            item.live === ""?"":
                            <a target="_blank" href={item.live}><Visibility/></a>
                }
                            
                            <a target="_blank" href={item.github}><GitHub/></a>
                        </div>
                        </div>
                    </div>
                </div>
                )})}

            </div>
<ArrowBackIos className="arrow left" onClick={()=>handleClick("left")} />
<ArrowForwardIos className="arrow right" onClick={()=>handleClick("right")} />
         </div>
    )
}