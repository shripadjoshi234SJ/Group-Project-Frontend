import React from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaFileInvoiceDollar,
  FaCamera,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>⚡ Welcome to VidyutCheck</h1>

          <p>
            AI Powered Electricity Bill Analyzer and Smart Meter Reading
            System. Upload your electricity bill, scan your meter and get
            intelligent insights instantly.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>

            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaFileInvoiceDollar size={45} />
            <h3>Bill Upload</h3>
            <p>
              Upload electricity bills securely and analyze them using AI.
            </p>
          </div>

          <div className="feature-card">
            <FaCamera size={45} />
            <h3>Meter Scanner</h3>
            <p>
              Capture your electricity meter using your camera.
            </p>
          </div>

          <div className="feature-card">
            <FaChartLine size={45} />
            <h3>AI Analysis</h3>
            <p>
              Compare previous bills and monitor electricity usage.
            </p>
          </div>

          <div className="feature-card">
            <FaShieldAlt size={45} />
            <h3>Secure System</h3>
            <p>
              JWT Authentication and encrypted data protection.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <FaBolt size={40} />

        <h2>Start Saving Electricity Today</h2>

        <p>
          Analyze bills, monitor consumption and receive AI recommendations.
        </p>

        <Link to="/dashboard" className="btn btn-primary">
          Open Dashboard
        </Link>
      </section>
    </div>
  );
};

export default Home;