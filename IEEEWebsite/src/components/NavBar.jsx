import React, { useState } from "react";
import { Link } from "react-router-dom"; // IMPORTED Link

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-auto w-full shadow-xl sticky top-0 z-[100] bg-white">
      <div className="w-full h-auto bg-white flex items-center px-4">
        <div className="w-full flex flex-row items-center justify-between gap-4 py-2 relative">
          
          {/* Logo Section - Now links back to home */}
          <Link to="/" className="flex flex-row items-center justify-center gap-2 pl-4 cursor-pointer">
            <h1 className="text-2xl font-bold p-4 bg-IEEE-Blue text-white border rounded-xl">
              IEEE
            </h1>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-IEEE-Blue">THE TROJAN</h2>
              <h2 className="text-xl font-bold text-IEEE-Orange">STANDARD</h2>
              <p className="text-md font-light text-Soft-Grey">
                Greater Happens Here
              </p>
            </div>
          </Link>

          {/* Mobile View Toggle */}
          <div className="flex flex-row items-center gap-4">
            <button className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-md p-2 px-4 md:hidden">
              <img className="w-5 h-5" src="/src/assets/languageIcon.png" alt="" />
              EN
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center space-y-1.5 hover:cursor-pointer md:hidden pr-4"
            >
              <span className="block w-7 h-0.75 bg-black"></span>
              <span className="block w-7 h-0.75 bg-black"></span>
              <span className="block w-7 h-0.75 bg-black"></span>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-lg md:hidden">
              <ul className="w-full flex flex-col items-center">
                <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>THE QUARTERDECK</Link>
                </li>
                <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2">
                  {/* LINKED TO SEPARATE PAGE */}
                  <Link to="/activities" onClick={() => setIsMobileMenuOpen(false)}>THE CAMPAIGN TRAIL</Link>
                </li>
              </ul>
            </div>
          )}

          {/* Computer View */}
          <ul className="flex-row items-center lg:gap-2 hidden md:flex md:gap-1">
            <Link 
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-2 rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              to="/"
            >
              <li>THE QUARTERDECK</li>
            </Link>

            <li className="font-semibold text-IEEE-Blue p-2">THE PHALANX</li>
            <li className="font-semibold text-IEEE-Blue p-2">TROJAN LEADERS</li>

            {/* CHANGE: Now using Link 'to="/activities"' instead of href="#CurrentActivities" */}
            <Link
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-2 rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              to="/activities"
            >
              <li>THE CAMPAIGN TRAIL</li>
            </Link>

            <li className="font-semibold text-IEEE-Blue p-2">ENLISTMENT</li>

            <button className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-md p-2 px-4 ml-2">
              <img className="w-5 h-5" src="/src/assets/languageIcon.png" alt="" />
              EN
            </button>
          </ul>
        </div>
      </div>

      <div className="w-full bg-IEEE-Orange h-1"></div>
    </div>
  );
};

export default NavBar;