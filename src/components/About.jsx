import './About.css';

function About() {
  return (
    <main className="portfolio-page">
      {/* Background stars */}
      {/* <div className="stars" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, index) => (
          <span className="star" key={index}></span>
        ))}
      </div> */}

      <section className="about-section">
        {/* Hero statement */}
        <div className="hero-copy">
          <p>
            I believe in a user centered design approach, ensuring that every
            project I work on is tailored to meet the specific needs of its
            users.
          </p>
        </div>

        {/* About label */}
        <div className="section-label">This is me.</div>

        {/* About content */}
        <div className="about-grid">
          <div className="about-title">
            <h1>Hi, I'm Neeraj.</h1>
          </div>

          <div className="about-text">
            <p>
              I'm a frontend web developer dedicated to turning ideas into
              creative solutions. I specialize in creating seamless and
              intuitive user experiences.
            </p>

            <p>
              My approach focuses on creating scalable, high-performing
              solutions tailored to both user needs and business objectives.
              By prioritizing performance, accessibility, and responsiveness,
              I strive to deliver experiences that not only engage users but
              also drive tangible results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;