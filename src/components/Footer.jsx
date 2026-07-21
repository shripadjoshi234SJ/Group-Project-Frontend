import React from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>
            <FaBolt /> VidyutCheck
          </h2>
          <p>
            AI Powered Electricity Bill Analyzer and
            Smart Meter Reading System.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> support@vidyutcheck.com
          </p>

          <p>
            <FaPhone /> +91 9876543210
          </p>

          <p>
            <FaMapMarkerAlt /> Maharashtra, India
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        © {year} VidyutCheck. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;