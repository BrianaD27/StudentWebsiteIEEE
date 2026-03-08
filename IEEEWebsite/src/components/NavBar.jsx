import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import vsuLogo from "../../public/vsuLogo.jpeg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Reusable style function for desktop links
  const desktopLink = ({ isActive }) =>
    `p-1 md:p-2 hover:rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-IEEE-Blue hover:text-white ${
      isActive ? "text-IEEE-Blue underline underline-offset-4 font-extrabold" : "text-gray-500 font-semibold"
    }`;

  // Reusable style function for mobile links
  const mobileLink = ({ isActive }) =>
    `w-full block text-center p-2 font-bold hover:bg-gray-100 ${
      isActive ? "text-IEEE-Orange" : "text-gray-500"
    }`;

  const navLinks = [
    { label: "THE QUARTERDECK", to: "/quarterdeck" },
    { label: "THE PHALANX", to: "/phalanx" },
    { label: "TROJAN LEADERS", to: "/leaders" },
    { label: "THE CAMPAIGN TRAIL", to: "/trail" },
    { label: "ENLISTMENT", to: "/enlistment" },
  ];

  return (
    <div className="flex flex-col h-auto w-full shadow-xl">
      <div className="w-full h-auto bg-white flex items-center px-4 py-2">
        <div className="w-full flex flex-row items-center justify-between gap-4 py-2 relative">

          {/* Logo */}
          <div className="flex flex-row items-center justify-center gap-2">
            <img src={vsuLogo} className="w-15 h-15 border border-white rounded-lg" alt="" />
            <div className="flex flex-col">
              <h2 className="lg:text-xl md:text-lg text-base font-bold text-IEEE-Blue">THE TROJAN</h2>
              <h2 className="lg:text-xl md:text-lg text-base font-bold text-IEEE-Orange">STANDARD</h2>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex flex-row items-center gap-4">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center space-y-1.5 hover:cursor-pointer md:hidden pr-4"
            >
              <span className="block w-7 h-0.75 bg-black"></span>
              <span className="block w-7 h-0.75 bg-black"></span>
              <span className="block w-7 h-0.75 bg-black"></span>
            </button>
          </div>

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-lg md:hidden z-50">
              <ul className="w-full flex flex-col items-center">
                {navLinks.map((link) => (
                  <li key={link.to} className="w-full">
                    <NavLink
                      to={link.to}
                      className={mobileLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop links */}
          <ul className="flex-row items-center lg:gap-2 hidden text-sm xl:text-base md:flex md:gap-1 text-center">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={desktopLink}>
                {link.label}
              </NavLink>
            ))}
          </ul>

        </div>
      </div>
      <div className="w-full bg-IEEE-Orange h-1"></div>
    </div>
  );
};

export default NavBar;