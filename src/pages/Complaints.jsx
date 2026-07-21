import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Complaints = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [formData, setFormData] = useState({
    subject: "",
    complaint: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint Submitted Successfully.");

    setFormData({
      subject: "",
      complaint: "",
    });
  };

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Submit Complaint</h1>

          <form
            className="complaint-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="subject"
              placeholder="Complaint Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="complaint"
              rows="6"
              placeholder="Write your complaint..."
              value={formData.complaint}
              onChange={handleChange}
              required
            />

            <button
              className="dashboard-btn"
              type="submit"
            >
              Submit Complaint
            </button>

          </form>

        </main>

      </div>

      <Footer />
    </>
  );
};

export default Complaints;