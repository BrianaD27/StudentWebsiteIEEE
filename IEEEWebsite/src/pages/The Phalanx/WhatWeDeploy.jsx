import { useState, useEffect, useRef } from "react";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "TECHNICAL WORKSHOPS",
    items: [
      "Advanced programming bootcamps (Python, C++, JavaScript)",
      "Circuit design and PCB fabrication",
      "AI/ML and data science training",
      "Robotics and embedded systems projects",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    title: "COMPETITIONS & HACKATHONS",
    items: [
      "Annual Hack on the hill VSU Hackthon",
      "IEEE regional and national design contests",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "NETWORKING EVENTS",
    items: [
      "Industry leader guest speaker series",
      "Career fairs with Fortune 500 companies",
      "Alumni networking mixers",
      "Professional development seminars",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "PROJECT TEAMS",
    items: ["Autonomous vehicle development"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "LEADERSHIP DEVELOPMENT",
    items: [
      "Officer training and mentorship programs",
      "Project management workshops",
      "Public speaking and presentation skills",
      "Team leadership opportunities",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "COMMUNITY OUTREACH",
    items: [
      "K-12 STEM education programs",
      "Tech literacy workshops for seniors",
      "Local school robotics mentoring",
      "Petersburg community tech initiatives",
    ],
  },
];

function CardContent({ card }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden h-full">
      <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-orange-500 opacity-80" />
      <div className="w-12 h-12 rounded-xl bg-[#1a2e5a] flex items-center justify-center text-orange-400 mb-4 ml-2">
        {card.icon}
      </div>
      <h3 className="text-[#1a2e5a] font-extrabold text-base tracking-wide mb-3 ml-2 leading-snug">
        {card.title}
      </h3>
      <ul className="space-y-2 ml-2">
        {card.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(null);
  const total = cards.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const onTouchStart = (e) => { dragStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStartX.current = null;
  };

  return (
    <div className="relative w-full select-none">
      {/* Sliding track */}
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {cards.map((card, i) => (
            <div key={i} className="w-full shrink-0">
              <CardContent card={card} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous card"
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#1a2e5a] hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200 z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next card"
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#1a2e5a] hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200 z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-5">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to card ${i + 1}`}
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              backgroundColor: i === current ? "#f97316" : "#cbd5e1",
              borderRadius: "9999px",
              transition: "all 0.3s ease",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-xs text-gray-400 mt-2 font-medium tracking-wide">
        {current + 1} / {total}
      </p>
    </div>
  );
}

export default function WhatWeDeploy() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8">
      {/* Header */}
      <div
        className="text-center mb-14"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div className="inline-block bg-orange-500 text-white text-xs font-bold tracking-widest px-5 py-2 rounded-full mb-5 uppercase">
          The Strategy
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a2e5a] mb-4 leading-tight">
          WHAT WE <span className="text-orange-500">DEPLOY</span>
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Comprehensive programs designed to forge well-rounded technology professionals
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Mobile carousel (hidden on sm+) */}
        <div className="block sm:hidden px-5">
          <MobileCarousel />
        </div>

        {/* Grid (hidden below sm) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 80 + 200}ms, transform 0.5s ease ${i * 80 + 200}ms`,
              }}
            >
              <CardContent card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
