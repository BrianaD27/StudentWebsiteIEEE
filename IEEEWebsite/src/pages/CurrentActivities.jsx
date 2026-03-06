import { useState } from "react";

/* ─── Color tokens ─────────────────────────────── */
const C = {
  navy:    "#002855",
  navyDark:"#001e3c",
  blue:    "#1a4a8a",
  orange:  "#FF6B00",
  white:   "#ffffff",
  gray:    "#c0d8ef",
  muted:   "#a0bfdf",
};

/* ─── Shared style primitives ───────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  .ct-page {
    font-family: 'Inter', sans-serif;
    color: ${C.white};
    background: #f4f6f8;
  }

  /* timestamp bar */
  .ct-timestamp {
    background: ${C.navyDark};
    text-align: right;
    padding: 4px 5%;
    font-size: 10px;
    color: ${C.muted};
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .ct-timestamp span { color: ${C.orange}; }

  /* ── HERO ── */
  .ct-hero {
    background: ${C.navy};
    padding: 60px 10% 56px;
    text-align: center;
    border-bottom: 3px solid ${C.orange};
  }
  .ct-badge {
    display: inline-block;
    background: ${C.blue};
    color: white;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 5px 18px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.15);
    margin-bottom: 18px;
  }
  .ct-hero h1 {
    font-weight: 900;
    font-size: 4.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1;
    color: white;
    margin-bottom: 16px;
  }
  .ct-hero h1 span { color: ${C.orange}; }
  .ct-hero p {
    font-size: 1rem;
    color: ${C.gray};
    max-width: 540px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* ── UPCOMING CAMPAIGNS ── */
  .ct-upcoming {
    background: #f7f9fb;
    padding: 60px 10%;
    color: ${C.navy};
  }
  .ct-section-header {
    text-align: center;
    margin-bottom: 36px;
  }
  .ct-section-header .ct-badge-alt {
    display: inline-block;
    background: ${C.orange};
    color: white;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px 16px;
    border-radius: 999px;
    margin-bottom: 12px;
  }
  .ct-section-header h2 {
    font-weight: 900;
    font-size: 2.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${C.navy};
  }
  .ct-section-header h2 span { color: ${C.orange}; }

  .ct-campaign-card {
    display: flex;
    background: white;
    border: 2px solid #e0e8f0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 22px;
    transition: border-color 0.2s, box-shadow 0.2s;
    position: relative;
  }
  .ct-campaign-card:hover {
    border-color: ${C.orange};
    box-shadow: 0 6px 24px rgba(0,40,85,0.1);
  }
  .ct-reg-badge {
    position: absolute;
    top: 12px;
    left: 0;
    background: #22c55e;
    color: white;
    font-weight: 700;
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 0 4px 4px 0;
  }
  .ct-campaign-img {
    width: 220px;
    min-height: 180px;
    object-fit: cover;
    flex-shrink: 0;
    background: #cdd8e3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8a9ab0;
    font-size: 12px;
  }
  .ct-campaign-body {
    padding: 22px 26px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .ct-tag {
    display: inline-block;
    border: 1.5px solid #ccc;
    color: #667;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 2px 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .ct-campaign-title {
    font-weight: 900;
    font-size: 1.55rem;
    text-transform: uppercase;
    color: ${C.navy};
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }
  .ct-campaign-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 12px;
  }
  .ct-meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    color: #556;
  }
  .ct-meta-item svg { color: ${C.orange}; flex-shrink: 0; }
  .ct-campaign-desc {
    font-size: 0.82rem;
    color: #445;
    line-height: 1.6;
    flex: 1;
    margin-bottom: 16px;
  }
  .ct-btn-orange {
    display: inline-block;
    background: ${C.orange};
    color: white;
    font-weight: 800;
    font-size: 0.85rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    align-self: flex-start;
    transition: background 0.2s, transform 0.15s;
  }
  .ct-btn-orange:hover { background: #e55f00; transform: translateY(-1px); }

  /* ── CURRENT ACTIVITIES ── */
  .ct-current {
    background: ${C.navy};
    padding: 64px 10%;
  }
  .ct-current .ct-section-header h2 { color: white; }

  .ct-activity-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .ct-activity-grid { grid-template-columns: 1fr; }
    .ct-campaign-img { width: 100%; min-height: 160px; }
    .ct-campaign-card { flex-direction: column; }
  }
  .ct-activity-card {
    background: ${C.navyDark};
    border: 2px solid #1e4d8c;
    border-radius: 10px;
    padding: 22px;
    transition: border-color 0.2s, transform 0.2s;
  }
  .ct-activity-card:hover {
    border-color: ${C.orange};
    transform: translateY(-3px);
  }
  .ct-activity-title {
    font-weight: 800;
    font-size: 1.05rem;
    text-transform: uppercase;
    color: white;
    margin-bottom: 12px;
    line-height: 1.2;
    letter-spacing: 0.3px;
  }
  .ct-activity-meta {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    font-size: 0.78rem;
    color: ${C.muted};
    margin-bottom: 5px;
  }
  .ct-activity-meta svg { flex-shrink: 0; margin-top: 1px; color: ${C.orange}; }
  .ct-activity-desc {
    font-size: 0.78rem;
    color: ${C.gray};
    line-height: 1.55;
    margin-top: 12px;
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 10px;
  }

  /* ── PAST VICTORIES ── */
  .ct-past {
    background: #f7f9fb;
    padding: 64px 10%;
    color: ${C.navy};
  }
  .ct-past .ct-section-header h2 { color: ${C.navy}; }
  .ct-victories-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 860px;
    margin: 0 auto;
  }
  @media (max-width: 600px) { .ct-victories-grid { grid-template-columns: 1fr; } }
  .ct-victory-card {
    background: white;
    border: 2px solid #e0e8f0;
    border-radius: 10px;
    padding: 22px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .ct-victory-card:hover {
    border-color: ${C.orange};
    box-shadow: 0 4px 16px rgba(0,40,85,0.08);
  }
  .ct-victory-date {
    font-weight: 700;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${C.orange};
    margin-bottom: 8px;
  }
  .ct-victory-title {
    font-weight: 900;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: ${C.navy};
    margin-bottom: 8px;
    line-height: 1.2;
  }
  .ct-victory-desc {
    font-size: 0.8rem;
    color: #445;
    line-height: 1.6;
    margin-bottom: 14px;
  }
  .ct-outcome-pill {
    display: inline-block;
    background: ${C.navy};
    color: white;
    font-weight: 700;
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 4px;
  }

  /* ── CTA ── */
  .ct-cta {
    background: white;
    padding: 64px 10%;
    text-align: center;
    color: ${C.navy};
    border-top: 1px solid #e0e8f0;
  }
  .ct-cta h2 {
    font-weight: 900;
    font-size: 2.4rem;
    text-transform: uppercase;
    margin-bottom: 14px;
    letter-spacing: 1px;
  }
  .ct-cta h2 span { color: ${C.orange}; }
  .ct-cta p {
    font-size: 0.92rem;
    color: #556;
    max-width: 480px;
    margin: 0 auto 28px;
    line-height: 1.65;
  }
  .ct-cta-btns {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .ct-btn-navy {
    display: inline-block;
    background: transparent;
    color: ${C.navy};
    font-weight: 800;
    font-size: 0.85rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 11px 22px;
    border-radius: 6px;
    border: 2px solid ${C.navy};
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }
  .ct-btn-navy:hover { background: ${C.navy}; color: white; }
`;

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
    imgBg: "#c0a080",
  },
  {
    tag: "Networking",
    title: "Career Fair",
    date: "April 5, 2026",
    time: "10:00 AM – 5:00 PM",
    location: "Student Center Ballroom",
    registered: "40 Registered",
    desc: "Career fair featuring local technology companies and startups. Resume workshops, mock interviews, keynote presentations, and networking opportunities.",
    imgBg: "#445566",
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
    <>
      <style>{styles}</style>
      <div className="ct-page">

        {/* timestamp */}
        <div className="ct-timestamp">
          Last Updated: <span>February 22, 2026 at 11:30 AM</span>
        </div>

        {/* ── HERO ── */}
        <section className="ct-hero">
          <div className="ct-badge">The Campaign Trail</div>
          <h1>Trojan <span>Activities</span></h1>
          <p>Join us for workshops, battles, networking events, and community service throughout the academic year.</p>
        </section>

        {/* ── UPCOMING CAMPAIGNS ── */}
        <section className="ct-upcoming">
          <div className="ct-section-header">
            <div className="ct-badge-alt">Next Battle</div>
            <h2>Upcoming <span>Campaigns</span></h2>
          </div>

          {campaigns.map((c, i) => (
            <div className="ct-campaign-card" key={i}>
              <div className="ct-reg-badge">Registration Open</div>
              <div className="ct-campaign-img" style={{ background: c.imgBg }} />
              <div className="ct-campaign-body">
                <span className="ct-tag">{c.tag}</span>
                <div className="ct-campaign-title">{c.title}</div>
                <div className="ct-campaign-meta">
                  <div className="ct-meta-item"><ClockIcon /> {c.date}</div>
                  <div className="ct-meta-item"><PinIcon /> {c.location}</div>
                  <div className="ct-meta-item"><UsersIcon /> {c.registered}</div>
                </div>
                <div className="ct-campaign-desc">{c.desc}</div>
                <button className="ct-btn-orange">Register Now</button>
              </div>
            </div>
          ))}
        </section>

        {/* ── CURRENT ACTIVITIES ── */}
        <section className="ct-current">
          <div className="ct-section-header">
            <div className="ct-badge">Ongoing Operations</div>
            <h2>Current <span style={{ color: C.orange }}>Activities</span></h2>
          </div>
          <div className="ct-activity-grid">
            {activities.map((a, i) => (
              <div className="ct-activity-card" key={i}>
                <div className="ct-activity-title">{a.title}</div>
                <div className="ct-activity-meta"><ClockIcon />{a.schedule}</div>
                <div className="ct-activity-meta"><PinIcon />{a.location}</div>
                <div className="ct-activity-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PAST VICTORIES ── */}
        <section className="ct-past">
          <div className="ct-section-header">
            <div className="ct-badge-alt">The Archives</div>
            <h2>Past <span>Victories</span></h2>
          </div>
          <div className="ct-victories-grid">
            {victories.map((v, i) => (
              <div className="ct-victory-card" key={i}>
                <div className="ct-victory-date">{v.date}</div>
                <div className="ct-victory-title">{v.title}</div>
                <div className="ct-victory-desc">{v.desc}</div>
                <div className="ct-outcome-pill">{v.outcome}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ct-cta">
          <h2>Never Miss a <span>Battle</span></h2>
          <p>Stay connected with the Trojan legion. Subscribe to our calendar and newsletter.</p>
          <div className="ct-cta-btns">
            <button className="ct-btn-orange">Add to Calendar</button>
            <button className="ct-btn-navy">Subscribe to Updates</button>
          </div>
        </section>

      </div>
    </>
  );
}
