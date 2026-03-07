import React from "react";
import HomePage from "./The Quarterdeck/HomePage";
import BranchMissionPage from "./The Quarterdeck/BranchMissionPage";
import StatsPage from "./The Quarterdeck/StatsPage";
import TheStrategyPage from "./The Quarterdeck/TheStrategyPage";
import AdvantagePage from "./The Quarterdeck/AdvantagePage";
import UpcomingBattles from "./The Quarterdeck/UpcomingBattles";
import EnlistPage from "./The Quarterdeck/EnlistPage";

const Quarterdeck = () => {
  return (
    <div>
      <HomePage />
      <BranchMissionPage />
      <StatsPage />
      <TheStrategyPage />
      <AdvantagePage />
      <UpcomingBattles />
      <EnlistPage />
    </div>
  );
};

export default Quarterdeck;
