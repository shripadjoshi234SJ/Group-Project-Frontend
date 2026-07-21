import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaUpload,
  FaCamera,
  FaChartLine,
  FaFileInvoice,
  FaHistory,
  FaExclamationCircle,
  FaUser,
  FaCog
} from "react-icons/fa";


const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <NavLink to="/dashboard">
        <FaTachometerAlt />
        Dashboard
      </NavLink>

      <NavLink to="/">
        <FaHome />
        Home
      </NavLink>

      <NavLink to="/upload-bill">
        <FaUpload />
        Upload Bill
      </NavLink>

      <NavLink to="/scan-meter">
        <FaCamera />
        Scan Meter
      </NavLink>

      <NavLink to="/analysis">
        <FaChartLine />
        Analysis
      </NavLink>

      <NavLink to="/reports">
        <FaFileInvoice />
        Reports
      </NavLink>

      <NavLink to="/history">
        <FaHistory />
        History
      </NavLink>

      <NavLink to="/complaints">
        <FaExclamationCircle />
        Complaints
      </NavLink>

      <NavLink to="/profile">
        <FaUser />
        Profile
      </NavLink>

      <NavLink to="/settings">
        <FaCog />
        Settings
      </NavLink>
    </aside>
  );
};

export default Sidebar;