import React, { useState } from 'react';

const StartupNewsComplete = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Data for Components ---
  const stats = [
    { label: "SOCIAL MEDIA REACH", value: "10mn+" },
    { label: "STARTUP EVENTS ORGANIZED", value: "400+" },
    { label: "INTERNATIONAL DELEGATIONS", value: "11" },
    { label: "MEDIA PARTNERSHIP COUNTRIES", value: "24" },
  ];

  const footerLinks = {
    Topics: ["AI", "Fintech", "Social Media", "Robotics", "HealthTech"],
    "For Startup": ["Feature your Startup", "Submit your Funding Round", "Submit your press release"],
    "For Events": ["Submit your Event", "Advertise with us"],
    "For Investors": ["Dealflow Newsletter", "Regional Reports", "Speak / Sponsor Opportunities"],
    "About Us": ["About us", "Our Partners", "Contact Us"]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      

      {/* 2. HERO BANNER */}
      <header className="max-w-6xl mx-auto px-4 pt-8">
        <div className="rounded-sm overflow-hidden shadow-sm border border-gray-100">
          <img src="/banner.png" alt="Official Media Partner with FutureTech Expo" className="w-full h-auto" />
        </div>
      </header>

      {/* 3. ABOUT & STATS SECTION */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12 space-y-6 max-w-4xl">
          <p className="text-xl font-bold text-gray-800 leading-snug">
            StartupNews.fyi connects you to a fast-growing, global community of founders, investors, and decision-makers shaping the future of innovation.
          </p>
          <p className="text-lg font-medium text-gray-600">
            Access a powerful network across India and multiple international markets — where entrepreneurs build, capital flows, and ideas turn into scalable ventures.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-sm text-center">
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 4. EXPERT FORM */}
        <section className="mt-20">
          <h2 className="text-3xl font-black uppercase mb-2">Speak to an expert</h2>
          <p className="text-sm text-gray-500 mb-10 italic">
            Enquiries Are Sent To <span className="text-[#f02971] font-bold">Office@Startupnews.Fyi</span>
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["First Name", "Last Name", "Work Email Address", "Business Phone", "Job Title", "Job Level", "Industry", "Company / Organisation"].map((label) => (
              <div key={label}>
                <label className="block text-[10px] font-black uppercase mb-1 tracking-tighter">{label} *</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#f02971]" required />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black uppercase mb-1 tracking-tighter">Country *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#f02971]" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black uppercase mb-1 tracking-tighter">Brand Campaign Objective / Details *</label>
              <textarea className="w-full bg-gray-50 border border-gray-200 p-3 text-sm h-32 focus:outline-none focus:border-[#f02971]" required></textarea>
            </div>
            <button className="bg-black text-white font-black py-4 px-12 uppercase text-sm tracking-widest hover:bg-[#f02971] transition-colors w-fit">
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-[#121212] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="bg-[#f02971] flex items-center px-4 py-2 rounded-sm mb-4">
              <span className="text-2xl font-bold">StartupNews</span>
              <div className="ml-2 bg-white text-[#f02971] text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center">.fyi</div>
            </div>
            <p className="text-gray-400 text-sm text-center max-w-xs">Empowering innovation and connecting the startup ecosystem worldwide.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16 border-b border-gray-800 pb-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-bold text-base mb-6 border-b-2 border-[#f02971] inline-block">{title}</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  {links.map(l => <li key={l} className="hover:text-white cursor-pointer">{l}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
            <div className="flex gap-4">
              <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a> | <a href="#">Refund Policy</a>
            </div>
            <div className="flex gap-3">
              {['f', 'i', 'l'].map(s => <div key={s} className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#f02971] hover:text-white transition-colors cursor-pointer">{s}</div>)}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartupNewsComplete;