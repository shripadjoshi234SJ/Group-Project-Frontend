import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [settings, setSettings] = useState({
    emailNotification: true,
    smsNotification: false,
    darkMode: false,
    autoAnalysis: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setSettings({
      ...settings,
      [name]: checked,
    });
  };

  const saveSettings = () => {
    alert("Settings Saved Successfully");
  };

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Settings</h1>

          <div className="settings-card">

            <label>
              <input
                type="checkbox"
                name="emailNotification"
                checked={settings.emailNotification}
                onChange={handleChange}
              />
              Email Notifications
            </label>

            <br /><br />

            <label>
              <input
                type="checkbox"
                name="smsNotification"
                checked={settings.smsNotification}
                onChange={handleChange}
              />
              SMS Notifications
            </label>

            <br /><br />

            <label>
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
              Dark Mode
            </label>

            <br /><br />

            <label>
              <input
                type="checkbox"
                name="autoAnalysis"
                checked={settings.autoAnalysis}
                onChange={handleChange}
              />
              Auto Bill Analysis
            </label>

            <br /><br />

            <button
              className="dashboard-btn"
              onClick={saveSettings}
            >
              Save Settings
            </button>

          </div>

        </main>

      </div>

      <Footer />
    </>
  );
};

export default Settings;