import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [historyData, setHistoryData] = useState([]); // Store history data centrally

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar historyData={historyData} setHistoryData={setHistoryData} />
        <div style={{ flexGrow: 1, padding: "20px", background: "#f9f9f9" }}>
          <h2>Welcome to the Donation System</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
