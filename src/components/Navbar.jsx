import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef([]);

  const scrollTo = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth"});
      }
    }, 350);
  };

    const navItems = [
    { label: "Home", id: "hero", dotColor: "bg-[#00ff66]" },
    { label: "About Me", id: "about", dotColor: "bg-blue-500" },
    { label: "My Stack", id: "stack", dotColor: "bg-amber-400" },
    { label: "Experience", id: "journey", dotColor: "bg-teal-400" },
    { label: "Projects", id: "projects", dotColor: "bg-purple-500" },
    { label: "Contact", id: "contact", dotColor: "bg-pink-500" },
  ];

  return (
    <div>
      <header className='navbar'>

            <a href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}

            className='logo'>
            <span>Neeraj</span>
            </a>
           
        
        <div className='nav-right'>
          <nav className='nav-links'>
            <a className='nav-link' href=''>About Me</a>
            <a className='nav-link' href=''>Stack</a>
            <a className='nav-link' href=''>Projects</a>
            <a className='nav-link' href=''>Contact</a>

                        <button
            className={`menu-button ${
              menuOpen ? "open" :  ""
            }`}
            aria-label='Open menu'
            onClick={() => 
              setMenuOpen(!menuOpen)
            }
            >
              <span className='menu-lines'>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

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
          X
        </button>
              <div className="menu-content">
                <div>
                  <span className='menu-label'>
                    SOCIAL
                    </span>

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

                <div>
                  <span className='menu-label'>
                    MENU
                  </span>

                  
                  <button
                  onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
                  >
                    <i className='yellow' />
                    Home
                  </button>

                  <button
                  onClick={(e) => {
              e.preventDefault();
              scrollTo("about");
            }}
                  >
                    <i className='blue' />
                    About Me
                  </button>

                  <button
                  onClick={(e) => {
              e.preventDefault();
              scrollTo("stack");
            }}
                  >
                    <i className='green' />
                    Stack
                  </button>

                  <button
                  onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
                  >
                    <i className='purple' />
                    Projects
                  </button>

                  <button
                  onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
                  >
                    <i className='red' />
                    Contact
                  </button>

                </div>

              </div>

              <div className='menu-contact'>

                <span>
                  GET IN TOUCH
                </span>

                <a href="mailto:neerajjaiswal989@gmail.com">
                  neerajjaiswal989@gmail.com
                </a>

              </div>

            </div>

          </nav>


        </div>
      </header>
    </div>
  )
}

export default Navbar
