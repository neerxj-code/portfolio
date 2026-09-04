import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);



const Contact = () => {
  return (
    <div className='site1'>
      <section
        id="contact"
        data-section="5"
        className="contact section1"
      >

        <div className="contact-inner">

          <span className="contact-question">
            Have a project in mind?
          </span>


          <a
            href="mailto:tasmiriolslam@gmail.com"
            className="contact-email"
          >
            neerajjaiswal989@gmail.com
          </a>


          <p>
          built by Neeraj
          </p>


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
