import React from "react";

/* ─── SVG Icon helpers ──────────────────────────── */
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

/* ─── Data ─────────────────────────────────────── */
const campaigns = [
  {
    tag: "Workshop",
    title: "PCB Design Bootcamp",
    date: "March 15–16, 2026",
    time: "9:00 AM – 9:00 PM (Both Days)",
    location: "Engineering Building",
    registered: "25 Registered",
    desc: "Comprehensive workshop on printed circuit board design using Altium Designer. Learn schematic capture, PCB layout, design rules, and manufacturing preparation. Design and order your own custom PCB!",
    imgBg: "bg-[#c0a080]",
  },
  {
    tag: "Networking",
    title: "Career Fair",
    date: "April 5, 2026",
    time: "10:00 AM – 5:00 PM",
    location: "Student Center Ballroom",
    registered: "40 Registered",
    desc: "Career fair featuring local technology companies and startups. Resume workshops, mock interviews, keynote presentations, and networking opportunities.",
    imgBg: "bg-[#445566]",
  },
];

const activities = [
  {
    title: "Weekly General Meetings",
    schedule: "Every Wednesday, 6:00 PM",
    location: "Engineering Building, Room 201",
    desc: "Technical presentations, project updates, and networking. Open to all VSU students interested in technology.",
  },
  {
    title: "Robotics Project Team",
    schedule: "Tuesdays & Thursdays, 4:00 PM",
    location: "Robotics Lab, Engineering Building",
    desc: "Designing an autonomous vehicle for regional IEEE competition. New members welcome!",
  },
  {
    title: "K-12 STEM Outreach",
    schedule: "Saturdays (Monthly), 10:00 AM",
    location: "Petersburg Public Schools",
    desc: "Teaching robotics and coding to local middle school students. Building the next generation of engineers.",
  },
];

const victories = [
  {
    date: "February 1, 2026",
    title: "Branch Kickoff Meeting",
    desc: "Inaugural meeting of IEEE VSU Student Branch with 15 founding members.",
    outcome: "13 founding members · Branch officially chartered",
  },
  {
    date: "February 22, 2026",
    title: "IEEE Day Celebration",
    desc: "Campus-wide event celebrating IEEE with tech demos and student project showcases.",
    outcome: "35 attendees · 6 new member signups",
  },
];

/* ─── Component ─────────────────────────────────── */
export default function CampaignTrail() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <div className="relative">
        <div className="h-[45vh] w-full bg-IEEE-Blue border-b-4 border-IEEE-Orange" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Blue border border-white/20 rounded-full shadow-xl mb-4 uppercase tracking-widest">
            The Campaign Trail
          </h2>
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-extrabold text-white leading-tight uppercase">
            Trojan <span className="text-IEEE-Orange">Activities</span>
          </h1>
          <p className="text-Blue-Grey mt-4 lg:text-lg md:text-base text-sm font-semibold max-w-xl">
            Join us for workshops, battles, networking events, and community service throughout the academic year.
          </p>
        </div>
        <div className="absolute sm:top-4 top-4 right-4 text-sm font-medium text-white bg-IEEE-Orange px-4 py-1 rounded-lg shadow-lg">
          <p>Last Updated: February 22, 2026 at 11:30 AM</p>
        </div>
      </div>

      {/* ── UPCOMING CAMPAIGNS ── */}
      <div className="bg-gray-50 px-6 md:px-[10%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl inline-block mb-4 uppercase tracking-widest">
            Next Battle
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-IEEE-Blue uppercase">
            Upcoming <span className="text-IEEE-Orange">Campaigns</span>
          </h3>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {campaigns.map((c, i) => (
            <div
              key={i}
              className="relative flex flex-col md:flex-row bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-IEEE-Orange hover:shadow-lg"
            >
              <span className="absolute top-3 left-0 bg-green-500 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-r-md z-10">
                Registration Open
              </span>
              <div className={`${c.imgBg} w-full md:w-52 min-h-40 shrink-0`} />
              <div className="flex flex-col flex-1 p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest border-2 border-gray-300 text-gray-500 rounded px-3 py-0.5 self-start mb-3">
                  {c.tag}
                </span>
                <h4 className="text-2xl font-extrabold uppercase text-IEEE-Blue mb-3 tracking-wide">
                  {c.title}
                </h4>
                <div className="flex flex-wrap gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="text-IEEE-Orange"><ClockIcon /></span>{c.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="text-IEEE-Orange"><ClockIcon /></span>{c.time}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="text-IEEE-Orange"><PinIcon /></span>{c.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="text-IEEE-Orange"><UsersIcon /></span>{c.registered}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{c.desc}</p>
                <button className="self-start px-6 py-2.5 bg-IEEE-Orange text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-[#e55f00]">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CURRENT ACTIVITIES ── */}
      <div className="bg-IEEE-Blue px-6 md:px-[10%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Blue border border-white/20 rounded-full shadow-xl inline-block mb-4 uppercase tracking-widest">
            Ongoing Operations
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-white uppercase">
            Current <span className="text-IEEE-Orange">Activities</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {activities.map((a, i) => (
            <div
              key={i}
              className="bg-[#001e3c] border-2 border-[#1e4d8c] rounded-xl p-6 transition-all duration-300 hover:border-IEEE-Orange hover:-translate-y-1"
            >
              <h4 className="text-base font-extrabold uppercase text-white mb-3 leading-tight tracking-wide">
                {a.title}
              </h4>
              <div className="flex items-start gap-2 text-xs text-[#a0bfdf] mb-1.5">
                <span className="text-IEEE-Orange mt-0.5"><ClockIcon /></span>{a.schedule}
              </div>
              <div className="flex items-start gap-2 text-xs text-[#a0bfdf] mb-1.5">
                <span className="text-IEEE-Orange mt-0.5"><PinIcon /></span>{a.location}
              </div>
              <p className="text-xs text-[#c0d8ef] leading-relaxed mt-3 pt-3 border-t border-white/10">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PAST VICTORIES ── */}
      <div className="bg-gray-50 px-6 md:px-[10%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl inline-block mb-4 uppercase tracking-widest">
            The Archives
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-IEEE-Blue uppercase">
            Past <span className="text-IEEE-Orange">Victories</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {victories.map((v, i) => (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-IEEE-Orange hover:shadow-md"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-IEEE-Orange mb-2">{v.date}</p>
              <h4 className="text-lg font-extrabold uppercase text-IEEE-Blue mb-2 leading-tight">{v.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{v.desc}</p>
              <span className="inline-block bg-IEEE-Blue text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {v.outcome}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-white px-6 md:px-[10%] py-16 text-center border-t-2 border-gray-100">
        <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-IEEE-Blue uppercase mb-4">
          Never Miss a <span className="text-IEEE-Orange">Battle</span>
        </h3>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
          Stay connected with the Trojan legion. Subscribe to our calendar and newsletter.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 bg-IEEE-Orange text-white font-bold uppercase tracking-wider rounded-xl shadow-lg text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#e55f00]">
            Add to Calendar
          </button>
          <button className="px-8 py-4 bg-transparent text-IEEE-Blue font-bold uppercase tracking-wider rounded-xl border-2 border-IEEE-Blue text-sm transition-all duration-300 hover:bg-IEEE-Blue hover:text-white">
            Subscribe to Updates
          </button>
        </div>
      </div>

    </div>
  );
}