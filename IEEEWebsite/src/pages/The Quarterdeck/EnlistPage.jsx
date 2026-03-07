import React from "react";
import rightArrow from "../../assets/rightArrow.png"
import { Link } from "react-router-dom";


const EnlistPage = () => {
  return (
    <div className="flex flex-col w-full h-auto ">
      <div className="h-2 w-full bg-IEEE-Orange"></div>
      <div className="bg-IEEE-Blue h-auto flex flex-col items-center justify-center py-15 px-7 gap-5">
        <h1 className="text-white text-6xl font-extrabold uppercase text-center">
          Ready to Join the <span className="text-IEEE-Orange">Legion</span>?
        </h1>
        <p className="text-white max-w-xl text-center font-bold ">
          Become part of VSU's elite engineering force. The Trojan army is
          recruiting motivated students ready to change the world.
        </p>
        <Link
          to="/enlistment"
          className="text-white bg-IEEE-Orange flex flex-row justify-center items-center uppercase font-bold px-5 py-3 rounded-2xl mt-5 gap-2"
        >
          Enlist Today
          <img className="w-10" src={rightArrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default EnlistPage;
