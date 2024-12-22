import React, { useEffect, useState } from "react";
import "./History.css";

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch("http://localhost:8800/donations"); // API endpoint for fetching donations
        if (!response.ok) {
          throw new Error("Failed to fetch donation history.");
        }
        const data = await response.json();
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching donation history:", error);
        setHistoryData([]); // Ensure there's no stale data
      }
    };

    fetchHistoryData();
  }, []); // Fetch data once when the component mounts

  return (
    <div className="history">
      <h2>Donation History</h2>
      {historyData.length === 0 ? (
        <p>No history available. Add some donations to see the records.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Food Type</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr key={index}>
                <td>{item.donorName || item.donor}</td> {/* Adjusted for backend field names */}
                <td>{item.foodType}</td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
