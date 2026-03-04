import React from "react";

const MediumCard = () => {
  return (
    <div className="w-100 h-100 bg-linear-to-b from-IEEE-Blue to-IEEE-Bright-Blue rounded-lg shadow-lg border-2 border-IEEE-Orange p-5 flex flex-col gap-1">
      <div className="w-20 h-20 bg-IEEE-Orange border-IEEE-Orange rounded-2xl flex items-center justify-center">
        <img className="w-10 h-10" src="../../src/assets/boltIcon.png" alt="" />
      </div>
      <h1 className="text-white text-2xl font-bold mt-4"> ELITE NETWORKING</h1>
      <ul className="list-['-_'] px-3 list-outside marker:text-IEEE-Orange text-lg text-Blue-Grey space-y-2">
        <li>Connect with Fortune 500 industry leaders</li>
        <li>Access VSU alumni network in top tech companies</li>
        <li>Mentorship from IEEE professionals worldwide</li>
      </ul>
    </div>
  );
};

export default MediumCard;
