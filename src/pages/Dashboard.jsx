import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUpload,
  FaCamera,
  FaChartLine,
  FaHistory,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BillCard from "../components/BillCard";
import ReportCard from "../components/ReportCard";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const [latestBill] = useState({
    consumerName: "Demo Consumer",
    billDate: "20 July 2026",
    units: 248,
    amount: 1850,
  });

  const [latestReport] = useState({
    title: "Monthly Energy Report",
    date: "20 July 2026",
    amount: 1850,
    units: 248,
    suggestion:
      "Reduce heavy appliance usage during peak hours to save electricity.",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader text="Loading Dashboard..." />;
  }

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Dashboard</h1>

          <div className="dashboard-actions">

            <Link to="/upload-bill" className="dashboard-btn">
              <FaUpload />
              Upload Bill
            </Link>

            <Link to="/scan-meter" className="dashboard-btn">
              <FaCamera />
              Scan Meter
            </Link>

            <Link to="/analysis" className="dashboard-btn">
              <FaChartLine />
              Analysis
            </Link>

            <Link to="/history" className="dashboard-btn">
              <FaHistory />
              History
            </Link>

          </div>

          <section className="dashboard-section">
            <h2>Latest Bill</h2>

            <BillCard bill={latestBill} />
          </section>

          <section className="dashboard-section">
            <h2>Latest Report</h2>

            <ReportCard report={latestReport} />
          </section>

        </main>

      </div>

      <Footer />
    </>
  );
};

export default Dashboard;