import { Link } from "react-router-dom";
import vsuLogo from "../../public/vsuLogo.jpeg"

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 flex-shrink-0 mt-0.5"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 flex-shrink-0 mt-0.5"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <div>
      <div className="w-screen h-1" style={{ backgroundColor: "#e85d20" }} />
      <footer
        style={{ backgroundColor: "#1a2e5a" }}
        className="w-full pt-12 pb-6 px-6 sm:px-10"
      >
        {/* Main 3-column grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* ── Col 1: Brand ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                
              >
                <img src={vsuLogo} className="w-fit h-fit border rounded-lg" alt="" />
                
              </div>
              <div>
                <p className="text-white font-black text-base leading-tight">
                  THE TROJAN STANDARD
                </p>
                <p className="text-blue-300 text-sm italic">
                  Greater Happens Here
                </p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Virginia State University IEEE Student Branch — Advancing
              technology for humanity through Trojan excellence.
            </p>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3
              className="font-black text-base uppercase tracking-wide mb-5"
              style={{ color: "#e85d20" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "The Quarterdeck (Home)", to: "/" },
                { label: "The Phalanx (About)", to: "/phalanx" },
                { label: "Campaign Trail (Events)", to: "/trail" },
                { label: "Trojan Leaders (Team)", to: "/leaders" },
                { label: "Enlistment (Join)", to: "/enlistment" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-blue-200 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Command Center ── */}
          <div>
            <h3
              className="font-black text-base uppercase tracking-wide mb-5"
              style={{ color: "#e85d20" }}
            >
              Command Center
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <PinIcon />
                <span>
                  Virginia State University
                  <br />1 Hayden Dr, Petersburg, VA 23806
                </span>
              </li>
              <li className="flex items-center gap-2 text-blue-200 text-sm">
                <MailIcon />
                <a
                  href="mailto:ieee@vsu.edu"
                  className="hover:text-white transition-colors duration-200"
                >
                  ieee@vsu.edu
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {[
                { icon: <InstagramIcon />, href: "https://www.instagram.com/ieee_vsu/" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Divider */}
      <div className="w-full h-0.5 px-0 bg-blue-700"></div>

      <footer
        style={{ backgroundColor: "#1a2e5a" }}
        className="w-full pt-12 pb-6 sm:px-10"
      >
        {/* Bottom copyright block */}
        <div className="text-center space-y-1.5">
          <p className="text-white text-sm font-bold">
            © 2026 IEEE Virginia State University Student Branch. All rights
            reserved.
          </p>
          <p className="text-blue-200 text-sm">
            Last Updated:{" "}
            <span style={{ color: "#e85d20" }} className="font-semibold">
              February 25, 2026
            </span>
          </p>
          <p className="text-blue-200 text-sm">
            Web Admin:{" "}
            <span style={{ color: "#e85d20" }} className="font-semibold">
              VSU IEEE Web Team
            </span>
          </p>
          <p className="text-blue-400 text-xs italic mt-1">
            Designed for IEEE Region 3 Standards • Minimum 640×480 Compatible
          </p>
        </div>
      </footer>
    </div>
  );
}
