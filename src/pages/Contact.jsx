import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

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

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;