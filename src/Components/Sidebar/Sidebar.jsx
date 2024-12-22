import React, { useState } from "react";
import FoodDonor from "../FoodDonor/FoodDonor";
import History from "../History/History";
import "./Sidebar.css";

const Sidebar = ({ historyData, setHistoryData }) => {
  const [currentComponent, setCurrentComponent] = useState(null);

  const showFoodDonor = () => {
    setCurrentComponent("FoodDonor");
  };

  const showHistory = () => {
    setCurrentComponent("History");
  };

  const renderComponent = () => {
    if (currentComponent === "FoodDonor") {
      return <FoodDonor setHistoryData={setHistoryData} />;
    }
    if (currentComponent === "History") {
      return <History historyData={historyData} />;
    }
    return <p>Select an option from the sidebar to begin.</p>;
  };

  const handleLogout = () => {
    // localStorage.removeItem("currentUser");  // Clear current user
    // setHistoryData([]);                      // Clear history data
    window.location.href = "http://localhost:3000/";
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-items">
          <p onClick={showFoodDonor}>Add Donation</p>
          <p onClick={showHistory}>Donation History</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="main-content">{renderComponent()}</div>
    </div>
  );
};

export default Sidebar;
