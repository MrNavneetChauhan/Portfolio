import {KeyboardArrowDown,Instagram,GitHub,LinkedIn,Email,Phone} from '@material-ui/icons';
import { useEffect, useRef } from 'react';
import {init} from 'ityped';

import "./Intro.scss"
export const Intro = ()=>{
    const textRef = useRef()
    useEffect(()=>{
init(textRef.current,{
    showCursor:true,
    backDelay:1500,
    backSpeed:60,
    cursorChar:"|",
    strings:[" Full Stack Web Developer"," MERN Stack Web Developer"]
})
    },[])
    return (
        <div className="intro" id="intro">
                <div className="heading">
                    <h1>HI, I am <span>Navneet Chauhan</span></h1>
                    <h3 > I am a <span ref={textRef} ></span></h3>
                    <div><p>A passionate Full stack web developer  love to build Web applications with javascript/ReactJs / NodeJs / MongoDb and someother cool libraries and frameworks.</p>
                    </div>

                    <div className='links'>
                    <GitHub/>
                    <LinkedIn/>
                    <Email/>
                    <Instagram/>
                    <Phone/>
                    </div>

                    <div className='about'>
                    <h2>ABOUT <span>ME</span></h2>
                    </div>


                    <div className='profileDetails'>
                    <div>
                        <img width="100%" height="97%" src="assets/navneet.jpg" alt="" />
                    </div>
                    <div>
                        <p>Hi Everyone, I am <span>Navneet Chauhan</span>  from <span>Himachal Pradesh </span> . I have completed my graduation in B.Tech(Mechanical Engineering) from Indo Global Group Of Colleges,Punjab</p>

                        <p>Apart from coding, some other activites that i love to do</p>

                        <ul>
                            <li>Playing Chess</li>
                            <li>Solving Problems</li>
                            <li>Physical Fitness</li>

                        </ul>
                    </div>
                    </div>
                    
            </div>




        </div>
    )
}