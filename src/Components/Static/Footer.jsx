import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "Topics",
    links: [
      { name: "AI", path: "/topics/ai" },
      { name: "Fintech", path: "/topics/fintech" },
      { name: "Social Media", path: "/topics/social-media" },
      { name: "Robotics", path: "/topics/robotics" },
      { name: "HealthTech", path: "/topics/healthtech" },
    ],
  },
  {
    heading: "For Startup",
    links: [
      { name: "Feature your Startup", path: "/feature-startup" },
      { name: "Submit your Funding Round", path: "/funding" },
      { name: "Submit your press release", path: "/press" },
    ],
  },
  {
    heading: "For Events",
    links: [
      { name: "Submit your Event", path: "/events" },
      { name: "Advertise with us", path: "/advertise" },
    ],
  },
  {
    heading: "For Investors",
    links: [
      { name: "Dealflow Newsletter", path: "/newsletter" },
      { name: "Regional Reports", path: "/reports" },
      { name: "Speak / Sponsor Opportunities", path: "/sponsor" },
    ],
  },
  {
    heading: "About Us",
    links: [
      { name: "About us", path: "/about" },
      { name: "Our Partners", path: "/partners" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
];

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.7 1.8v-1.5H10v7.7h3.1v-4.1c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4v4.1H18.5M7 19h3.1V9H7v10M8.5 7.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.8.8-1.8 1.8.8 1.8 1.8 1.8z" />
  </svg>
);

export default function StartupNewsFooter() {
  return (
    <footer className="bg-[#141414] text-white w-full px-6 md:px-20 pt-16 pb-10 font-sans">
      
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="bg-[#f02971] flex items-center px-6 py-3 mb-4">
          <span className="text-3xl font-bold tracking-tight">StartupNews</span>
          <div className="ml-2 bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-[#f02971] text-xs font-black">.fyi</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Empowering innovation and connecting the startup ecosystem worldwide.
        </p>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 mb-16">
        {footerColumns.map((col, idx) => (
          <div key={idx}>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              {col.heading}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f02971] to-[#7c3aed]"></span>
            </h3>

            <ul className="space-y-3 mt-4">
              {col.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-[14px] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-gray-400 text-[13px]">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <span>/</span>
          <Link to="/terms" className="hover:text-white transition">Terms and Conditions</Link>
          <span>/</span>
          <Link to="/refund" className="hover:text-white transition">Return and Refund Policy</Link>
        </div>

        <div className="flex gap-4">
          {[FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-white hover:bg-gray-600 transition-all"
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}