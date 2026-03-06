import React from "react";

/* ─── Data ─────────────────────────────────────── */
const battlePlanItems = [
  "Empowering VSU's engineering students with cutting-edge technical skills and professional development",
  "Fostering innovation through hands-on projects and industry collaboration",
  "Building a diverse, inclusive community of future technology leaders",
  "Upholding the Trojan standard of excellence in all endeavors",
];

const visionItems = [
  "The premier IEEE student branch among HBCUs nationwide",
  "A model organization for diversity and inclusion in STEM",
  "The launchpad for exceptional engineering careers",
  "Champions of technological innovation serving our community",
];

const deployCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Technical Workshops",
    items: [
      "Advanced programming bootcamps (Python, C++, JavaScript)",
      "Circuit design and PCB fabrication",
      "AI/ML and data science training",
      "Robotics and embedded systems projects",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
      </svg>
    ),
    title: "Competitions & Hackathons",
    items: [
      "Annual Hack at the Hill VSU tradition",
      "IEEE regional and national design contests",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Networking Events",
    items: [
      "Industry leaders guest speaker series",
      "Career fairs with Fortune 500 companies",
      "Alumni networking mixers",
      "Professional development seminars",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 11 19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
    title: "Project Teams",
    items: [
      "Autonomous vehicle development",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Leadership Development",
    items: [
      "Officer training and mentorship programs",
      "Project management workshops",
      "Public speaking and presentation skills",
      "Team leadership opportunities",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Community Outreach",
    items: [
      "K-12 STEM education programs",
      "Tech literacy workshops for seniors",
      "Local school robotics mentoring",
      "Promoting community tech initiatives",
    ],
  },
];

const globalStats = [
  { value: "400,000+", label: "members" },
  { value: "160+", label: "countries" },
  { value: "39", label: "technical societies" },
];

const globalBenefits = [
  "Access to 5+ million technical documents and research papers",
  "Global conference and networking opportunities",
  "Professional certifications and continuing education",
  "Career resources and job placement assistance",
];

/* ─── Component ─────────────────────────────────── */
const BranchMissionPage = () => {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <div className="relative">
        <div className="h-[40vh] w-full bg-IEEE-Blue border-b-4 border-IEEE-Orange" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl mb-4 uppercase tracking-widest">
            The Phalanx
          </h2>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold text-white leading-tight uppercase">
            About IEEE <span className="text-IEEE-Orange">VSU</span>
          </h1>
          <p className="text-Blue-Grey mt-4 lg:text-lg md:text-base text-sm font-semibold max-w-xl">
            Where Trojan spirit meets technological excellence—building the future one innovation at a time.
          </p>
        </div>
        <div className="absolute sm:top-4 top-4 right-4 text-sm font-medium text-white bg-IEEE-Orange px-4 py-1 rounded-lg shadow-lg">
          <p>Last Updated: February 25, 2026 at 10:48 AM</p>
        </div>
      </div>

      {/* ── OUR TROJAN BEGINNING ── */}
      <div className="bg-white px-6 md:px-[8%] py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-IEEE-Orange/10 border-2 border-IEEE-Orange text-IEEE-Orange flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-IEEE-Blue">OUR TROJAN BEGINNING</h3>
          </div>
          <p className="text-Text-Grey leading-relaxed mb-6">
            Founded in 2024, the IEEE Student Branch at Virginia State University represents
            the first IEEE presence at an HBCU in over a decade. Our chapter embodies the
            Trojan spirit—resilience, excellence, and innovation—that defines VSU's legacy
            of producing trailblazing engineers and leaders.
          </p>
          <p className="text-Text-Grey leading-relaxed">
            As part of IEEE Region 3 (Southeastern United States), we serve as a beacon
            for underrepresented communities in STEM, demonstrating that excellence knows
            no boundaries and innovation thrives in diversity.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/src/assets/vsu-ieee-logo.png"
            alt="VSU IEEE Logo"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>

      {/* ── BATTLE PLAN ── */}
      <div className="bg-IEEE-Blue/5 px-6 md:px-[8%] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-IEEE-Blue uppercase mb-4">BATTLE PLAN</h2>
          <p className="text-Text-Grey max-w-2xl mx-auto">
            Our strategic objectives guide every initiative, ensuring we deliver maximum impact
            for our members and community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {battlePlanItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-IEEE-Orange">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-IEEE-Orange text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-Text-Grey leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OUR VISION ── */}
      <div className="bg-white px-6 md:px-[8%] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-IEEE-Blue uppercase mb-4">OUR VISION</h2>
          <p className="text-Text-Grey max-w-2xl mx-auto">
            We envision a future where VSU IEEE becomes the gold standard for student branches,
            inspiring generations of engineers to push boundaries and create solutions that matter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visionItems.map((item, index) => (
            <div key={index} className="bg-IEEE-Blue/5 p-6 rounded-lg border-l-4 border-IEEE-Blue">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-IEEE-Blue text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">★</span>
                </div>
                <p className="text-Text-Grey leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DEPLOY ── */}
      <div className="bg-IEEE-Blue/5 px-6 md:px-[8%] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-IEEE-Blue uppercase mb-4">DEPLOY</h2>
          <p className="text-Text-Grey max-w-2xl mx-auto">
            Our comprehensive program initiatives ensure every member has opportunities to grow,
            learn, and contribute to the technological advancement of our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deployCards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-IEEE-Orange/10 border-2 border-IEEE-Orange text-IEEE-Orange flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-IEEE-Blue">{card.title}</h3>
              </div>
              <ul className="space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-Text-Grey text-sm flex items-start gap-2">
                    <span className="text-IEEE-Orange mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── GLOBAL IEEE CONNECTION ── */}
      <div className="bg-white px-6 md:px-[8%] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-IEEE-Blue uppercase mb-6">GLOBAL IEEE CONNECTION</h2>
            <p className="text-Text-Grey leading-relaxed mb-6">
              As part of the world's largest technical professional organization, our members gain
              access to unparalleled resources, networks, and opportunities that span the globe.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {globalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-extrabold text-IEEE-Orange">{stat.value}</div>
                  <div className="text-sm text-Text-Grey uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-3">
              {globalBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-IEEE-Blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-Text-Grey">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-IEEE-Blue/10 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-extrabold text-IEEE-Blue mb-2">IEEE</div>
                <div className="text-IEEE-Orange font-bold">GLOBAL NETWORK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BranchMissionPage;