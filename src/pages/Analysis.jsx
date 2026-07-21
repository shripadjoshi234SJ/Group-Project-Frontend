import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Analysis = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const [analysis] = useState({
    billAmount: 1850,
    units: 248,
    previousUnits: 220,
    estimatedSaving: 180,
    efficiency: "Good",
    aiSuggestion:
      "Switch off unused appliances and use LED bulbs to reduce electricity consumption.",
  });

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Analysis Completed Successfully");
    }, 1500);
  };

  if (loading) {
    return <Loader text="Analyzing Bill..." />;
  }

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Electricity Bill Analysis</h1>

          <div className="analysis-card">

            <h3>Analysis Summary</h3>

            <p>
              <strong>Bill Amount :</strong> ₹{analysis.billAmount}
            </p>

            <p>
              <strong>Units Consumed :</strong> {analysis.units} kWh
            </p>

            <p>
              <strong>Previous Units :</strong> {analysis.previousUnits} kWh
            </p>

            <p>
              <strong>Estimated Saving :</strong> ₹{analysis.estimatedSaving}
            </p>

            <p>
              <strong>Efficiency :</strong> {analysis.efficiency}
            </p>

            <hr />

            <h3>AI Recommendation</h3>

            <p>{analysis.aiSuggestion}</p>

            <button
              className="dashboard-btn"
              onClick={handleAnalyze}
            >
              Refresh Analysis
            </button>

          </div>

        </main>

      </div>

      <Footer />
    </>
  );
};

export default Analysis;