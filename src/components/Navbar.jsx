import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaUserCircle,
  FaSignOutAlt,
  FaBars
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";


const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="menu-btn"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <Link to="/" className="logo">
          <FaBolt />
          <span>VidyutCheck</span>
        </Link>
      </div>

      <div className="navbar-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {isAuthenticated && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/reports">Reports</NavLink>
          </>
        )}
      </div>

      <div className="navbar-right">
        {isAuthenticated ? (
          <>
            <div className="profile">
              <FaUserCircle size={22} />
              <span>{user?.name || "User"}</span>
            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="login-btn" to="/login">
              Login
            </Link>

            <Link className="register-btn" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;