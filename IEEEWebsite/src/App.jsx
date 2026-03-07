import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuarterDeck from "./pages/Quarterdeck"
import Phalanx from "./pages/Phalanx";
import Enlistment from "./pages/Enlistment";
import CampaignTrail from "./pages/CampaignTrail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuarterDeck />} />
        <Route path="/quarterdeck" element={<QuarterDeck />} />
        <Route path="/phalanx" element={<Phalanx />} />
        <Route path="/enlistment" element={<Enlistment/>}/>
        <Route path="/leaders" element={<CampaignTrail/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}