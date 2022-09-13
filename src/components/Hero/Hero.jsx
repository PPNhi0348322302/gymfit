import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
// motion tạo chuyển động
import {motion} from 'framer-motion'
//Tăng số
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition ={type:'spring', duration:3}
    const mobile = window.innerWidth<768 ? true : false
  return (
    <div className="hero" id="home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
                <motion.div
                    initial ={{left:mobile?'165px':'238px'}}
                    whileInView = {{left:'8px'}}
                    transition = {{...transition, type:'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div className="text">
                    <span >In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            <div className="figures">
                <div className="figures-option">
                    <span>
                        <NumberCounter 
                            start = {100}
                            end = {140}
                            delay='4'
                            preFix ='+'
                        />
                    </span>
                    <span>EXPERT COACHES</span>
                </div>
                <div className="figures-option">
                    <span>
                        <NumberCounter 
                            start = {800}
                            end = {978}
                            delay='4'
                            preFix ='+'
                        />
                    </span>
                    <span>MEMBERS JOINED</span>
                </div>
                <div className="figures-option">
                    <span>
                        <NumberCounter 
                            start = {25}
                            end = {50}
                            delay='4'
                            preFix ='+'
                        />
                    </span>
                    <span>FITNESS PROGRAMS</span>
                </div>
            </div>

            <div className="hero-button">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-sub">Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>
            <motion.div 
                initial = {{right:'-1rem'}}
                whileInView = {{right:'4rem'}}
                transition = {transition}
                className="heart-rate"
            >
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img 
                src={hero_img} alt="" 
                className="hero-img"
            />
            <motion.img 
                src={hero_img_back} alt="" 
                className="hero-img-back"
                initial = {{right:'11rem'}}
                whileInView = {{right:'20rem'}}
                transition = {transition}
            />

            <motion.div 
                initial = {{right:'37rem'}}
                whileInView = {{right:'28rem'}}
                transition = {transition}
                className="calories"
            >
                <img src={Calories} alt="" />
                <div>
                  <span>Calories burned</span>
                  <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
