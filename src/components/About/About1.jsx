import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './About1.css';

gsap.registerPlugin(ScrollTrigger);

const About1 = () => {

     const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main statement
      gsap.from(".about-reveal", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".about-section1",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // About heading
      gsap.from(".about-title1", {
        y: 70,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid1",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // About paragraphs
      gsap.from(".about-text-reveal", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-text1",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
    ref={aboutRef}
    id="about"
    className='about-page'>

        <section className='about-section1'>
            <div className='about-statement'>
                <p className="about-reveal">
            I build digital experiences that are{" "}
            <span className="text-[#00ff66] font-normal">
              fast
            </span>
            ,{" "}
            <span className="text-white font-normal">
              responsive
            </span>
            , and designed to feel as good as they look.
          </p>
                {/* <p>
                I build digital experiences that are <span className="text-[#00ff66] font-normal">fast</span>, <span className="text-white font-normal">responsive</span>, and designed to feel as good as they look.
                </p> */}
            </div>

            <div className='about-label about-reveal'>PHILOSOPHY & APPROACH</div>

            <div className='about-grid1'>
                <div className='about-title1'>
                    <h1>
              HI, I'M{" "}
              <span className="text-[#00ff66]">
                NEERAJ
              </span>
              .
            </h1>
                    {/* <h1> HI, I'M <span className="text-[#00ff66]">NEERAJ</span>.</h1> */}
                </div>

                <div className='about-text1'>
                    <p className="about-text-reveal">
              I'm a frontend developer focused on creating
              intuitive, high-performance, and visually
              engaging web experiences with React,
              JavaScript, and Tailwind CSS.
            </p>

            <p className="about-text-reveal">
              My philosophy prioritizes clean component
              architecture, scalable design systems,
              smooth motion design, and responsive layouts
              that look exceptional across all devices.
            </p>
                    {/* <p>
                        I'm a frontend developer focused on creating intuitive, high-performance, and visually engaging web experiences with React, JavaScript, and Tailwind CSS.
                    </p>

                    <p>
              My philosophy prioritizes clean component architecture, scalable design systems, smooth motion design, and responsive layouts that look exceptional across all devices.
                   </p> */}
                </div>
            </div>
        </section>
    </main>
  );
}

export default About1