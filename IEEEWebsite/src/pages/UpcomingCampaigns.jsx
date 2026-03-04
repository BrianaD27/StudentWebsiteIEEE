import React from "react";

const CurrentActivities = () => {
  return (
    <section id="current-activities" className="bg-[#002855] py-16 px-6 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-black text-5xl uppercase mb-12">
          CURRENT <span className="text-IEEE-Orange">ACTIVITIES</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-blue-400 p-8 rounded-xl bg-[#001f42]">
            <h4 className="font-bold text-xl uppercase mb-4">Weekly General Meetings</h4>
            <p className="text-gray-300 text-sm">Every Wednesday, Room 101, Engineering Building.</p>
          </div>
          
          <div className="border-2 border-blue-400 p-8 rounded-xl bg-[#001f42]">
            <h4 className="font-bold text-xl uppercase mb-4">Robotics Project Team</h4>
            <p className="text-gray-300 text-sm">Design and build autonomous rovers for regional competitions.</p>
          </div>
          
          <div className="border-2 border-blue-400 p-8 rounded-xl bg-[#001f42]">
            <h4 className="font-bold text-xl uppercase mb-4">K-12 STEM Outreach</h4>
            <p className="text-gray-300 text-sm">Mentoring local high school students in electronics.</p>
          </div>
        </div>

        {/* New Connection to Campaign Trail */}
        <div className="mt-16 text-center border-t border-blue-400/30 pt-12">
          <h3 className="text-2xl font-bold mb-4 uppercase">Want to see our progress?</h3>
          <a href="#campaign-trail">
            <button className="bg-IEEE-Orange text-white font-bold py-3 px-10 rounded-xl hover:scale-105 transition-transform shadow-lg">
              VIEW THE CAMPAIGN TRAIL
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurrentActivities;