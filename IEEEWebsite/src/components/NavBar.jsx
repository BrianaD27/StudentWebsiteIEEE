import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col h-auto w-full shadow-xl">
      <div className="w-full h-auto bg-white flex items-center px-4">

        <div className="w-full flex flex-row items-center justify-between gap-4 py-2 relative">

          <div className="flex flex-row items-center justify-center gap-2 pl-4">
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
          </div>

          {/* Mobile View */}
          <div className="flex flex-row items-center gap-4">
            <button className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-md p-2 px-4 md:hidden">
              <img
                className="w-5 h-5"
                src="../../src/assets/languageIcon.png"
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

          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-lg md:hidden">
              <div className="flex flex-col items-center">

                <ul className="w-full flex flex-col items-center hover:cursor-pointer ">

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <a>THE QUARTERDECK</a>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <a>THE PHALANX</a>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <a>TROJAN LEADERS</a>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <a>THE CAMPAIGN TRAIL</a>
                  </li>

                  <li className="hover:bg-gray-100 text-center w-full font-semibold text-IEEE-Blue p-2 ">
                    <a>ENLISTMENT</a>
                  </li>

                </ul>

              </div>
            </div>
          )}

          {/* Computer View */}
          <ul className="flex-row items-center lg:gap-2 hidden md:flex md:gap-1">
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              href="/"
            >
              <li>THE QUARTERDECK</li>
            </a>
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              href="/"
            >
              <li>THE PHALANX</li>
            </a>
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              href="/"
            >
              <li>TROJAN LEADERS</li>
            </a>
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              href="/"
            >
              <li>THE CAMPAIGN TRAIL</li>
            </a>
            <a
              className="hover:bg-IEEE-Blue font-semibold text-IEEE-Blue hover:text-white p-1 border:hidden hover:border-gray-400 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-2"
              href="/"
            >
              <li>ENLISTMENT</li>
            </a>

            <button className="flex flex-row items-center gap-2 border-2 border-gray-400 rounded-md p-2 px-4">
              <img
                className="w-5 h-5"
                src="../../src/assets/languageIcon.png"
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
