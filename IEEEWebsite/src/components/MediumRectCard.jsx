import React from "react";

const MediumRectCard = ({ title, description, icon}) => {
  return (
    <div className="md:w-full w-70 h-auto  md:h-65 bg-Smoke-Orange border-2 rounded-2xl border-white flex flex-row shadow-xl">
      <div className="w-full h-full flex flex-row gap-3 p-5">
        <div className="md:w-15 md:h-15 w-20 h-10 bg-IEEE-Blue rounded-2xl flex items-center justify-center">
          <img
            className="md:w-7 md:h-7 w-5 h-5" 
            src={icon}
            alt=""
          />
        </div>
        <div className="w-90 flex flex-col gap-2 ">
          <h1 className="text-white text-2xl font-bold">
            {title}
          </h1>
          <p className="text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediumRectCard;
