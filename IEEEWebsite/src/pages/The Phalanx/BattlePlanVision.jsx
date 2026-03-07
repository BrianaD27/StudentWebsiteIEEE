import React, { useState } from "react";
import LargeCard from "../../components/LargeCard";
import targetIcon from "../../assets/targetIcon.png"
import eyeIcon from "../../assets/eyeIcon.png"

const cards = [
    {title: "Our Battle Plan", subheader: "MISSION:", description: "To advance technology for the benefit of humanity by:", b1: "Empowering VSU's engineering students with cutting-edge technical skills and professional development", b2: "Fostering innovation through hands-on projects and industry collaboration", b3: "Building a diverse, inclusive community of future technology leaders", b4: "Upholding the Trojan standard of excellence in all endeavors", img: targetIcon},
    {title: "Our Vision", subheader: "VISION:", description: "To be recognized as:", b1: "The premier IEEE student branch among HBCUs nationwide", b2: "A model organization for diversity and inclusion in STEM", b3: "The launchpad for exceptional engineering careers", b4: "Champions of technological innovation serving our community", img: eyeIcon}
]

const BattlePlanVision = () => {
    const [current, setCurrent] = useState(0);
      const prev = () => setCurrent((p) => (p - 1 + cards.length) % cards.length);
      const next = () => setCurrent((p) => (p + 1) % cards.length);
    
      const mobileVisible = [cards[current % cards.length]];
  return (
    <div className="h-auto w-full flex flex-row md:px-15 px-7 bg-IEEE-Blue py-20">

      <div className="lg:flex hidden flex-row gap-15">
        {cards.map((card, i) => (
            <LargeCard key={i} title={card.title} subheader={card.subheader} description={card.description} b1={card.b1} b2={card.b2} b3={card.b3} b4={card.b4} img={card.img}/>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden items-center justify-center gap-3">
        <button onClick={prev} className="text-2xl text-white font-bold">
          {"<"}
        </button>
        <div className="flex flex-col sm:flex-row items-center">
          {mobileVisible.map((card, i) => (
          <LargeCard key={i} title={card.title} subheader={card.subheader} description={card.description} b1={card.b1} b2={card.b2} b3={card.b3} b4={card.b4} img={card.img}/>
        ))}
        </div>

        <button onClick={next} className="text-2xl text-white font-bold">
          {">"}
        </button>
      </div>


    </div>
  );
};

export default BattlePlanVision;
