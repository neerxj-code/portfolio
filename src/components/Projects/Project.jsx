import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Project.css";

gsap.registerPlugin(ScrollTrigger);



const projects = [
  {
    number: "01",
    title: "Electro EV",
    tech: "Next.js  •  Payload CMS  •  Tailwind CSS",
  },
  {
    number: "02",
    title: "Epikcart",
    tech: "React  •  Redux  •  React i18n",
  },
  {
    number: "03",
    title: "Resume Roaster",
    tech: "GPT-4  •  Next.js  •  PostgreSQL",
  },
  {
    number: "04",
    title: "Real Estate",
    tech: "React.js  •  Redux  •  Tailwind CSS",
  },
  {
    number: "05",
    title: "Consulting Finance",
    tech: "HTML  •  CSS & SCSS  •  Javascript",
  },
  {
    number: "06",
    title: "devLinks",
    tech: "Next.js  •  Formik  •  Drag & Drop",
  },
];


function SectionTitle({ children }) {
  return (
    <div className="section-title">
      <span className="section-symbol">✣</span>
      <span>{children}</span>
    </div>
  );
}

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
       PROJECTS
      ------------------------------
      */

      gsap.from(".projects .section-title", {
        y: 50,
        opacity: 0,

        duration: 0.8,

        scrollTrigger: {
          trigger: ".projects",
          start: "top 75%",
        },
      });


      gsap.from(".project", {
        y: 60,
        opacity: 0,

        duration: 0.7,

        stagger: 0.12,

        scrollTrigger: {
          trigger: ".project-list",
          start: "top 75%",
        },
      });


      gsap.from(".project-preview", {
        x: 100,
        opacity: 0,

        duration: 1,

        scrollTrigger: {
          trigger: ".projects-layout",
          start: "top 75%",
        },
      });


      /*
       ------------------------------
       CONTACT
      ------------------------------
      */

      gsap.from(".contact-inner", {
        y: 100,
        opacity: 0,

        duration: 1,

        scrollTrigger: {
          trigger: ".contact",
          start: "top 75%",
        },
      });


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
    id="projects"
      className="site"
      ref={appRef}
    >

      


      


      

      {/* Progress */}

      {/* <div className="progress">

        <span
          style={{
            height: `${
              ((activeSection + 1) / 5) *
              100
            }%`,
          }}
        />

      </div> */}



      

      {/* =========================
          PROJECTS
      ========================== */}

      <section
        id="projects"
        data-section="4"
        className="projects section"
      >

        {/* <SectionTitle>
          SELECTED PROJECTS
        </SectionTitle> */}

        <div className='stack-heading1'>
                <span className='heading-symbol1'>✣</span>

                <span>PROJECTS</span>
            </div>


        <div className="projects-layout">

          <div className="project-list">

            {projects.map(
              (project, index) => (

                <button
                  key={project.title}

                  className={`project ${
                    activeProject === index
                      ? "active"
                      : ""
                  }`}

                  onMouseEnter={() =>
                    setActiveProject(index)
                  }

                  onClick={() =>
                    setActiveProject(index)
                  }
                >

                  <div className="project-number">
                    .{project.number}
                  </div>


                  <div className="project-information">

                    <h2>

                      {project.title}

                      {activeProject === index && (
                        <span className="external">
                          ↗
                        </span>
                      )}

                    </h2>

                    <span>
                      {project.tech}
                    </span>

                  </div>

                </button>

              )
            )}

          </div>

{/* 
          <div className="project-preview">

            <div
              className={`preview-card preview-${activeProject}`}
              key={activeProject}
            >

              <div className="preview-browser">

                <div className="browser-top">
                  <span />
                  <span />
                  <span />
                </div>


                <div className="preview-content">

                  {activeProject === 5 ? (

                    <>
                      <div className="preview-sidebar">
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>

                      <div className="preview-form">

                        <h4>
                          devLinks
                        </h4>

                        <div />
                        <div />
                        <div />
                        <div />
                        <div />

                      </div>
                    </>

                  ) : (

                    <div className="fake-project">

                      {
                        projects[
                          activeProject
                        ].title
                      }

                    </div>

                  )}

                </div>

              </div>

            </div>

          </div> */}

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}

      

    </main>
  );
}