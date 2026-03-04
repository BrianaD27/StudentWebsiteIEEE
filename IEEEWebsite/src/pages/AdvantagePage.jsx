import React from "react";
import MediumCard from "../components/MediumCard";
import MediumRectCard from "../components/MediumRectCard";

const AdvantagePage = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-start px-[15%] py-20 bg-IEEE-Orange">
      <p className="bg-IEEE-Blue text-white px-4 py-2 rounded-full font-bold my-4">
        IEEE REGION 3 EXCELLENCE
      </p>
      <h1 className="text-4xl font-extrabold mb-4 text-white">
        THE <span className="text-IEEE-Blue">VSU </span> ADVANTAGE
      </h1>
      <p className="font-bold text-2xl mb-4 text-white">
        What Makes VSU IEEE the Premier Student Branch in Region 3
      </p>

      <div className="grid grid-cols-2 gap-6 w-full mt-10">
        <MediumRectCard title="HBCU LEADERSHIP" description="As a leading HBCU in IEEE Region 3, VSU brings unique perspectives and innovative approaches to technology education. We champion diversity in STEM and create pathways for underrepresented communities to excel in engineering." icon="../../src/assets/targetIcon.png"/>
        <MediumRectCard title="COMMUNITY IMPACT" description="Our branch serves the Greater Petersburg community through K-12 STEM outreach programs, tech literacy workshops, and partnerships with local schools—creating a pipeline of future Trojan engineers." icon="../../src/assets/peopleIcon.png"/>  
        <MediumRectCard title="INDUSTRY PARTNERSHIPS" description="Exclusive partnerships with NASA Langley, Dominion Energy, and Richmond tech startups provide our members with internship opportunities, capstone projects, and direct paths to career placement." icon="../../src/assets/upArrowIcon.png"/>
        <MediumRectCard title="TROJAN RESILIENCE" description="The legendary VSU Trojan spirit—marked by determination, unity, and excellence—drives our members to overcome challenges and achieve extraordinary success in competitions and career outcomes." icon="../../src/assets/shieldIcon.png"/> 

      </div>

      <h1 className="text-2xl font-bold mt-10 text-white">
        GREATER HAPPENS HERE • TROJAN PRIDE • IEEE EXCELLENCE
      </h1>

    </div>
  );
};

export default AdvantagePage;
