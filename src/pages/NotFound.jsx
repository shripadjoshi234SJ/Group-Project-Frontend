import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <FaExclamationTriangle className="notfound-icon" />

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="dashboard-btn">
        <FaHome />
        &nbsp; Back to Home
      </Link>
    </div>
  );
};

export default NotFound;