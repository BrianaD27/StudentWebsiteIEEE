import React, { useState } from "react";
import SmallCard from "../../components/SmallCard";

const cards = [
  { title: "NEW", description: "STUDENT BRANCH" },
  { title: "15+", description: "FOUNDING MEMBERS" },
  { title: "50+", description: "SUCCESSFUL EVENTS" },
  { title: "#1", description: "VSU ENGINEERING ORGANIZATION" },
];

const StatsPage = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p - 1 + cards.length) % cards.length);
  const next = () => setCurrent((p) => (p + 1) % cards.length);

const visible = [cards[current % cards.length], cards[(current + 1) % cards.length]];

  return (
    <div>
      <div className="w-full bg-IEEE-Orange h-1"></div>
      <div className="h-auto w-full bg-IEEE-Blue justify-center py-20">
        <div className="flex flex-col items-center justify-center h-full w-full gap-13 text-center">
          <h1 className="text-white text-4xl font-extrabold">
            BUILDING TROJAN{" "}
            <span className="text-IEEE-Orange">EXCELLENCE</span>{" "}
          </h1>

          {/* PC View */}
          <div className="md:flex md:flex-row gap-3 hidden md:items-center md:justify-center md:px-5 w-full">
            {cards.map((cards, i) => (
              <SmallCard
                key={i}
                title={cards.title}
                description={cards.description}
              />
            ))}
          </div>

          {/* mobile View */}
          <div className="flex md:hidden items-center justify-center gap-5">
            <button onClick={prev} className="text-2xl text-white font-bold">
              {"<"}
            </button>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              {visible.map((card, i) => (
                <SmallCard key={i} title={card.title} description={card.description}/>
              ))}
            
            </div>

            <button onClick={next} className="text-2xl text-white font-bold">
              {">"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsPage;
