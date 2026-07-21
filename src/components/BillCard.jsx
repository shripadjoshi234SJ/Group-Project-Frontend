import React from "react";
import {
  FaCalendarAlt,
  FaBolt,
  FaRupeeSign,
  FaEye
} from "react-icons/fa";

const BillCard = ({ bill, onView }) => {
  return (
    <div className="bill-card">

      <div className="bill-header">
        <h3>{bill?.consumerName || "Electricity Bill"}</h3>
      </div>

      <div className="bill-body">

        <div className="bill-item">
          <FaCalendarAlt />
          <span>
            <strong>Date:</strong>{" "}
            {bill?.billDate || "N/A"}
          </span>
        </div>

        <div className="bill-item">
          <FaBolt />
          <span>
            <strong>Units:</strong>{" "}
            {bill?.units || 0} kWh
          </span>
        </div>

        <div className="bill-item">
          <FaRupeeSign />
          <span>
            <strong>Amount:</strong> ₹
            {bill?.amount || 0}
          </span>
        </div>

      </div>

      <div className="bill-footer">
        <button
          className="view-btn"
          onClick={() => onView && onView(bill)}
        >
          <FaEye />
          View Details
        </button>
      </div>

    </div>
  );
};

export default BillCard;