
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect, useRef } from "react";

const Contact = () => {

   const contactRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".contact-reveal", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

    }, contactRef);

    return () => ctx.revert();

  }, []);

  return (
    <div 
    ref={contactRef}
    id="contact"
    className='site1'>
      <section
        id="contact"
        data-section="5"
        className="contact section1"
      >

        <div className="contact-inner">

          <span className="contact-question contact-reveal">
            Have a project in mind?
          </span>


          <a
            href="mailto:neerajjaiswal989@gmail.com"
            className="contact-email contact-reveal"
          >
            neerajjaiswal989@gmail.com
          </a>


          <p className="contact-reveal">
          Follow me!
          </p>

          <div className='contact-social contact-reveal'>

                    <a 
                    href="https://github.com/neerxj-code"
                  target="_blank"
                  rel="noreferrer"
                    ><img className='tech-icon1 bg-white rounded-full' src="https://cdn.simpleicons.org/github"></img>Github
                    </a>

                    <a 
                    href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer">
                    <img className='tech-icon1' src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"></img>
                      Linkedin
                    </a>

                    <a 
                    href="https://x.com/_neeraj_jaiswal"
                  target="_blank"
                  rel="noreferrer">
                    <img className='tech-icon1' src="https://cdn.simpleicons.org/x"></img>
                    X/Twitter
                  </a>

                    <a 
                    href="https://www.instagram.com/neerxj_jaiswal/"
                  target="_blank"
                  rel="noreferrer">
                    <img className='tech-icon1' src="https://cdn.simpleicons.org/instagram"></img>
                      Instagram
                    </a>
          </div>


          {/* <div className="contact-stats">
            <span>☆ 224</span>
            <span>⌘ 56</span>
          </div> */}

        </div>

      </section>
    </div>
  )
}

export default Contact
