import React, { useState } from "react";
import MediumCard from "../../components/MediumCard";
import shieldIcon from "../../assets/shieldIcon.png"
import boltIcon from "../../assets/boltIcon.png"
import medalIcon from "../../assets/medalIcon.png"

const cards = [
  {
    title: "Elite Networking",
    icon: shieldIcon,
    b1: "Connect with Fortune 500 industry leaders",
    b2: "Access VSU alumni network in top tech companies",
    b3: "Mentorship from IEEE professionals worldwide",
  },
  {
    title: "Technical Mastery",
    icon: boltIcon,
    b1: "Hands-on workshops in AI, robotics, and IoT",
    b2: "Access to cutting-edge lab equipment and software",
    b3: "Industry certifications and training programs",
  },
  {
    title: "Victory & Recognition",
    icon: medalIcon,
    b1: "Compete in national hackathons and design challenges",
    b2: "Resume-building leadership positions",
    b3: "IEEE scholarship and award opportunities",
  },
];

const TheStrategyPage = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p - 1 + cards.length) % cards.length);
  const next = () => setCurrent((p) => (p + 1) % cards.length);

  const tabletVisible = [
    cards[current % cards.length],
    cards[(current + 1) % cards.length],
  ];

  const mobileVisible = [cards[current % cards.length]];

  return (
    <div className="h-auto flex flex-col items-center justify-start px-[15%] py-20 ">
      <p className="bg-IEEE-Orange text-white px-4 py-2 rounded-full font-bold my-4">
        THE STRATEGY
      </p>
      <h1 className="text-4xl font-extrabold mb-4 text-IEEE-Blue text-center">
        WHY JOIN THE TROJAN LEGION?
      </h1>
      <p className="font-normal text-2xl mb-4 text-Text-Grey text-center">
        Equip yourself with the tools, network, and experience to dominate in
        the technology sector
      </p>

      {/* PC View */}
      <div className="hidden xl:flex lg:flex-row lg:items-center lg:justify-around lg:w-full lg:mt-10 lg:gap-10">
        {cards.map((cards, i) => (
          <MediumCard
            key={i}
            title={cards.title}
            icon={cards.icon}
            b1={cards.b1}
            b2={cards.b2}
            b3={cards.b3}
          />
        ))}
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex xl:hidden items-center justify-center gap-5">
        <button onClick={prev} className="text-2xl text-IEEE-Blue font-bold">
          {"<"}
        </button>
        <div className="flex w-[70%] sm:flex-row gap-3 items-center">
          {tabletVisible.map((cards, i) => (
          <MediumCard
            key={i}
            title={cards.title}
            icon={cards.icon}
            b1={cards.b1}
            b2={cards.b2}
            b3={cards.b3}
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
          <MediumCard
            key={i}
            title={cards.title}
            icon={cards.icon}
            b1={cards.b1}
            b2={cards.b2}
            b3={cards.b3}
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

export default TheStrategyPage;
