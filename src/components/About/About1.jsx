import React from 'react'
import './About1.css';

const About1 = () => {
  return (
    <main 
    id="about"
    className='about-page'>
        {/* <div className='stars' aria-hidden='true'>
            {Array.from({length: 84}).map((_, index) => (
                <span className='star' key={index}></span>
            ))}
        </div> */}


        <section className='about-section1'>
            <div className='about-statement'>
                <p>
                I build digital experiences that are <span className="text-[#00ff66] font-normal">fast</span>, <span className="text-white font-normal">responsive</span>, and designed to feel as good as they look.
                </p>
            </div>

            <div className='about-label'>PHILOSOPHY & APPROACH</div>

            <div className='about-grid1'>
                <div className='about-title1'>
                    <h1> HI, I'M <span className="text-[#00ff66]">NEERAJ</span>.</h1>
                </div>

                <div className='about-text1'>
                    <p>
                        I'm a frontend developer focused on creating intuitive, high-performance, and visually engaging web experiences with React, JavaScript, and Tailwind CSS.
                    </p>

                    <p>
              My philosophy prioritizes clean component architecture, scalable design systems, smooth motion design, and responsive layouts that look exceptional across all devices.
                   </p>
                </div>
            </div>
        </section>
    </main>
  );
}

export default About1
