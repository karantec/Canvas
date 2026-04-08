import React from 'react';

// --- Mock Data for the Grid ---
const articles = [
  {
    id: 1,
    title: "Poll reveals many Android fans hate this iPhone-inspired trend",
    author: "Android Authority",
    category: "ALL NEWS",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "This open-source AI tool makes Google Assistant look obsolete",
    author: "Android Authority",
    category: "ALL NEWS",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "YouTube background playback disabled? Try this workaround",
    author: "Android Authority",
    category: "ALL NEWS",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "I switched from Todoist to Google Tasks, and it didn't go as planned",
    author: "Android Authority",
    category: "ALL NEWS",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "I cut my yearly streaming costs by half with a few simple tricks",
    author: "Android Authority",
    category: "ALL NEWS",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "3 Android phones you should buy instead of the Galaxy Z Fold 5",
    author: "Android Authority",
    category: "ALL NEWS",
    image: "https://images.unsplash.com/photo-1556656793-062ff9878233?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "I thought I'd hate Spotify's AI playlists, but I don't",
    author: "Android Authority",
    category: "ALL NEWS",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800&auto=format&fit=crop"
  }
];

export default function AuthorArchivePage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen font-sans">
      
      {/* 1. TOP MEDIA PARTNER BANNER */}
      <div className="w-full bg-[#f3f4f6] py-4 flex justify-center">
        <div className="max-w-4xl w-full bg-gradient-to-r from-[#0a0a2e] to-[#1a1a4a] rounded-sm p-4 flex items-center justify-between shadow-md">
           <div className="flex flex-col">
              <span className="text-[8px] text-white font-black uppercase tracking-[0.2em] mb-1">Official Media Partner</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-black italic text-xl">StartupNews</span>
                <div className="bg-white text-[#f02971] text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center">.fyi</div>
                <span className="text-white/60 font-light text-xl ml-2 italic">with FutureTech EXPO</span>
              </div>
           </div>
        </div>
      </div>

      {/* 2. AUTHOR HEADER SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-8 border border-gray-100 rounded-sm shadow-sm mb-12">
          {/* Avatar Square */}
          <div className="w-24 h-24 bg-[#1a1a1a] flex items-center justify-center rounded-sm shrink-0">
            <span className="text-white text-4xl font-black">A</span>
          </div>
          {/* Author Text */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-black text-gray-900 mb-2">Android Authority</h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              Android Authority is a contributor to StartupNews.fyi covering the latest news and trends in startups, technology, and innovation.
            </p>
          </div>
        </div>

        {/* 3. ARTICLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          
          {/* Featured Large Item (First item in your image) */}
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop" 
                alt="Featured" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-[#f02971] text-white text-[9px] font-black px-2 py-1 uppercase tracking-tighter">
                AI DEEPTECH
              </div>
            </div>
            <h3 className="text-xl font-black leading-tight mb-2 group-hover:text-[#f02971] transition-colors">
              Testing: The newest AI tool taking the tech world by storm
            </h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">By Android Authority</p>
          </div>

          {/* Standard Grid Items */}
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-sm mb-4 border border-gray-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-[#f02971] text-white text-[9px] font-black px-2 py-1 uppercase tracking-tighter">
                  {article.category}
                </div>
              </div>
              <h3 className="text-lg font-black leading-tight mb-2 group-hover:text-[#f02971] transition-colors">
                {article.title}
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">By {article.author}</p>
            </div>
          ))}

        </div>

        {/* 4. LOAD MORE / PAGINATION (Optional but common) */}
        <div className="mt-16 flex justify-center">
          <button className="border-2 border-black px-8 py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
}