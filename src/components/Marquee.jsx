import React from "react";


const Marquee = () => {
  const items = [
    "Frontend Development",
    "React.js Development",
    "Responsive Design",
    "Interactive UI",
    "JavaScript Development",
    "Tailwind CSS",
  ];

  return (
    <section className="marquee">
      <div className="marquee-track">
        {/* First set */}
        <div className="marquee-content">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className="separator">✦</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
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

