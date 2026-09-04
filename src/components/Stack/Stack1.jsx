import React from 'react'
import './Stack1.css';

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
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript",
    // className: "ts",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
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
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss",
    className: "tailwind",
  },
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

const backend = [
     // {
  //   name: "Node.Js",
  //   icon: "https://cdn.simpleicons.org/nodedotjs",
  //   className: "node",
  // },
  // {
  //   name: "NestJS",
  //   icon: "https://cdn.simpleicons.org/nestjs",
  //   className: "nest",
  // },
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
    className: "github",
  },
    {
    name: "VITE",
    icon: "https://cdn.simpleicons.org/vite",
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
            <div className={`tech-icon ${item.className}`}>
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
  return (
    <main className='stack-page'>
        <section className='stack-container'>
            <div className='stack-heading'>
                <span className='heading-symbol'>✣</span>

                <span>MY STACK</span>
            </div>

            <StackCategory
            title='FRONTEND'
            items={frontend}
            />

            {/* <StackCategory
            title='BACKEND'
            items={backend}
            /> */}

            <StackCategory
            title='DEVELOPER TOOLS'
            items={developer}
            />

        </section>
    </main>
  )
}

export default Stack1
