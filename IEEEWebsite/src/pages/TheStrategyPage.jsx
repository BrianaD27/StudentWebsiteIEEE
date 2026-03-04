import React from "react";
import MediumCard from "../components/MediumCard";

const TheStrategyPage = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-start px-[15%] py-20 ">
      <p className="bg-IEEE-Orange text-white px-4 py-2 rounded-full font-bold my-4">
        THE STRATEGY
      </p>
      <h1 className="text-4xl font-extrabold mb-4 text-IEEE-Blue">
        WHY JOIN THE TROJAN LEGION?
      </h1>
      <p className="font-normal text-2xl mb-4 text-Text-Grey">
        Equip yourself with the tools, network, and experience to dominate in
        the technology sector
      </p>

      <div className="flex flex-row items-center justify-around w-full mt-10 gap-10">
        <MediumCard/>
        <MediumCard/>
        <MediumCard/>

      </div>

    </div>
  );
};

export default TheStrategyPage;
