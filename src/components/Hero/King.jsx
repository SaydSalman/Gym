import React from 'react'
import "./King.css"
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
const King = () => {
    const transition = {type:'spring',duration:3}
    return (
        <div className='hero' id='home'>
        <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/*the best ad*/}
                <div className="the-best-ad">
                    <motion.div initial={{left:'238px'}} whileInView={{left:'9px'}} transition={{...transition,type:'tween'}}>
                        
                    </motion.div>
                    <span>The Best Fitness Club in the Town</span>
                </div>
                {/* {hero heading} */}
                <div className="hero-text">
                    <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                    </div>
                    <div>
                    <span>Ideal Body</span>
                    </div>
                    <div><span>
                    In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span></div>
                </div>
                {/* {figures} */}
                <div className="figures">
                    <div>
                    <span>
                        <CountUp end={140} start={100} delay={4} prefix='+'/>
                    </span>
                    
                    <span>Expert Coaches</span>
                    </div>
                    <div>
                    <CountUp end={978} start={800} delay={'3'} prefix='+'/>
                    <span>Members Joined</span>
                    </div>
                    <div>
                    <CountUp end={50} start={0} delay={4} prefix='+'/>
                    <span>Fitness Programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                    
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart rate</span>
                    <span>116 bpm</span>
                </div>
                {/* {hero-images} */}
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />
                {/* {calories} */}
                <motion.div initial={{right:'37rem'}} whileInView={{right:'28rem'}} transition={transition} className='calories'>
                <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
                <div className="calories">
                    
                </div>
            </div>
        </div>
    )
}

export default King
