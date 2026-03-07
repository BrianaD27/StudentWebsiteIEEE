import React, { useState } from "react";
import ImageCard from "../../components/ImageCard";
import hackathonPic from "../../assets/hackathonPic.jpeg"
import pcbClass from "../../assets/pcbClass.jpg"
import rightOrangeArrow from "../../assets/rightOrangeArrow.png"
import summitPic from "../../assets/summitPic.jpeg"
import { Link } from "react-router-dom";

const cards = [
  {
    date: "March 15, 2026",
    title: "HACKATHON",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde ad et corporis! Officia, sint eveniet delectus accusantium ullam vel temporibus! Cumque sed nesciunt placeat fuga. Repudiandae, officia! Est, voluptas!",
    img: hackathonPic,
  },
  {
    date: "March 22, 2026",
    title: "PCB Design Bootcamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde ad et corporis! Officia, sint eveniet delectus accusantium ullam vel temporibus! Cumque sed nesciunt placeat fuga. Repudiandae, officia! Est, voluptas!",
    img: pcbClass,
  },
  {
    date: "April 5, 2026",
    title: "Tech Titans Summit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde ad et corporis! Officia, sint eveniet delectus accusantium ullam vel temporibus! Cumque sed nesciunt placeat fuga. Repudiandae, officia! Est, voluptas!",
    img: summitPic,
  },
];

const UpcomingBattles = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p - 1 + cards.length) % cards.length);
  const next = () => setCurrent((p) => (p + 1) % cards.length);

  const tabletVisible = [
    cards[current % cards.length],
    cards[(current + 1) % cards.length],
  ];

  const mobileVisible = [cards[current % cards.length]];

  return (
    <div className="w-full h-auto flex flex-col justify-center md:px-15 px-5 py-20 gap-15">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col">
          <p className="bg-IEEE-Blue text-white px-4 py-2 md:w-45 w-40 text-sm md:text-base rounded-full font-bold uppercase">
            Next Campaigns
          </p>
          <h1 className="text-IEEE-Blue md:text-3xl text-xl font-bold uppercase">
            Upcoming Battles
          </h1>
        </div>
        <Link
          to="/trail"
          className="flex flex-row items-center gap-1 text-IEEE-Orange font-bold uppercase"
        >
          View All
          <img
            src={rightOrangeArrow}
            alt="Arrow Icon"
            className=" w-5 h-5"
          />
        </Link>
      </div>

      {/* PC View */}
      <div className="hidden xl:flex flex-row items-center justify-center gap-10">
        {cards.map((cards, i) => (
          <ImageCard
            key={i}
            date={cards.date}
            title={cards.title}
            description={cards.description}
            img={cards.img}
          />
        ))}
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex xl:hidden items-center justify-center gap-10 w-full">
        <button onClick={prev} className="text-2xl text-IEEE-Blue font-bold">
          {"<"}
        </button>
        <div className="flex w-[70%] flex-row gap-3 items-center">
          {tabletVisible.map((cards, i) => (
            <ImageCard
            key={i}
            date={cards.date}
            title={cards.title}
            description={cards.description}
            img={cards.img}
          />
          ))}
        </div>

        <button onClick={next} className="text-2xl text-IEEE-Blue font-bold">
          {">"}
        </button>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center justify-center gap-5">
        <button onClick={prev} className="text-2xl text-IEEE-Blue font-bold">
          {"<"}
        </button>
        <div className="flex flex-col sm:flex-row items-center">
          {mobileVisible.map((cards, i) => (
            <ImageCard
            key={i}
            date={cards.date}
            title={cards.title}
            description={cards.description}
            img={cards.img}
          />
          ))}
        </div>

        <button onClick={next} className="text-2xl text-IEEE-Blue font-bold">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default UpcomingBattles;
