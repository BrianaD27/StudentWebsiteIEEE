import React from "react";

const CurrentActivities = () => {
  return (
    <section id="CurrentActivities" className="bg-[#002855] py-16 px-[15%] text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section matching Branch Mission style */}
        <div className="flex flex-col items-center mb-12">
          <p className="bg-IEEE-Blue text-white px-4 py-2 rounded-full font-bold my-4 border border-white/20">
            THE TROJAN STANDARD
          </p>
          <h1 className="text-4xl font-extrabold uppercase">
            CURRENT <span className="text-IEEE-Orange">ACTIVITIES</span>
          </h1>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-blue-400 p-8 rounded-xl bg-[#001f42] hover:border-IEEE-Orange transition-colors">
            <h4 className="font-bold text-xl uppercase mb-4 text-IEEE-Orange">Weekly General Meetings</h4>
            <p className="text-gray-300 text-lg">Every Wednesday, Room 101, Engineering Building.</p>
          </div>

          <div className="border-2 border-blue-400 p-8 rounded-xl bg-[#001f42] hover:border-IEEE-Orange transition-colors">
            <h4 className="font-bold text-xl uppercase mb-4 text-IEEE-Orange">Robotics Project Team</h4>
            <p className="text-gray-300 text-lg">Design and build autonomous rovers for regional competitions.</p>
          </div>

          <div className="border-2 border-blue-400 p-8 rounded-xl bg-[#001f42] hover:border-IEEE-Orange transition-colors">
            <h4 className="font-bold text-xl uppercase mb-4 text-IEEE-Orange">K-12 STEM Outreach</h4>
            <p className="text-gray-300 text-lg">Mentoring local high school students in electronics.</p>
          </div>
        </div>

        {/* Link to Campaign Trail */}
        <div className="mt-16 flex flex-col items-center border-t border-white/10 pt-10">
          <p className="text-xl mb-6 text-gray-300 italic">Want to see our long-term progress?</p>
          <a href="#campaign-trail">
            <button className="bg-IEEE-Orange text-white font-extrabold py-4 px-10 rounded-xl text-xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-wider">
              VIEW THE CAMPAIGN TRAIL
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurrentActivities;