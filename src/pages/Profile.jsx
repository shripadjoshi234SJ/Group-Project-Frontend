import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { user, updateUser } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(formData);

    alert("Profile Updated Successfully");
  };

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>My Profile</h1>

          <form
            className="profile-form"
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
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="dashboard-btn"
            >
              Update Profile
            </button>

          </form>

        </main>

      </div>

      <Footer />
    </>
  );
};

export default Profile;