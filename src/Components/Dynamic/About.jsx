import React from 'react';

const AboutUs = () => {
  const team = [
    {
      name: "Madhur Mohan Malik",
      role: "Founder",
      bio: "Madhur Mohan Malik is the Founder of StartupNews.fyi, driving its vision to become a trusted global source for startup and industry intelligence. With deep experience across media, technology, and ecosystem building, he focuses on creating high-signal platforms that connect founders, investors, and operators worldwide. His work is centered on credibility, global perspective, and building meaningful bridges across innovation ecosystems.",
    },
    {
      name: "Kapil Suri",
      role: "Co-Founder",
      bio: "Kapil Suri is the Co-Founder of StartupNews.fyi, bringing strategic insight and operational depth to the platform's global growth. With a strong background in business development and ecosystem partnerships, he plays a key role in shaping long-term strategy and execution. His focus lies in building scalable systems, trusted relationships, and sustainable value across global startup communities.",
    }
  ];

  return (
    <div className="bg-[#f9f9f9] min-h-screen font-sans relative">
      
      {/* Floating Social Icons (Left) */}
      <div className="hidden lg:flex flex-col fixed left-6 top-1/4 gap-3 z-10">
        {['facebook', 'x', 'pinterest', 'email'].map((platform) => (
          <button key={platform} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
             <span className="sr-only">{platform}</span>
             {/* Replace with actual icon SVGs */}
             <div className="w-4 h-4 bg-gray-500 rounded-sm"></div>
          </button>
        ))}
      </div>

      {/* Banner Section */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div className="w-full rounded-sm overflow-hidden shadow-sm">
          <img 
            src="/path-to-your-banner.png" 
            alt="Official Media Partner" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-center text-2xl font-black tracking-tight text-gray-900 mb-12 uppercase">
          ABOUT US
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
          <p>
            StartupNews.fyi offers readers a clear window into the future of startups, innovation, and global business. It's where founders, operators, investors, and industry leaders come to understand what's emerging, what's shifting, and what truly matters across markets. From breakthrough technologies and evolving business models to investment trends and cross-border expansion, we surface high-impact stories and intelligence that help decision-makers stay one step ahead in a rapidly changing world.
          </p>
          <p>
            Built as a trusted, verified news aggregation and ecosystem intelligence platform, StartupNews.fyi is designed to cut through noise and misinformation. Every update is curated with credibility and relevance at its core, ensuring our audience receives reliable insights they can act on with confidence. As we engage a global community through content, data, and ecosystem initiatives, authenticity remains central to who we are—if you ever encounter communication claiming to represent StartupNews.fyi, we encourage verification through our official channels to ensure trust and transparency at every touchpoint.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              
              {/* LinkedIn Icon */}
              <a href="#" className="inline-block mb-4 text-[#0077b5] hover:opacity-80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <p className="text-[13px] italic text-gray-600 leading-relaxed">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;