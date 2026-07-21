import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MeterCamera from "../components/MeterCamera";
import Loader from "../components/Loader";

const ScanMeter = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCapture = (image) => {
    setCapturedImage(image);
  };

  const handleAnalyze = async () => {
    if (!capturedImage) {
      alert("Please capture a meter image first.");
      return;
    }

    try {
      setLoading(true);

      // OCR API will be connected later

      setTimeout(() => {
        alert("Meter reading captured successfully.");
        setLoading(false);
      }, 1500);

    } catch (error) {
      setLoading(false);
      alert("Analysis Failed");
    }
  };

  if (loading) {
    return <Loader text="Analyzing Meter..." />;
  }

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Scan Electricity Meter</h1>

          <MeterCamera onCapture={handleCapture} />

          <br />

          <button
            className="dashboard-btn"
            onClick={handleAnalyze}
          >
            Analyze Meter
          </button>

        </main>

      </div>

      <Footer />
    </>
  );
};

export default ScanMeter;