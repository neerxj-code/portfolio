
import Navbar from './Navbar'
import { ArrowUpRight } from 'lucide-react';
import character from "../assets/character.png";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const Hero = () => {

  return (
    <>
    <main 
    id="hero"
    className='hero-section'>

      {/* <div className='orange-shape-one'></div>
      <div className='orange-shape-two'></div>
      <div className='orange-glow'></div> */}
      
      <div className='white-screen'>
        <div className='availability'>
          <div className='available-label'>
            <span>AVAILABLE FOR</span>
            <span className='available-dot'></span>
          </div>
          <h2 className='availability-title'>
            Freelance <br /> Projects
            </h2>
        </div>
      </div>

      <Navbar />

      <section className='hero-content'>

        <div className='left-content'>
          <h1 className='create-title'>Frontend<br /> Developer</h1>
          <p className='hero-description'>
            Frontend experiences
            <br />
            Crafted with creativity.
          </p>
               
               <button className='hero-button'>
                <a href='/'>LET'S TALK</a>
                <span className='arrow'><ArrowUpRight size={30}/></span>
               </button>
        
                
                  <img 
                src={character}
                alt='Loading...' 
                className='character'></img>
                

        

        </div>
      </section>
    </main>

    </>
  )
}

export default Hero