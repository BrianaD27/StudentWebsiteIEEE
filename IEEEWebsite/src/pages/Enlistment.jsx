import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import blueBg from "../assets/blueBg.png"

const Enlistment = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    major: "",
    year: "",
    interest: "",
    why: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const faqs = [
    {
      q: "How do I become a Trojan member?",
      a: "Fill out the enlistment form above or attend one of our general meetings (Wednesdays, 6:00 PM). We welcome ALL VSU students interested in technology, regardless of major. No prior experience required!",
    },
    {
      q: "What is the membership fee?",
      a: "IEEE student membership is $32 annually, granting access to all national IEEE benefits including publications, conferences, and global networking. Local chapter meetings and most VSU IEEE events are FREE to attend.",
    },
    {
      q: "When do you meet?",
      a: "General meetings: Every Wednesday, 6:00 PM – 7:30 PM in Engineering Building Room 201. Project teams meet Tuesdays/Thursdays 4:00–7:00 PM. Check our Campaign Trail page for specific event dates.",
    },
    {
      q: "Can non-engineering majors join?",
      a: "ABSOLUTELY! We welcome students from ALL majors who have an interest in technology, innovation, and professional development. Computer Science, Mathematics, Physics, and Business majors are especially encouraged to join.",
    },
    {
      q: "What opportunities are available?",
      a: "Members gain access to workshops, hackathons, industry networking events, project teams, leadership positions, scholarships, internship connections, and career placement assistance. We've helped 50+ members secure positions at companies like NASA, Microsoft, Amazon, and Dominion Energy.",
    },
  ];

  const contactCards = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: "Email",
      lines: ["ieee@vsu.edu", "Response time: 24–48 hours"],
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Location",
      lines: [
        "Virginia State University",
        "Engineering Building, Room 205",
        "1 Hayden Dr, Petersburg, VA 23806",
      ],
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z" />
        </svg>
      ),
      label: "Phone",
      lines: ["(804) 524-1000", "Main VSU Engineering Dept"],
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Office Hours",
      lines: [
        "Monday – Thursday: 3:00 PM – 6:00 PM",
        "Friday: 2:00 PM – 5:00 PM",
        "Weekends: By Appointment",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
      name: "Instagram",
      handle: "@ieee.vsu",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      name: "LinkedIn",
      handle: "IEEE VSU Branch",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      name: "Facebook",
      handle: "@ieeevsu",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      ),
      name: "Twitter",
      handle: "@ieee.vsu",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="z-50 sticky top-0">
        <NavBar />
      </div>

      {/* ── HERO ── */}
      <div className="relative">
         <img
                  className="h-[50vh] sm:h-[50vh] w-full object-cover relative"
                  src={blueBg}
                  alt=""
                />

        <div className="w-full absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
          <h1 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl mb-4">
            ENLISTMENT
          </h1>
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-extrabold text-white leading-tight">
            JOIN THE <span className="text-IEEE-Orange">TROJAN</span> LEGION
          </h1>
          <p className="text-Blue-Grey mt-4 lg:text-xl md:text-lg text-base font-semibold max-w-xl">
            Ready to be part of VSU's elite engineering force? Let's make
            greater happen together!
          </p>
        </div>

        <div className="absolute sm:top-4 top-4 right-4 text-md font-medium text-white bg-IEEE-Orange px-4 py-1 rounded-lg shadow-lg">
          <p>Last Updated: February 25, 2026 at 10:30 AM</p>
        </div>
      </div>

      {/* ── ENLIST TODAY + CONTACT INFORMATION ── */}
      <div className="bg-white px-6 md:px-[8%] py-14 grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Left — Form */}
        <div>
          <h2 className="text-xs font-bold text-IEEE-Orange border-2 border-IEEE-Orange rounded-full px-4 py-1 inline-block mb-4 uppercase tracking-widest">
            Recruitment Form
          </h2>
          <h3 className="text-3xl font-extrabold text-IEEE-Blue uppercase mb-6">
            Enlist Today
          </h3>

          <label className="block text-xs font-bold uppercase tracking-wider text-IEEE-Blue mb-1">
            Full Name <span className="text-IEEE-Orange">*</span>
          </label>
          <input
            className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm text-IEEE-Blue mb-4 outline-none focus:border-IEEE-Orange transition-colors"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
          />

          <label className="block text-xs font-bold uppercase tracking-wider text-IEEE-Blue mb-1">
            VSU Email Address <span className="text-IEEE-Orange">*</span>
          </label>
          <input
            className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm text-IEEE-Blue mb-4 outline-none focus:border-IEEE-Orange transition-colors"
            name="email"
            placeholder="yourname@vsu.edu"
            value={form.email}
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-IEEE-Blue mb-1">
                Major <span className="text-IEEE-Orange">*</span>
              </label>
              <input
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm text-IEEE-Blue mb-4 outline-none focus:border-IEEE-Orange transition-colors"
                name="major"
                value={form.major}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-IEEE-Blue mb-1">
                Class Year <span className="text-IEEE-Orange">*</span>
              </label>
              <input
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm text-IEEE-Blue mb-4 outline-none focus:border-IEEE-Orange transition-colors"
                name="year"
                value={form.year}
                onChange={handleChange}
              />
            </div>
          </div>

          <label className="block text-xs font-bold uppercase tracking-wider text-IEEE-Blue mb-1">
            Interest Area <span className="text-IEEE-Orange">*</span>
          </label>
          <input
            className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm text-IEEE-Blue mb-4 outline-none focus:border-IEEE-Orange transition-colors"
            name="interest"
            value={form.interest}
            onChange={handleChange}
          />

          <label className="block text-xs font-bold uppercase tracking-wider text-IEEE-Blue mb-1">
            Why Do You Want to Join? <span className="text-IEEE-Orange">*</span>
          </label>
          <textarea
            className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm text-IEEE-Blue mb-4 outline-none focus:border-IEEE-Orange transition-colors resize-y min-h-25"
            name="why"
            placeholder="Tell us about your goals and interests..."
            value={form.why}
            onChange={handleChange}
          />

          <button className="w-full mt-2 py-4 bg-IEEE-Orange text-white font-bold uppercase tracking-wider rounded-xl shadow-lg text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Submit Enlistment Form
          </button>
        </div>

        {/* Right — Contact */}
        <div>
          <h2 className="text-xs font-bold text-white bg-IEEE-Blue rounded-full px-4 py-1 inline-block mb-4 uppercase tracking-widest">
            Command Center
          </h2>
          <h3 className="text-3xl font-extrabold text-IEEE-Blue uppercase mb-2">
            Contact <span className="text-IEEE-Orange">Information</span>
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Whether you're interested in joining IEEE VSU, attending our events,
            or partnering with us, the Trojan command center is here to assist.
            All majors welcome!
          </p>

          {contactCards.map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-50 border-2 border-gray-200 rounded-xl p-4 mb-3 transition-all duration-300 hover:border-IEEE-Orange hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-IEEE-Orange text-white flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-IEEE-Blue mb-1">
                  {card.label}
                </p>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-gray-600 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOLLOW OUR CAMPAIGN ── */}
      <div className="bg-IEEE-Blue px-6 md:px-[8%] py-16 text-center">
        <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl inline-block mb-4">
          THE ARCHIVES
        </h2>
        <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-white uppercase mb-3">
          Follow Our <span className="text-IEEE-Orange">Campaign</span>
        </h3>
        <p className="text-Blue-Grey text-base font-semibold mb-10">
          Stay connected with the Trojan legion through our social media
          channels
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          {socialLinks.map((s, i) => (
            <div
              key={i}
              className="border-2 border-IEEE-Orange rounded-xl py-6 px-4 flex flex-col items-center gap-3 cursor-pointer text-IEEE-Orange transition-all duration-300 hover:bg-IEEE-Orange hover:text-white hover:-translate-y-1"
            >
              {s.icon}
              <p className="text-xs font-extrabold uppercase tracking-widest text-white">
                {s.name}
              </p>
              <p className="text-xs text-Blue-Grey">{s.handle}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto border-2 border-IEEE-Orange rounded-xl p-5 text-left bg-white/5">
          <p className="text-sm font-bold text-white mb-2">
            📡 Social Media Feed Integration
          </p>
          <p className="text-sm text-Blue-Grey leading-relaxed">
            Follow us on Instagram and LinkedIn for live updates, event photos,
            project showcases, and member spotlights. Use{" "}
            <span className="text-IEEE-Orange font-semibold">#TrojanTech</span>{" "}
            and <span className="text-IEEE-Orange font-semibold">#IEEEVSV</span>{" "}
            to be featured!
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="bg-gray-50 px-6 md:px-[8%] py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-white px-4 py-2 bg-IEEE-Orange rounded-full shadow-xl inline-block mb-4">
            INTEL BRIEFINGS
          </h2>
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-IEEE-Blue uppercase">
            Frequently Asked <span className="text-IEEE-Orange">Questions</span>
          </h3>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                openFaq === i ? "border-IEEE-Orange" : "border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-sm font-bold uppercase tracking-wide text-IEEE-Blue">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-IEEE-Orange shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openFaq === i && (
                <div className="px-6 pb-5 border-t-2 border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enlistment;
