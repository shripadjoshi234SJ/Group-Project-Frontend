import React from "react";

const Loader = ({
  text = "Loading...",
  fullScreen = true
}) => {
  return (
    <div
      className={
        fullScreen
          ? "loader-container fullscreen"
          : "loader-container"
      }
    >
      <div className="loader-spinner"></div>

      <p>{text}</p>
    </div>
  );
};

export default Loader;