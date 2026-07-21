import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ReportCard from "../components/ReportCard";

const Reports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const reports = [
    {
      id: 1,
      title: "June 2026 Report",
      date: "30 June 2026",
      amount: 1720,
      units: 228,
      suggestion:
        "Electricity usage is normal. Continue using energy efficient appliances.",
    },
    {
      id: 2,
      title: "July 2026 Report",
      date: "20 July 2026",
      amount: 1850,
      units: 248,
      suggestion:
        "Peak hour consumption has increased. Reduce heavy appliance usage during evening hours.",
    },
  ];

  const downloadReport = (report) => {
    alert(`Downloading ${report.title}`);
    // PDF download API will be connected later
  };

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Energy Reports</h1>

          {reports.length === 0 ? (
            <p>No reports available.</p>
          ) : (
            reports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                onDownload={downloadReport}
              />
            ))
          )}

        </main>

      </div>

      <Footer />
    </>
  );
};

export default Reports;