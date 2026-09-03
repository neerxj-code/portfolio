import React from 'react'
import './Marquee1.css';

const Marquee1 = () => {

    const items = [
        "Frontend Development",
        "React JS",
        "Responsive Design",
        "JavaScript",
        "Interactive UI",
        "Tailwind CSS",
        "HTML",
        "CSS",
    ];
  return (
    <section className='marquee1'>
        <div className='marquee-track1'>
            <div className='marquee-content1'>
                {items.map((item, idx) =>(
                    <React.Fragment key={idx}>
                        <span>{item}</span>
                        <span className='separator1'>✦ </span>
                    </React.Fragment>
                ))}
            </div>

            <div className='marquee-content1'>
                {items.map((item, idx) =>(
                    <React.Fragment key={idx}>
                        <span>{item}</span>
                        <span className='separator1'>✦ </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Marquee1
