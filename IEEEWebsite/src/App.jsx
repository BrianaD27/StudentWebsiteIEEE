import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuarterDeck from "./pages/Quarterdeck"
import Phalanx from "./pages/Phalanx";
import Enlistment from "./pages/Enlistment";
import CampaignTrail from "./pages/UpdatedCampaignTrail"
import TrojanLeaders from "./pages/TrojanLeaders"
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<QuarterDeck />} />
        <Route path="/quarterdeck" element={<QuarterDeck />} />
        <Route path="/phalanx" element={<Phalanx />} />
        <Route path="/enlistment" element={<Enlistment/>}/>
        <Route path="/trail" element={<CampaignTrail/>}/>
        <Route path="/leaders" element={<TrojanLeaders/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}