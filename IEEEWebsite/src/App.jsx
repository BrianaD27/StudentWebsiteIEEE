import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BranchMissionPage from "./pages/BranchMissionPage";
import UpcomingCampaigns from "./pages/UpcomingCampaigns";
import CurrentActivities from "./pages/CurrentActivities";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      {/* Main Content Area */}
      <main className="flex-grow">
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
      </main>

      <Footer /> 
    </div>
  );
}

export default App;