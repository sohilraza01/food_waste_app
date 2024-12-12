import React from "react";
import "./History.css";

const History = ({ historyData }) => {
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
                <td>{item.donorName}</td>
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
