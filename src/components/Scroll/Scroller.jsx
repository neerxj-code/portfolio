import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Scroller.css";

gsap.registerPlugin(ScrollTrigger);





export default function Test() {
  const appRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(5);
  const [activeSection, setActiveSection] = useState(0);

  /*
   ============================================
   GSAP ANIMATIONS
   ============================================
  */

  useEffect(() => {
    const ctx = gsap.context(() => {


      /*
       ------------------------------
       REFRESH
      ------------------------------
      */

      ScrollTrigger.refresh();

    }, appRef);

    return () => ctx.revert();

  }, []);


  /*
   ============================================
   SECTION TRACKING
   ============================================
  */

  useEffect(() => {

    const sections = document.querySelectorAll(
      "section[data-section]"
    );

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(
              Number(
                entry.target.getAttribute(
                  "data-section"
                )
              )
            );

          }

        });

      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();

  }, []);


  /*
   ============================================
   NAVIGATION
   ============================================
  */

  const scrollTo = (id) => {

    setMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };


  /*
   ============================================
   RENDER
   ============================================
  */

  return (
    <main
      className="site"
      ref={appRef}
    >


      <div className="progress">

        <span
          style={{
            height: `${
              ((activeSection + 1) / 5) *
              100
            }%`,
          }}
        />

      </div>



      

    </main>
  );
}