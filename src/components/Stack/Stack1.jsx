import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Stack1.css';

gsap.registerPlugin(ScrollTrigger);

const frontend = [
    {
    name: "HTML",
    icon: "https://cdn.simpleicons.org/html5",
    className: "html",
  },
   {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css",
    className: "css",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
    // className: "js", 
  },

  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss",
    className: "tailwind",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
    className: "react",
  },
    {
    name: "GSAP",
    icon: "https://cdn.simpleicons.org/GSAP",
    className: "react",
  },
    // {
  //   name: "Next.Js",
  //   icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
  //   className: "next",
  // },
  // {
  //   name: "Redux",
  //   icon: "https://cdn.simpleicons.org/redux",
  //   className: "redux",
  // },

  // {
  //   name: "GSAP",
  //   icon: "https://cdn.simpleicons.org/greensock",
  //   className: "gsap",
  // },
  // {
  //   name: "Framer Motion",
  //   icon: "https://cdn.simpleicons.org/framer",
  //   className: "framer",
  // },
  // {
  //   name: "Sass",
  //   icon: "https://cdn.simpleicons.org/sass",
  //   className: "sass",
  // },
  // {
  //   name: "Bootstrap",
  //   icon: "https://cdn.simpleicons.org/bootstrap",
  //   className: "bootstrap",
  // },
];

const learning = [

  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript",
    // className: "ts",
  },

      {
    name: "NEXT.JS",
    icon: "https://cdn.simpleicons.org/next.js",
    className: "nextjs",
  },
  //       {
  //   name: "Nest.Js",
  //   icon: "https://cdn.simpleicons.org/nestjs",
  //   className: "tailwind",
  // },

     // {
  //   name: "Node.Js",
  //   icon: "https://cdn.simpleicons.org/nodedotjs",
  //   className: "node",
  // },
  {
    name: "Framer Motion",
    icon: "https://cdn.simpleicons.org/framer",
    className: "nest",
  },
  // {
  //   name: "Express.Js",
  //   icon: "https://cdn.simpleicons.org/express/ffffff",
  //   className: "express",
  // },
];

const developer = [
     {
    name: "GIT",
    icon: "https://cdn.simpleicons.org/git",
    className: "mysql",
  },
    {
    name: "GITHUB",
    icon: "https://cdn.simpleicons.org/github",
    className: "nextjs",
  },
    {
    name: "VITE",
    icon: "https://cdn.simpleicons.org/vite",
    className: "mysql",
  },
     {
    name: "FIGMA",
    icon: "https://cdn.simpleicons.org/figma",
    className: "mysql",
  },
   
   {
    name: "NETLIFY",
    icon: "https://cdn.simpleicons.org/netlify",
    className: "mysql",
  },
   
  // {
  //   name: "MySQL",
  //   icon: "https://cdn.simpleicons.org/mysql",
  //   className: "mysql",
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: "https://cdn.simpleicons.org/postgresql",
  //   className: "postgres",
  // },
  // {
  //   name: "MongoDB",
  //   icon: "https://cdn.simpleicons.org/mongodb",
  //   className: "mongo",
  // },
  // {
  //   name: "Prisma",
  //   icon: "https://cdn.simpleicons.org/prisma/ffffff",
  //   className: "prisma",
  // },
];

function TechItem({ item }) {
    return (
        <div className='tech-item'>
            <div className={`tech-icon ${item.className || ""}`}>
                <img src={item.icon} alt='' />
            </div>

            <span>{item.name}</span>
        </div>
    );
}

function StackCategory({ title, items }) {
    return (
        <div className='stack-category'>
            <div className='category-title'>
                {title}
            </div>

            <div className='tech-list'>
                {items.map((item) => (
                    <TechItem key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
}

const Stack1 = () => {

  const stackRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      // Section heading
      gsap.from(".stack-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stack-page",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Categories
      gsap.from(".stack-category", {
        y: 70,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Individual technologies
      gsap.from(".tech-item", {
        y: 35,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".tech-list",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

    }, stackRef);

    return () => ctx.revert();

  }, []);

  return (
    <main 
    ref={stackRef}
    id='stack' 
    className='stack-page'>
        <section className='stack-container'>
            <div className='stack-heading'>
                <span className='heading-symbol'>✣</span>

                <span>MY STACK</span>
            </div>

            <StackCategory
            title='FRONTEND'
            items={frontend}
            />

            <StackCategory
            title='CURRENTLY EXPLORING/LEARNING'
            items={learning}
            />

            <StackCategory
            title='DEVELOPER TOOLS'
            items={developer}
            />

        </section>
    </main>
  )
}

export default Stack1