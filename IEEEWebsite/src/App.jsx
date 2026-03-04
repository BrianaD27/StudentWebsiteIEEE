import React from "react";
import { Routes, Route } from "react-router-dom"; // Import these
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BranchMissionPage from "./pages/BranchMissionPage";
import UpcomingCampaigns from "./pages/UpcomingCampaigns";
import CurrentActivities from "./pages/CurrentActivities";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Routes>
        {/* The "Main" Page containing your stacked sections */}
        <Route path="/" element={
          <>
            <HomePage />
            <BranchMissionPage />
            <UpcomingCampaigns />
          </>
        } />

        {/* The "Separate" Page */}
        <Route path="/activities" element={<CurrentActivities />} />
      </Routes>
    </div>
  );
}

export default App;