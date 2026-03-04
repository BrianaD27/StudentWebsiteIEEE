import NavBar from "./components/Navbar"
import AdvantagePage from "./pages/AdvantagePage"
import BranchMissionPage from "./pages/BranchMissionPage"
import HomePage from "./pages/HomePage"
import StatsPage from "./pages/StatsPage"
import TheStrategyPage from "./pages/TheStrategyPage"

function App() {
  return (
    <>
      <div>
        <HomePage />
        <BranchMissionPage />
        <StatsPage/>
        <TheStrategyPage/>
        <AdvantagePage/>

      </div>
      
    </>
  )
}

export default App
