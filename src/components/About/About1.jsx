import React from 'react'
import './About1.css';

const About1 = () => {
  return (
    <main className='about-page'>
        {/* <div className='stars' aria-hidden='true'>
            {Array.from({length: 84}).map((_, index) => (
                <span className='star' key={index}></span>
            ))}
        </div> */}


        <section className='about-section1'>
            <div className='about-statement'>
                <p>
                I believe in a user centered design approach, ensuring that every
                project I work on is tailored to meet the specific needs of its
                users.
                </p>
            </div>

            <div className='about-label'>This is me.</div>

            <div className='about-grid1'>
                <div className='about-title1'>
                    <h1>Hi, I'm Neeraj.</h1>
                </div>

                <div className='about-text1'>
                    <p>
                        I'm a frontend web developer dedicated to turning ideas into
                        creative solutions. I specialize in creating seamless and
                        intuitive user experiences.
                    </p>

                    <p>
              My approach focuses on creating scalable, high-performing
              solutions tailored to both user needs and business objectives.
              By prioritizing performance, accessibility, and responsiveness,
              I strive to deliver experiences that not only engage users but
              also drive tangible results.
                   </p>
                </div>
            </div>
        </section>
    </main>
  );
}

export default About1
