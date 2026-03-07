import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

const QuarterDeck = lazy(() => import("./pages/Quarterdeck"));
const Phalanx = lazy(() => import("./pages/Phalanx"));
const Enlistment = lazy(() => import("./pages/Enlistment"));
const CampaignTrail = lazy(() => import("./pages/UpdatedCampaignTrail"));
const TrojanLeaders = lazy(() => import("./pages/TrojanLeaders"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen bg-IEEE-Blue text-white text-xl font-bold tracking-widest uppercase">
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/" element={<QuarterDeck />} />
          <Route path="/quarterdeck" element={<QuarterDeck />} />
          <Route path="/phalanx" element={<Phalanx />} />
          <Route path="/enlistment" element={<Enlistment />} />
          <Route path="/trail" element={<CampaignTrail />} />
          <Route path="/leaders" element={<TrojanLeaders />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}