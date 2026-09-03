import React from "react";

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

const stars = Array.from({ length: 45 });

function TechItem({ item }) {
  return (
    <div className="tech-item">
      <div className={`tech-icon ${item.className}`}>
        <img src={item.icon} alt="" />
      </div>

      <span>{item.name}</span>
    </div>
  );
}

function StackCategory({ title, items }) {
  return (
    <div className="stack-category">
      <div className="category-title">
        {title}
      </div>

      <div className="tech-list">
        {items.map((item) => (
          <TechItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <>
      <style>{`

        /* =========================================
           STACK PAGE
        ========================================= */

        .stack-page1 {
          position: relative;
          min-height: 100vh;
          overflow: hidden;

          

          background: #202020;
          color: #eeeeee;

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }


        /* =========================================
           CONTENT CONTAINER
        ========================================= */

        .stack-container1 {
          position: relative;
          z-index: 2;

          width: min(1080px, calc(100% - 48px));

          margin: 0 auto;

          padding: 75px 0 100px;
        }


        /* =========================================
           HEADER
        ========================================= */

        .stack-heading1 {
          display: flex;
          align-items: center;

          gap: 16px;

          margin-bottom: 42px;

          color: #e5e5e5;

          font-size: 16px;
          font-weight: 400;
        }

        .heading-symbol1 {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 26px;
          height: 26px;

          font-size: 28px;
          line-height: 1;

          color: #bdbdbd;

          transform: rotate(0deg);
        }


        /* =========================================
           CATEGORY
        ========================================= */

        .stack-category1 {
          display: grid;

          grid-template-columns: 400px 1fr;

          column-gap: 75px;

          margin-bottom: 65px;
        }

        .stack-category:last-child {
          margin-bottom: 0;
        }


        /* =========================================
           CATEGORY TITLE
        ========================================= */

        .category-title1 {
          color: #a8a8a8;

          font-family:
            Impact,
            Haettenschweiler,
            "Arial Narrow Bold",
            sans-serif;

          font-size: 48px;

          font-weight: 900;

          line-height: 1;

          letter-spacing: -1px;

          text-transform: uppercase;
        }


        /* =========================================
           TECHNOLOGY LIST
        ========================================= */

        // .tech-list {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(130px, 1fr));

          column-gap: 30px;
          row-gap: 28px;
        }


        /* =========================================
           TECHNOLOGY ITEM
        ========================================= */

        // .tech-item {
          display: flex;
          align-items: center;

          gap: 13px;

          min-width: 0;

          color: #d1d1d1;

          font-size: 24px;

          font-weight: 400;

          white-space: nowrap;
        }


        /* =========================================
           ICON
        ========================================= */

        // .tech-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 40px;
          height: 40px;

          flex-shrink: 0;
        }

        .tech-icon img {
          display: block;

          width: 40px;
          height: 40px;

          object-fit: contain;
        }


        /* JavaScript */
        .tech-icon.js {
          background: #f7df1e;

          width: 40px;
          height: 40px;
        }

        .tech-icon.js img {
          width: 31px;
          height: 31px;
        }


        /* TypeScript */
        .tech-icon.ts {
          background: #087ea4;

          border-radius: 10px;
        }


        /* React */
        .tech-icon.react img {
          width: 40px;
          height: 40px;
        }


        /* Next */
        .tech-icon.next {
          border-radius: 50%;

          background: #eeeeee;
        }

        .tech-icon.next img {
          width: 30px;
          height: 30px;
        }


        /* Redux */
        .tech-icon.redux img {
          width: 40px;
          height: 40px;
        }


        /* Tailwind */
        .tech-icon.tailwind img {
          width: 42px;
        }


        /* GSAP */
        .tech-icon.gsap img {
          width: 43px;
        }


        /* Framer */
        .tech-icon.framer img {
          width: 43px;
        }


        /* Sass */
        .tech-icon.sass img {
          width: 42px;
        }


        /* Bootstrap */
        .tech-icon.bootstrap img {
          width: 40px;
        }
        


        /* =========================================
           BACKEND
        ========================================= */

        .stack-category:nth-child(2) {
          margin-top: 5px;
        }


        /* =========================================
           DATABASE
        ========================================= */

        .stack-category:nth-child(3) {
          margin-top: 3px;
        }
          


        /* =========================================
           STAR FIELD
        ========================================= */

        .stack-stars {
          position: absolute;

          inset: 0;

          z-index: 1;

          pointer-events: none;
        }

        .stack-star {
          position: absolute;

          width: 2px;
          height: 2px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.35);

          animation: stackTwinkle 4s ease-in-out infinite;
        }


        /* Random star positions */

        .stack-star:nth-child(1) {
          left: 2%;
          top: 35%;
        }

        .stack-star:nth-child(2) {
          left: 8%;
          top: 60%;
        }

        .stack-star:nth-child(3) {
          left: 13%;
          top: 43%;
        }

        .stack-star:nth-child(4) {
          left: 17%;
          top: 78%;
        }

        .stack-star:nth-child(5) {
          left: 23%;
          top: 63%;
        }

        .stack-star:nth-child(6) {
          left: 28%;
          top: 55%;
        }

        .stack-star:nth-child(7) {
          left: 33%;
          top: 72%;
        }

        .stack-star:nth-child(8) {
          left: 38%;
          top: 20%;
        }

        .stack-star:nth-child(9) {
          left: 43%;
          top: 83%;
        }

        .stack-star:nth-child(10) {
          left: 48%;
          top: 47%;
        }

        .stack-star:nth-child(11) {
          left: 53%;
          top: 88%;
        }

        .stack-star:nth-child(12) {
          left: 58%;
          top: 35%;
        }

        .stack-star:nth-child(13) {
          left: 63%;
          top: 57%;
        }

        .stack-star:nth-child(14) {
          left: 68%;
          top: 69%;
        }

        .stack-star:nth-child(15) {
          left: 73%;
          top: 42%;
        }

        .stack-star:nth-child(16) {
          left: 78%;
          top: 75%;
        }

        .stack-star:nth-child(17) {
          left: 83%;
          top: 37%;
        }

        .stack-star:nth-child(18) {
          left: 88%;
          top: 65%;
        }

        .stack-star:nth-child(19) {
          left: 93%;
          top: 52%;
        }

        .stack-star:nth-child(20) {
          left: 97%;
          top: 81%;
        }

        .stack-star:nth-child(21) {
          left: 5%;
          top: 88%;
        }

        .stack-star:nth-child(22) {
          left: 11%;
          top: 70%;
        }

        .stack-star:nth-child(23) {
          left: 19%;
          top: 51%;
        }

        .stack-star:nth-child(24) {
          left: 25%;
          top: 88%;
        }

        .stack-star:nth-child(25) {
          left: 31%;
          top: 37%;
        }

        .stack-star:nth-child(26) {
          left: 40%;
          top: 65%;
        }

        .stack-star:nth-child(27) {
          left: 46%;
          top: 29%;
        }

        .stack-star:nth-child(28) {
          left: 55%;
          top: 70%;
        }

        .stack-star:nth-child(29) {
          left: 61%;
          top: 83%;
        }

        .stack-star:nth-child(30) {
          left: 70%;
          top: 25%;
        }

        .stack-star:nth-child(31) {
          left: 76%;
          top: 88%;
        }

        .stack-star:nth-child(32) {
          left: 84%;
          top: 21%;
        }

        .stack-star:nth-child(33) {
          left: 91%;
          top: 74%;
        }

        .stack-star:nth-child(34) {
          left: 99%;
          top: 41%;
        }

        .stack-star:nth-child(35) {
          left: 15%;
          top: 18%;
        }

        .stack-star:nth-child(36) {
          left: 35%;
          top: 90%;
        }

        .stack-star:nth-child(37) {
          left: 50%;
          top: 11%;
        }

        .stack-star:nth-child(38) {
          left: 66%;
          top: 46%;
        }

        .stack-star:nth-child(39) {
          left: 81%;
          top: 57%;
        }

        .stack-star:nth-child(40) {
          left: 95%;
          top: 18%;
        }

        .stack-star:nth-child(3n) {
          animation-delay: -1s;
        }

        .stack-star:nth-child(4n) {
          animation-delay: -2s;
        }

        .stack-star:nth-child(5n) {
          width: 1px;
          height: 1px;

          animation-delay: -3s;
        }


        @keyframes stackTwinkle {
          0%,
          100% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.65;
          }
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 950px) {

          .stack-container {
            width: min(850px, calc(100% - 40px));
          }

          .stack-category {
            grid-template-columns: 280px 1fr;

            column-gap: 40px;
          }

          .category-title {
            font-size: 42px;
          }

          .tech-list {
            column-gap: 20px;
          }

          .tech-item {
            font-size: 20px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .stack-container {
            width: calc(100% - 36px);

            padding: 50px 0 70px;
          }

          .stack-heading {
            margin-bottom: 35px;

            font-size: 15px;
          }

          .stack-category {
            display: block;

            margin-bottom: 55px;
          }

          .category-title {
            margin-bottom: 28px;

            font-size: 40px;
          }

          .tech-list {
            grid-template-columns:
              repeat(2, minmax(130px, 1fr));

            gap: 25px 15px;
          }

          .tech-item {
            font-size: 18px;

            gap: 10px;
          }

          .tech-icon,
          .tech-icon img {
            width: 34px;
            height: 34px;
          }

          .tech-icon.js {
            width: 34px;
            height: 34px;
          }

          .tech-icon.js img {
            width: 27px;
            height: 27px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 420px) {

          .stack-container {
            width: calc(100% - 28px);
          }

          .category-title {
            font-size: 34px;
          }

          .tech-list {
            grid-template-columns: 1fr 1fr;
          }

          .tech-item {
            font-size: 16px;
          }

        }

      `}</style>

      <main className="stack-page">

        {/* Background stars
        <div className="stack-stars" aria-hidden="true">
          {stars.map((_, index) => (
            <span
              className="stack-star"
              key={index}
            />
          ))}
        </div> */}


        {/* Main content */}
        <section className="stack-container">

          {/* Heading */}
          <div className="stack-heading">
            <span className="heading-symbol">✣</span>

            <span>MY STACK</span>
          </div>


          {/* Frontend */}
          <StackCategory
            title="FRONTEND"
            items={frontend}
          />


          {/* Backend */}
          {/* <StackCategory
            title="BACKEND"
            items={backend}
          /> */}


          {/* Developer Tools */}
          <StackCategory
            title="DEVELOPER TOOLS"
            items={developer}
          />

        </section>

      </main>
    </>
  );
}