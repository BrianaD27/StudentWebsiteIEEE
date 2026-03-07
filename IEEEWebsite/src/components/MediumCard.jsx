import React from "react";

const MediumCard = ({title, icon, b1, b2, b3}) => {
  return (
    <div className="md:w-100 md:h-120 w-70 h-120 bg-linear-to-b from-IEEE-Blue to-IEEE-Bright-Blue rounded-lg shadow-xl border-5 border-IEEE-Orange p-5 flex flex-col gap-1">
      <div className="w-15 h-15 bg-IEEE-Orange border-IEEE-Orange rounded-2xl flex items-center justify-center">
        <img className="w-8 h-8" src={icon} alt="" />
      </div>
      <h1 className="text-white text-2xl font-bold mt-4 uppercase">{title}</h1>
      <ul className="list-['-_'] px-3 list-outside marker:text-IEEE-Orange text-lg text-Blue-Grey space-y-2">
        <li>{b1}</li>
        <li>{b2}</li>
        <li>{b3}</li>
      </ul>
    </div>
  );
};

export default MediumCard;
