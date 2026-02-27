import React from "react";
import NavBar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="h-[80vh]flex flex-col">
      <div className="relative z-50">
        <NavBar />
      </div>

      <div className="relative">
        <img
          className="h-[70vh] w-full object-cover relative"
          src="../../src/assets/homepage.png"
          alt=""
        />

        <div className="absolute inset-0 flex flex-row">
          <div className="flex flex-col items-start justify-start mx-6 md:mx-8">
            <h1 className="text-md font-bold text-center mt-8 text-white px-4 py-2 bg-IEEE-Orange  rounded-full shadow-xl">
              THE QUARTERDECK
            </h1>

            <h1 className="lg:text-8xl md:text-7xl text-5xl font-extrabold mt-6 text-white">
              GREATER{" "}
              <span className="text-IEEE-Orange font-extrabold">HAPPENS</span>
            </h1>
            <h1 className="lg:text-8xl md:text-7xl text-5xl my-2 text-white font-extrabold">HERE</h1>
            <p className="text-Blue-Grey mt-5 lg:text-3xl md:text-2xl text-xl font-bold">
              The Virginia State University IEEE Student Branch - Where
            </p>
            <p className="text-Blue-Grey lg:text-3xl md:text-2xl text-xl font-bold">
              Trojan engineers and innovators forge the future of technology.
            </p>

            <div className="flex flex-row items-center gap-4 mt-2">
              <button className="mt-6 md:px-6 px-3 py-4 bg-IEEE-Orange text-white font-semibold rounded-xl shadow-lg lg:text-lg md:text-md text-sm transition-all duration-300 hover:-translate-y-1 ">
                JOIN THE TROJAN ARMY
                <img
                  src="../../src/assets/rightArrow.png"
                  alt=""
                  className="md:h-8 h-5 ml-2 inline-block"
                />
              </button>

              <button className="mt-6 md:px-6 px-3 py-4 bg-none border-2 text-white font-semibold rounded-xl shadow-lg lg:text-lg md:text-md text-sm transition-all duration-300 hover:-translate-y-1">
                VIEW CAMPAIGN TRAIL
              </button>
            </div>
          </div>

          <div className="absolute sm:top-4 top-133 right-4 text-md font-medium text-white bg-IEEE-Orange px-4 py-1 rounded-lg shadow-lg">
            <p>Last Updated: February 25, 2026 at 10:48 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
