import React, { useState } from "react";
import MediumRectCard from "../../components/MediumRectCard";
import targetIcon from "../../assets/targetIcon.png"
import peopleIcon from "../../assets/peopleIcon.png"
import upArrowIcon from "../../assets/upArrowIcon.png"
import shieldIcon from "../../assets/shieldIcon.png"

const cards = [
  {
    title: "HBCU LEADERSHIP",
    description:
      "As a leading HBCU in IEEE Region 3, VSU brings unique perspectives and innovative approaches to technology education. We champion diversity in STEM and create pathways for underrepresented communities to excel in engineering.",
    icon: targetIcon,
  },
  {
    title: "COMMUNITY IMPACT",
    description:
      "Our branch serves the Greater Petersburg community through K-12 STEM outreach programs, tech literacy workshops, and partnerships with local schools—creating a pipeline of future Trojan engineers.",
    icon: peopleIcon,
  },
  {
    title: "INDUSTRY PARTNERSHIPS",
    description:
      "Exclusive partnerships with NASA Langley, Dominion Energy, and Richmond tech startups provide our members with internship opportunities, capstone projects, and direct paths to career placement.",
    icon: upArrowIcon,
  },
  {
    title: "TROJAN RESILIENCE",
    description:
      "The legendary VSU Trojan spirit—marked by determination, unity, and excellence—drives our members to overcome challenges and achieve extraordinary success in competitions and career outcomes.",
    icon: shieldIcon,
  },
];

const AdvantagePage = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p - 1 + cards.length) % cards.length);
  const next = () => setCurrent((p) => (p + 1) % cards.length);

  const tabletVisible = [
    cards[current % cards.length],
    cards[(current + 1) % cards.length],
  ];

  const mobileVisible = [cards[current % cards.length]];

  return (
    <div className="h-auto w-full flex flex-col items-center justify-start py-20 px-10 bg-linear-to-b from-IEEE-Orange to-IEEE-Dark-Orange">
      <p className="bg-IEEE-Blue text-white px-4 py-2 rounded-full font-bold my-4 text-center">
        IEEE REGION 3 EXCELLENCE
      </p>
      <h1 className="text-4xl font-extrabold mb-4 text-white text-center">
        THE <span className="text-IEEE-Blue">VSU </span> ADVANTAGE
      </h1>
      <p className="font-bold text-2xl mb-4 text-white text-center">
        What Makes VSU IEEE the Premier Student Branch in Region 3
      </p>

      {/* Pc View */}
      <div className="hidden xl:grid grid-cols-2 place-items-center gap-y-5 px-30 gap-x-4 w-full mt-8">
        {cards.map((cards, i) => (
          <MediumRectCard
            key={i}
            title={cards.title}
            description={cards.description}
            icon={cards.icon}
          />
        ))}
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex xl:hidden items-center justify-center gap-15">
        <button onClick={prev} className="text-2xl text-IEEE-Blue font-bold">
          {"<"}
        </button>
        <div className="flex w-[70%] flex-col gap-3 items-center">
          {tabletVisible.map((cards, i) => (
          <MediumRectCard
            key={i}
            title={cards.title}
            description={cards.description}
            icon={cards.icon}
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
          <MediumRectCard
            key={i}
            title={cards.title}
            description={cards.description}
            icon={cards.icon}
          />
        ))}
        </div>

        <button onClick={next} className="text-2xl text-IEEE-Blue font-bold">
          {">"}
        </button>
      </div>

      <h1 className="text-2xl font-bold mt-10 text-white text-center">
        GREATER HAPPENS HERE • TROJAN PRIDE • IEEE EXCELLENCE
      </h1>
    </div>
  );
};

export default AdvantagePage;
