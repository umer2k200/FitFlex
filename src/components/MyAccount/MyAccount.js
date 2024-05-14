import React, { useState } from 'react';
import './MyAccount.css'
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';
function MyAccount() {
  const transition = {type: 'spring', duration: 3}
  return (
    <div>
      <div className='hero' id='home'>
            <div className="blur blur-h"></div>
            <div className='left-h'>
                <Header />
            </div>
            <div className="right-h">
                <button className='btn btn-j'  >Join Now</button>
                <button className='btn btn-m' >Already a member?</button>
                <motion.div className="heart-rate"
                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={transition}
                >
                    <img src={Heart} alt="Heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={hero_image} alt="Hero" className="hero-image" />
                <motion.img src={hero_image_back} alt="Hero" className="hero-image-back" 
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition}
                />
                
                {/* Calories */}
                <motion.div className="calories"
                    initial={{right:'37rem'}}
                    whileInView={{right:'28rem'}}
                    transition={transition}
                >
                    <img src={Calories} alt="Calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>950 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default MyAccount
