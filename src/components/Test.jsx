import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Test.css";

gsap.registerPlugin(ScrollTrigger);

const stack = {
  frontend: [
    ["JavaScript", "js"],
    ["TypeScript", "ts"],
    ["React", "react"],
    ["Next.Js", "next"],
    ["Redux", "redux"],
    ["Tailwind CSS", "tailwind"],
    ["GSAP", "gsap"],
    ["Framer Motion", "framer"],
    ["Sass", "sass"],
    ["Bootstrap", "bootstrap"],
  ],

  backend: [
    ["Node.Js", "node"],
    ["NestJS", "nest"],
    ["Express.Js", "express"],
  ],

  database: [
    ["MySQL", "mysql"],
    ["PostgreSQL", "postgres"],
    ["MongoDB", "mongo"],
    ["Prisma", "prisma"],
  ],
};

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

const stars = Array.from({ length: 55 });

function TechIcon({ type }) {
  const icons = {
    js: "JS",
    ts: "TS",
    react: "⚛",
    next: "N",
    redux: "⌘",
    tailwind: "≋",
    gsap: "GS",
    framer: "M",
    sass: "S",
    bootstrap: "B",
    node: "⬡",
    nest: "◆",
    express: "EX",
    mysql: "🐬",
    postgres: "🐘",
    mongo: "◈",
    prisma: "△",
  };

  return (
    <span className={`tech-icon ${type}`}>
      {icons[type]}
    </span>
  );
}

function StackItem({ name, type }) {
  return (
    <div className="tech-item">
      <TechIcon type={type} />
      <span>{name}</span>
    </div>
  );
}

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
       HERO INTRO
      ------------------------------
      */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .from(".hero-heading span", {
          y: 100,
          opacity: 0,
          duration: 1.2,
        })
        .from(
          ".hero-heading strong",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.9"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          ".talk-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".availability",
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".hero-name",
          {
            scale: 1.25,
            opacity: 0,
            duration: 1.5,
          },
          "-=1"
        )
        .from(
          ".hero-stats",
          {
            x: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=1"
        );


      /*
       ------------------------------
       HERO PARALLAX
      ------------------------------
      */

      gsap.to(".hero-name", {
        x: 180,
        yPercent: -30,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",

          scrub: 1.5,
        },
      });


      gsap.to(".hero-content", {
        y: -100,
        opacity: 0,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "70% top",

          scrub: 1,
        },
      });


      /*
       ------------------------------
       ABOUT
      ------------------------------
      */

      gsap.from(".about-intro", {
        y: 100,
        opacity: 0,

        duration: 1.2,

        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
        },
      });


      gsap.from(".about-label", {
        scaleX: 0,
        transformOrigin: "left",

        duration: 1,

        scrollTrigger: {
          trigger: ".about-label",
          start: "top 85%",
        },
      });


      gsap.from(".about-grid h2", {
        x: -100,
        opacity: 0,

        duration: 1,

        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
        },
      });


      gsap.from(".about-copy p", {
        y: 40,
        opacity: 0,

        duration: 0.8,
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".about-copy",
          start: "top 80%",
        },
      });


      /*
       ------------------------------
       STACK
      ------------------------------
      */

      gsap.from(".stack .section-title", {
        y: 50,
        opacity: 0,

        duration: 0.8,

        scrollTrigger: {
          trigger: ".stack",
          start: "top 75%",
        },
      });


      gsap.utils.toArray(".stack-row").forEach((row) => {

        gsap.from(row.querySelector("h2"), {
          x: -80,
          opacity: 0,

          duration: 0.8,

          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        });


        gsap.from(row.querySelectorAll(".tech-item"), {
          y: 40,
          opacity: 0,

          duration: 0.5,

          stagger: 0.08,

          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        });

      });


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
      className="site"
      ref={appRef}
    >

      {/* Background */}

      <div className="background-stars">

        {stars.map((_, index) => (
          <span
            className="background-star"
            key={index}
          />
        ))}

      </div>


      {/* Side email */}

      <a
        href="mailto:tasmiriolslam@gmail.com"
        className="side-email"
      >
        tasmiriolslam@gmail.com
      </a>


      {/* Menu */}

      <button
        className={`menu-button ${
          menuOpen ? "open" : ""
        }`}
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        <span />
        <span />
      </button>


      {/* Menu overlay */}

      <div
        className={`menu-overlay ${
          menuOpen ? "show" : ""
        }`}
      >

        <button
          className="menu-close"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          ×
        </button>

        <div className="menu-content">

          <div>

            <span className="menu-label">
              SOCIAL
            </span>

            <a href="#github">
              Github
            </a>

            <a href="#linkedin">
              Linkedin
            </a>

            <a href="#facebook">
              Facebook
            </a>

          </div>


          <div>

            <span className="menu-label">
              MENU
            </span>

            <button
              onClick={() =>
                scrollTo("home")
              }
            >
              <i className="yellow" />
              Home
            </button>

            <button
              onClick={() =>
                scrollTo("about")
              }
            >
              <i className="blue" />
              About Me
            </button>

            <button
              onClick={() =>
                scrollTo("stack")
              }
            >
              <i className="green" />
              Experience
            </button>

            <button
              onClick={() =>
                scrollTo("projects")
              }
            >
              <i className="purple" />
              Projects
            </button>

          </div>

        </div>

        <div className="menu-contact">

          <span>
            GET IN TOUCH
          </span>

          <a href="mailto:tasmiriolslam@gmail.com">
            tasmiriolslam@gmail.com
          </a>

        </div>

      </div>


      {/* Progress */}

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


      {/* =========================
          HERO
      ========================== */}

      <section
        id="home"
        data-section="0"
        className="hero section"
      >

        <div className="hero-content">

          <div className="hero-heading">

            <span>
              FRONTEND
            </span>

            <strong>
              DEVELOPER
            </strong>

          </div>


          <p className="hero-description">

            Hi! I'm Tajmirul. A creative Frontend
            Developer with 3+ years of experience
            in building high-performance,
            scalable, and responsive web solutions.

          </p>


          <button
            className="talk-button"
            onClick={() =>
              scrollTo("contact")
            }
          >
            LET'S TALK
          </button>


          <div className="availability">

            <span />

            Available for full-time opportunities

          </div>

        </div>


        <div className="hero-name">
          TAJMIRUL
        </div>


        <div className="hero-stats">

          <div>
            <strong>3+</strong>
            <span>
              Years of Experience
            </span>
          </div>

          <div>
            <strong>7+</strong>
            <span>
              Completed Projects
            </span>
          </div>

          <div>
            <strong>10K+</strong>
            <span>
              Hours Worked
            </span>
          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}

      <section
        id="about"
        data-section="1"
        className="about section"
      >

        <div className="about-intro">

          I believe in a user centered design
          approach, ensuring that every project
          I work on is tailored to meet the
          specific needs of its users.

        </div>


        <div className="about-label">
          This is me.
        </div>


        <div className="about-grid">

          <h2>
            Hi, I'm Tajmirul.
          </h2>


          <div className="about-copy">

            <p>
              I'm a frontend web developer
              dedicated to turning ideas into
              creative solutions. I specialize
              in creating seamless and intuitive
              user experiences.
            </p>


            <p>
              My approach focuses on creating
              scalable, high-performing solutions
              tailored to both user needs and
              business objectives. By prioritizing
              performance, accessibility, and
              responsiveness, I strive to deliver
              experiences that not only engage
              users but also drive tangible results.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          STACK
      ========================== */}

      <section
        id="stack"
        data-section="2"
        className="stack section"
      >

        <SectionTitle>
          MY STACK
        </SectionTitle>


        <div className="stack-row">

          <h2>
            FRONTEND
          </h2>

          <div className="stack-items">

            {stack.frontend.map(
              ([name, type]) => (
                <StackItem
                  key={name}
                  name={name}
                  type={type}
                />
              )
            )}

          </div>

        </div>


        <div className="stack-row">

          <h2>
            BACKEND
          </h2>

          <div className="stack-items">

            {stack.backend.map(
              ([name, type]) => (
                <StackItem
                  key={name}
                  name={name}
                  type={type}
                />
              )
            )}

          </div>

        </div>


        <div className="stack-row">

          <h2>
            DATABASE
          </h2>

          <div className="stack-items">

            {stack.database.map(
              ([name, type]) => (
                <StackItem
                  key={name}
                  name={name}
                  type={type}
                />
              )
            )}

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================== */}

      <section
        id="projects"
        data-section="3"
        className="projects section"
      >

        <SectionTitle>
          SELECTED PROJECTS
        </SectionTitle>


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

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}

      <section
        id="contact"
        data-section="4"
        className="contact section"
      >

        <div className="contact-inner">

          <span className="contact-question">
            Have a project in mind?
          </span>


          <a
            href="mailto:tasmiriolslam@gmail.com"
            className="contact-email"
          >
            tasmiriolslam@gmail.com
          </a>


          <p>
            Design & built by Tajmirul Islam
          </p>


          <div className="contact-stats">
            <span>☆ 224</span>
            <span>⌘ 56</span>
          </div>

        </div>

      </section>

    </main>
  );
}