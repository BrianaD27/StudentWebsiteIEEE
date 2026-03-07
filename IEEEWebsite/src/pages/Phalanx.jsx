import React from "react";
import PhalanxHomePage from "./The Phalanx/PhalanxHomePage";
import TrojanBeginning from "./The Phalanx/TrojanBeginning";
import BattlePlanVision from "./The Phalanx/BattlePlanVision";
import WhatWeDeploy from "./The Phalanx/WhatWeDeploy";
import GlobalReach from "./The Phalanx/GlobalReach";
import TrojanSpirit from "./The Phalanx/TrojanSpirit";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

const Phalanx = () => {
  return (
    <div>
      <div className="z-50 sticky top-0">
        <NavBar />
      </div>
      <PhalanxHomePage />
      <TrojanBeginning />
      <BattlePlanVision />
      <WhatWeDeploy />
      <GlobalReach />
      <TrojanSpirit />
      <Footer />
    </div>
  );
};

export default Phalanx;
