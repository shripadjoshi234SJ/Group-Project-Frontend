import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import UploadBox from "../components/UploadBox";
import Loader from "../components/Loader";

const UploadBill = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a bill first.");
      return;
    }

    try {
      setLoading(true);

      // Backend API will be connected later

      setTimeout(() => {
        alert("Bill uploaded successfully.");
        setLoading(false);
      }, 1500);

    } catch (error) {
      setLoading(false);
      alert("Upload Failed");
    }
  };

  if (loading) {
    return <Loader text="Uploading Bill..." />;
  }

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="dashboard-layout">

        <Sidebar isOpen={sidebarOpen} />

        <main className="dashboard-content">

          <h1>Upload Electricity Bill</h1>

          <UploadBox
            title="Select Electricity Bill"
            onFileSelect={handleFileSelect}
          />

          <br />

          <button
            className="dashboard-btn"
            onClick={handleUpload}
          >
            Upload Bill
          </button>

        </main>

      </div>

      <Footer />
    </>
  );
};

export default UploadBill;