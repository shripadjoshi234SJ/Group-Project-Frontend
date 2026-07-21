import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BillCard from "../components/BillCard";

const History = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const history = [
    {
      id: 1,
      consumerName: "Shripad Joshi",
      billDate: "May 2026",
      units: 205,
      amount: 1550,
    },
    {
      id: 2,
      consumerName: "Shripad Joshi",
      billDate: "June 2026",
      units: 228,
      amount: 1720,
    },
    {
      id: 3,
      consumerName: "Shripad Joshi",
      billDate: "July 2026",
      units: 248,
      amount: 1850,
    },
  ];

  const viewBill = (bill) => {
    alert(`Viewing ${bill.billDate} Bill`);
  };

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Bill History</h1>

          {history.length === 0 ? (
            <p>No Bills Found.</p>
          ) : (
            history.map((bill) => (
              <BillCard
                key={bill.id}
                bill={bill}
                onView={viewBill}
              />
            ))
          )}

        </main>

      </div>

      <Footer />
    </>
  );
};

export default History;