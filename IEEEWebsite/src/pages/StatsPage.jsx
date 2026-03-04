import React from "react";
import SmallCard from "../components/SmallCard";

const StatsPage = () => {
  return (
    <div className="h-[45vh] w-full bg-IEEE-Blue justify-center">
      <div className="w-full bg-IEEE-Orange h-1"></div>
      <div className="flex flex-col items-center justify-center h-full w-full gap-13">
        <h1 className="text-white text-4xl font-extrabold">
          BUILDING TROJAN{" "}
          <span className="text-IEEE-Orange">EXCELLENCE</span>{" "}
        </h1>
        <div className="flex flex-row items-center justify-around w-full">
          <SmallCard title={"NEW"} description={"STUDENT BRANCH"} />
          <SmallCard title={"15+"} description={"FOUNDING MEMBERS"} />
          <SmallCard title={"50+"} description={"EVENTS SUCCESSFUL EVENTS"} />
          <SmallCard
            title={"#1"}
            description={"VSU ENGINEERING ORGANIZATION"}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
