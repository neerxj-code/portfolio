import React from 'react'
import Navbar from './Navbar'
import { ArrowUpRight } from 'lucide-react';



const Hero = () => {
  return (
    <>
    <main className='hero-section'>

      <div className='orange-shape-one'></div>
      <div className='orange-shape-two'></div>
      <div className='orange-glow'></div>
      
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
                <span>VIEW WORK</span>
                <span className='arrow'><ArrowUpRight size={30}/></span>
               </button>
        
        <img src='\src\assets\character.png' alt='Loading...' className='character'></img>

        

        </div>
      </section>
    </main>

    </>
  )
}

export default Hero