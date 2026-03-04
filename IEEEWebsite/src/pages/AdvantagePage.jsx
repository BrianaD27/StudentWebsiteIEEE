import React from "react";
import MediumCard from "../components/MediumCard";

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

      <div className="flex flex-row items-center justify-around w-full mt-10 gap-10">
        <MediumCard/>
        <MediumCard/>
        <MediumCard/>

      </div>

    </div>
  );
};

export default AdvantagePage;
