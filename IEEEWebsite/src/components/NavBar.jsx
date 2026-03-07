import React, { useState } from "react";
import { Link } from "react-router-dom";
import languageIcon from "../assets/languageIcon.png"

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-auto w-full shadow-xl">
      <div className="w-full h-auto bg-white flex items-center px-4 py-2">

        <div className="w-full flex flex-row items-center justify-between gap-4 py-2 relative">

          <div className="flex flex-row items-center justify-center gap-2 ">
            <h1 className="lg:text-2xl md:text-lg text-base font-bold lg:p-4 p-3 bg-IEEE-Blue text-white border rounded-xl">
              IEEE
            </h1>
            <div className="flex flex-col">
              <h2 className="lg:text-xl md:text-lg text-base font-bold text-IEEE-Blue">THE TROJAN</h2>
              <h2 className="lg:text-xl md:text-lg text-base font-bold text-IEEE-Orange">STANDARD</h2>
              <p className="md:text-md hidden font-light text-Soft-Grey">
                Greater Happens Here
              </p>
            </div>
          </div>

          {/* Mobile View Toggle */}
          <div className="flex flex-row items-center gap-4">
            <button className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-md p-2 px-4 md:hidden">
              <img
                className="md:w-5 md:h-5 w-4 h-4"
                src={languageIcon}
                alt=""
              />
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
              <div className="flex flex-col items-center">

                <ul className="w-full flex flex-col items-center hover:cursor-pointer ">

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <Link to="/quarterdeck">THE QUARTERDECK</Link>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <Link to="/phalanx">THE PHALANX</Link>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <Link to="/">TROJAN LEADERS</Link>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <a>THE CAMPAIGN TRAIL</a>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <Link to="/enlistment">ENLISTMENT</Link>
                  </li>

                </ul>

              </div>
            </div>
          )}

          {/* Computer View */}
          <ul className="flex-row items-center lg:gap-2 hidden text-sm xl:text-base md:flex md:gap-1 text-center">
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2 "
              href="/"
            >
              <Link to="/quarterdeck">THE QUARTERDECK</Link>
            </a>
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              href="/"
            >
              <Link to="/phalanx">THE PHALANX</Link>
            </a>
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              href="/"
            >
              <li>TROJAN LEADERS</li>
            </a>
            <Link
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              to="/leaders"
            >
              <li>THE CAMPAIGN TRAIL</li>
            </Link>
            <Link
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              to="/enlistment"
            >
              <li>ENLISTMENT</li>
            </Link>

            <button className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-md p-2 px-4">
              <img
                className="lg:w-5 lg:h-5 w-3 h-3"
                src={languageIcon}
                alt=""
              />
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