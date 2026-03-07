import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import blueBg from "../assets/blueBg.png";

/* ─── Data ─────────────────────────────────────── */
const officers = [
  {
    initials: "MJ",
    name: "Melody E",
    role: "President / Branch Chair",
    major: "Computer Engineering",
    year: "Senior",
    bio: "Leading the Trojan chapter with vision for technical and professional systems.",
    email: "me@vsu.edu",
    phone: "",
  },
  {
    initials: "AW",
    name: "Kwabena",
    role: "Vice President / Vice Chair",
    major: "Computer Science",
    year: "Any Year",
    bio: "Driving the mission forward and ensuring every initiative runs with Trojan precision.",
    email: "kw@vsu.edu",
    phone: "",
  },
  {
    initials: "DC",
    name: "Eleni Nekonnen",
    role: "Secretary",
    major: "Computer Science",
    year: "Junior",
    bio: "Maintains official records, ensuring our operations stay sharp and documented.",
    email: "ene@vsu.edu",
    phone: "",
  },
  {
    initials: "DC",
    name: "Eleni Nekonnen",
    role: "Secretary",
    major: "Computer Science",
    year: "Junior",
    bio: "Maintains official records, ensuring our operations stay sharp and documented.",
    email: "ene@vsu.edu",
    phone: "",
  }
];

const committees = [
  {
    name: "Technical Committee",
    desc: "Organizes technical workshops, hackathons, and hands-on training sessions.",
    chair: "__@vsu.edu",
    members: ["Sarah Martinez", "Noah Brown", "Holly Davis", "Jordan Lee"],
  },
  {
    name: "Events & Activities Committee",
    desc: "Plans and coordinates all chapter events, socials, and networking opportunities.",
    chair: "__@vsu.edu",
    members: ["Rachel Green", "James Wilson", "Lisa Anderson", "Tyler Scott"],
  },
  {
    name: "Outreach & Community Service",
    desc: "Manages K-12 STEM programs and community technology initiatives.",
    chair: "__@vsu.edu",
    members: ["Chris Taylor", "Amanda White", "Brian Harris", "Olivia Rivera"],
  },
  {
    name: "Communications & Media",
    desc: "Handles social media, newsletters, website updates, and public relations.",
    chair: "__@vsu.edu",
    members: ["Ashley Moore", "Tyler Jackson", "Viola Davis", "Ryan Davis"],
  },
];

/* ─── Icon helpers ──────────────────────────────── */
const MailIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z" />
  </svg>
);
const PinIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ─── Component ─────────────────────────────────── */
const TrojanLeaders = () => {
  return (
    <div className="flex flex-col">
      <div className="z-50 sticky top-0">
        <NavBar />
      </div>

      {/* ── HERO ── */}
      <div className="relative">
        <img
          className="h-[30vh] sm:h-[50vh] w-full object-cover relative"
          src={blueBg}
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl mb-4 uppercase tracking-widest">
            Trojan Leaders
          </h2>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold text-white leading-tight uppercase">
            The <span className="text-IEEE-Orange">Command</span> Center
          </h1>
          <p className="text-Blue-Grey mt-4 lg:text-lg md:text-base text-sm font-semibold max-w-xl">
            Meet the dedicated Trojans leading our chapter to excellence and
            innovation.
          </p>
        </div>
        <div className="absolute sm:top-4 top-4 right-4 text-sm font-medium text-white bg-IEEE-Orange px-4 py-1 rounded-lg shadow-lg">
          <p>Last Updated: February 25, 2026 at 10:48 AM</p>
        </div>
      </div>

      {/* ── BRANCH OFFICERS ── */}
      <div className="bg-white px-6 md:px-[8%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Blue rounded-full shadow-xl inline-block mb-4 uppercase tracking-widest border border-white/20">
            Executive Board 2025–2026
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-IEEE-Blue uppercase">
            Branch <span className="text-IEEE-Orange">Officers</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {officers.map((o, i) => (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-IEEE-Orange hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              {/* Top navy bar with avatar */}
              <div className="bg-IEEE-Blue h-20 flex items-end justify-start px-5 pb-0 relative">
                <div className="absolute bottom-[-20px] left-5 w-12 h-12 rounded-full bg-IEEE-Orange flex items-center justify-center text-white font-extrabold text-sm border-2 border-white shadow-md">
                  {o.initials}
                </div>
              </div>

              <div className="pt-8 px-5 pb-5 flex flex-col flex-1">
                <h4 className="text-sm font-extrabold uppercase text-IEEE-Blue leading-tight mb-0.5">
                  {o.name}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-wide text-IEEE-Orange mb-1">
                  {o.role}
                </p>
                <p className="text-xs text-gray-500 mb-0.5">{o.major}</p>
                <p className="text-xs text-gray-400 italic mb-3">{o.year}</p>

                {o.bio && (
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 flex-1">
                    {o.bio}
                  </p>
                )}

                <div className="flex flex-col gap-1 mb-3">
                  {o.email && (
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="text-IEEE-Orange">
                        <MailIcon />
                      </span>
                      {o.email}
                    </span>
                  )}
                  {o.phone && (
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="text-IEEE-Orange">
                        <PhoneIcon />
                      </span>
                      {o.phone}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <span className="text-gray-400 hover:text-IEEE-Orange cursor-pointer transition-colors">
                    <MailIcon />
                  </span>
                  <span className="text-gray-400 hover:text-IEEE-Orange cursor-pointer transition-colors">
                    <LinkedInIcon />
                  </span>
                  <span className="text-gray-400 hover:text-IEEE-Orange cursor-pointer transition-colors">
                    <GithubIcon />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BRANCH ADVISOR ── */}
      <div className="bg-IEEE-Blue px-6 md:px-[8%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl inline-block mb-4 uppercase tracking-widest">
            Faculty Leadership
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-white uppercase">
            Branch Advisor
          </h3>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-[#001e3c] border-2 border-IEEE-Orange rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-IEEE-Orange flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4 shadow-lg">
              RA
            </div>
            <h4 className="text-lg font-extrabold uppercase text-white mb-1">
              Christopher Washington, Ph.D.
            </h4>
            <p className="text-xs font-bold uppercase tracking-widest text-IEEE-Orange mb-1">
              Faculty Counselor
            </p>
            <p className="text-sm text-[#c0d8ef] mb-5">
              Electrical & Computer Engineering
            </p>
            <div className="flex flex-col gap-2 items-center">
              <span className="flex items-center gap-2 text-sm text-[#a0bfdf]">
                <span className="text-IEEE-Orange">
                  <MailIcon />
                </span>
                CWashington@vsu.edu
              </span>
              <span className="flex items-center gap-2 text-sm text-[#a0bfdf]">
                <span className="text-IEEE-Orange">
                  <PhoneIcon />
                </span>
                804-524-1924
              </span>
              <span className="flex items-center gap-2 text-sm text-[#a0bfdf]">
                <span className="text-IEEE-Orange">
                  <PinIcon />
                </span>
                Engineering Building, Room 201
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CHAPTER COMMITTEES ── */}
      <div className="bg-gray-50 px-6 md:px-[8%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl inline-block mb-4 uppercase tracking-widest">
            Strategic Units
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-IEEE-Blue uppercase">
            Chapter <span className="text-IEEE-Orange">Committees</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {committees.map((c, i) => (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-IEEE-Orange hover:shadow-md"
            >
              <h4 className="text-sm font-extrabold uppercase text-IEEE-Blue mb-2 tracking-wide">
                {c.name}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {c.desc}
              </p>

              <p className="text-[10px] font-bold uppercase tracking-widest text-IEEE-Orange mb-1">
                Committee Chair:
              </p>
              <div className="w-8 h-0.5 bg-IEEE-Orange mb-1" />
              <p className="text-xs text-gray-500 mb-4">{c.chair}</p>

              <p className="text-[10px] font-bold uppercase tracking-widest text-IEEE-Blue mb-2">
                Committee Members:
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {c.members.map((m, j) => (
                  <span
                    key={j}
                    className="flex items-center gap-1.5 text-xs text-gray-500"
                  >
                    <span className="text-IEEE-Orange">▸</span>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WEB ADMINISTRATOR ── */}
      <div className="bg-white px-6 md:px-[8%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl inline-block mb-4 uppercase tracking-widest">
            Digital Command
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-IEEE-Blue uppercase">
            Web <span className="text-IEEE-Orange">Administrator</span>
          </h3>
        </div>

        <div className="max-w-lg mx-auto border-2 border-IEEE-Orange rounded-xl p-8 text-center">
          <h4 className="text-base font-extrabold uppercase text-IEEE-Blue mb-1">
            VSU IEEE Web Team
          </h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-IEEE-Orange mb-4">
            Web Administrator & Digital Communications
          </p>
          <div className="flex flex-col gap-1.5 items-center mb-4 text-sm text-gray-500">
            <span>Lead: Alex Nickerson</span>
            <span>Aaron Wilcots</span>
          </div>
          <span className="flex items-center justify-center gap-2 text-sm text-IEEE-Blue font-semibold mb-4">
            <span className="text-IEEE-Orange">
              <MailIcon />
            </span>
            webmaster@vsu-ieee.org
          </span>
          <p className="text-xs text-gray-400 italic">
            For website updates, technical issues, or digital communications
            inquiries.
          </p>
        </div>
      </div>

      {/* ── LEAD THE TROJAN ARMY CTA ── */}
      <div className="bg-IEEE-Orange px-6 md:px-[8%] py-20 text-center">
        <h3 className="lg:text-6xl md:text-5xl text-4xl font-extrabold uppercase mb-6 leading-tight">
          <span className="text-white">Lead The </span>
          <span className="text-IEEE-Blue">Trojan</span>
          <span className="text-white"> Army</span>
        </h3>
        <p className="text-white/90 lg:text-lg md:text-base text-sm font-semibold max-w-xl mx-auto mb-8 leading-relaxed">
          Interested in a leadership position? We're always seeking motivated
          Trojans to join our officer corps and committee teams. Elections are
          held annually each spring semester.
        </p>
        <Link to="/enlistment">
          <button className="px-10 py-4 bg-IEEE-Blue text-white font-extrabold uppercase tracking-widest rounded-xl shadow-xl text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#001e3c]">
            Get Involved Today
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default TrojanLeaders;
