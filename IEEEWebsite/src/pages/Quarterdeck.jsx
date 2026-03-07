import React from "react";
import HomePage from "./The Quarterdeck/HomePage";
import BranchMissionPage from "./The Quarterdeck/BranchMissionPage";
import StatsPage from "./The Quarterdeck/StatsPage";
import TheStrategyPage from "./The Quarterdeck/TheStrategyPage";
import AdvantagePage from "./The Quarterdeck/AdvantagePage";
import UpcomingBattles from "./The Quarterdeck/UpcomingBattles";
import EnlistPage from "./The Quarterdeck/EnlistPage";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

const Quarterdeck = () => {
  return (
    <div>
      <div className="z-50 sticky top-0">
        <NavBar />
      </div>
      <HomePage />
      <BranchMissionPage />
      <StatsPage />
      <TheStrategyPage />
      <AdvantagePage />
      <UpcomingBattles />
      <EnlistPage />
      <Footer />
    </div>
  );
};

export default Quarterdeck;
