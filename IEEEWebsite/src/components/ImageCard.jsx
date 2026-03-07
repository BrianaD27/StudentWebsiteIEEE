import React from "react";

const ImageCard = ({ date, title, description, img }) => {
  return (
    <div className="md:w-100 w-auto h-auto border-t-5 border-IEEE-Orange rounded-2xl flex flex-col shadow-xl overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-auto h-1/2 object-cover"
      />

      <div className="w-full h-1/2 bg-white rounded-b-2xl flex flex-col justify-center gap-1 p-3 px-5">
        <p className="text-IEEE-Orange font-bold text-sm uppercase">{date}</p>
        <h1 className="text-IEEE-Blue font-extrabold text-xl">{title}</h1>
        <p className="text-Soft-Grey">{description}</p>
      </div>

    </div>
  );
};

export default ImageCard;
