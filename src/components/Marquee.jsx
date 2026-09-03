import React from "react";


const Marquee = () => {
  const items = [
    "Frontend Development",
    "React.js Development",
    "Responsive Design",
    "JavaScript Development",
    "Interactive UI",
    "Tailwind CSS",
    "HTML",
    "CSS"
  ];

  return (
    <section className="marquee">
      <div className="marquee-track">
        
        <div className="marquee-content">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className="separator">✦</span>
            </React.Fragment>
          ))}
        </div>

        
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className="separator">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;

