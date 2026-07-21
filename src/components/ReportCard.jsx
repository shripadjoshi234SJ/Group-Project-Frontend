import React from "react";
import {
  FaChartLine,
  FaFilePdf,
  FaDownload,
  FaCalendarAlt
} from "react-icons/fa";

const ReportCard = ({ report, onDownload }) => {
  return (
    <div className="report-card">

      <div className="report-header">
        <FaChartLine size={28} />
        <h3>{report?.title || "Energy Report"}</h3>
      </div>

      <div className="report-body">

        <p>
          <strong>Date:</strong>{" "}
          {report?.date || "N/A"}
        </p>

        <p>
          <strong>Bill Amount:</strong> ₹
          {report?.amount || 0}
        </p>

        <p>
          <strong>Units Consumed:</strong>{" "}
          {report?.units || 0} kWh
        </p>

        <p>
          <strong>AI Suggestion:</strong>
          <br />
          {report?.suggestion ||
            "No suggestions available."}
        </p>

      </div>

      <div className="report-footer">

        <button
          className="download-btn"
          onClick={() =>
            onDownload && onDownload(report)
          }
        >
          <FaDownload />
          Download PDF
        </button>

      </div>

    </div>
  );
};

export default ReportCard;