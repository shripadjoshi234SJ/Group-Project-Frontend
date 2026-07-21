import React from "react";
import {
  FaBolt,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaCode,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">

      <section className="about-header">
        <h1>About VidyutCheck</h1>

        <p>
          VidyutCheck is an AI-powered electricity bill analysis platform
          designed to help users monitor electricity consumption,
          analyze bills, and receive smart recommendations.
        </p>
      </section>

      <section className="technology">

        <h2>Technology Stack</h2>

        <div className="tech-grid">

          <div className="tech-card">
            <FaCode size={40} />
            <h3>Frontend</h3>
            <p>React.js + Vite</p>
          </div>

          <div className="tech-card">
            <FaCloud size={40} />
            <h3>Backend</h3>
            <p>FastAPI + Render</p>
          </div>

          <div className="tech-card">
            <FaDatabase size={40} />
            <h3>Database</h3>
            <p>MongoDB Atlas</p>
          </div>

          <div className="tech-card">
            <FaRobot size={40} />
            <h3>Artificial Intelligence</h3>
            <p>OCR + AI Bill Analysis</p>
          </div>

        </div>

      </section>

      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          Our mission is to simplify electricity bill management using
          Artificial Intelligence, OCR, and cloud technologies while
          promoting efficient energy usage.
        </p>

      </section>

    </div>
  );
};

export default About;