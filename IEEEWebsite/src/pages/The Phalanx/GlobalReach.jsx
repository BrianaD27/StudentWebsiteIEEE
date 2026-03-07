import groupPic from "../../assets/groupPic.jpg"

export default function GlobalReach() {
  return (
    <section
      className="w-full py-14 px-6 sm:px-10 bg-IEEE-Blue"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">

        {/* ── LEFT: Circuit board image ── */}
        <div className="w-full md:w-[50%] shrink-0">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "3px solid #e85d20" }}
          >
            <img
              src={groupPic}
              alt="Close-up of a circuit board with red components"
              className="w-full object-cover"
              style={{ height: "440px" }}
            />
          </div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div className="w-full md:w-[54%] text-white">

          {/* Badge */}
          <div className="mb-4">
            <span
              className="inline-block text-white text-xs font-black tracking-widest uppercase px-5 py-2 rounded-full"
              style={{ backgroundColor: "#e85d20" }}
            >
              Global Reach
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-5">
            Part of a Worldwide{" "}
            <span style={{ color: "#e85d20" }} className="block">
              Network
            </span>
          </h2>

          {/* Body */}
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-5">
            As a proud student branch of IEEE (Institute of Electrical and
            Electronics Engineers), VSU members gain access to the world's
            largest technical professional organization.
          </p>

          {/* Stats */}
          <p className="text-sm sm:text-base font-bold mb-5 leading-relaxed">
            <span style={{ color: "#e85d20" }} className="font-black">420,000+</span>{" "}
            <span className="text-white">members</span>
            <span style={{ color: "#e85d20" }} className="mx-2">•</span>
            <span style={{ color: "#e85d20" }} className="font-black">160+</span>{" "}
            <span className="text-white">countries</span>
            <span style={{ color: "#e85d20" }} className="mx-2">•</span>
            <span style={{ color: "#e85d20" }} className="font-black">39</span>{" "}
            <span className="text-white">technical societies</span>
          </p>

          {/* Bullet list */}
          <ul className="space-y-3 mb-9">
            {[
              "Access to 5+ million technical documents and research papers",
              "Global conference and networking opportunities",
              "Professional certifications and continuing education",
              "Career resources and job placement assistance",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-blue-100">
                <svg
                  viewBox="0 0 10 14"
                  className="shrink-0 mt-0.5"
                  style={{ width: "11px", fill: "#e85d20" }}
                >
                  <polygon points="0,0 10,7 0,14" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-sm font-black tracking-widest uppercase px-10 py-4 rounded-xl shadow-lg transition-opacity duration-150 hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: "#e85d20" }}
          >
            Learn More About IEEE
          </a>
        </div>

      </div>
    </section>
  );
}
