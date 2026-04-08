import React, { useState, useRef, useEffect } from 'react';

// --- Data Structures ---
const sectors = [
  "AI & DEEPTECH", "FINTECH", "SOCIAL MEDIA", "ROBOTICS", 
  "HEALTHTECH", "MOBILITY & EV", "ECOMMERCE", "SAAS & ENTERPRISE",
  "CONSUMER & D2C", "WEB3 & BLOCKCHAIN", "CYBERSECURITY", "CLIMATE & ENERGY"
];

const eventCategories = ["DUBAI", "DELHI NCR", "BENGALURU", "HYDERABAD", "MUMBAI"];

export default function StartupNewsFinal() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Independent Toggle States for Sidebar/Dropdowns
  const [openSection, setOpenSection] = useState({
    sectors: true,
    events: false,
    press: false
  });

  const sidebarRef = useRef(null);
  const desktopDropdownRef = useRef(null);
  const [desktopSectorsOpen, setDesktopSectorsOpen] = useState(false);

  // Toggle function for sidebar sections
  const toggleSection = (section) => {
    setOpenSection(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setDesktopSectorsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" bg-white font-sans text-gray-900">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 px-4 h-14 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsSidebarOpen(true)} className="text-gray-800">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div className="bg-[#f02971] flex items-center px-3 py-1.5 rounded-sm">
              <span className="text-white font-bold text-lg">StartupNews</span>
              <div className="ml-2 bg-white text-[#f02971] text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center">.fyi</div>
            </div>
          </div>

          {/* DESKTOP MENU WITH WORKING DROPDOWN */}
          <div className="hidden md:flex items-center gap-7">
            <div className="relative" ref={desktopDropdownRef}>
              <button 
                onClick={() => setDesktopSectorsOpen(!desktopSectorsOpen)}
                className="text-[12px] font-bold uppercase tracking-wider hover:text-[#f02971] flex items-center gap-1"
              >
                Sectors <span className={`text-[8px] transition-transform ${desktopSectorsOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Desktop Sectors Dropdown Content */}
              {desktopSectorsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl py-2 rounded-md grid grid-cols-1">
                  {sectors.map(s => (
                    <a key={s} href={`/sectors/${s.toLowerCase()}`} className="px-4 py-2 text-[10px] font-bold text-gray-600 hover:bg-gray-50 hover:text-[#f02971]">
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/funding" className="text-[12px] font-bold uppercase tracking-wider hover:text-[#f02971]">Funding Tracker</a>
            <a href="/events" className="text-[12px] font-bold uppercase tracking-wider hover:text-[#f02971]">Events</a>
            <a href="/advertise" className="text-[12px] font-bold uppercase tracking-wider hover:text-[#f02971]">Advertise</a>
          </div>
        </div>
      </nav>

      {/* 2. SIDEBAR WITH EXPANDABLE CATEGORIES */}
      <div className={`fixed inset-0 z-[2000] transition-all duration-300 ${isSidebarOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsSidebarOpen(false)} />
        <div ref={sidebarRef} className={`absolute left-0 top-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
          
          <div className="p-5">
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-black">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 pb-10">
            {/* SECTORS SECTION */}
            <div className="mb-4">
              <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleSection('sectors')}>
                <span className="text-[12px] font-bold tracking-widest uppercase">Sectors</span>
                <div className="bg-[#f02971] text-white rounded-sm w-5 h-5 flex items-center justify-center font-bold">
                  {openSection.sectors ? '−' : '+'}
                </div>
              </div>
              {openSection.sectors && (
                <div className="pl-2 mt-2 space-y-3 border-l border-gray-100">
                  {sectors.map(s => <a key={s} href={`/sector/${s}`} className="block text-[10px] font-bold text-gray-400 hover:text-[#f02971] tracking-wide">• {s}</a>)}
                </div>
              )}
            </div>

            {/* EVENTS SECTION */}
            <div className="mb-4">
              <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleSection('events')}>
                <span className="text-[12px] font-bold tracking-widest uppercase">Events</span>
                <div className="bg-[#f02971] text-white rounded-sm w-5 h-5 flex items-center justify-center font-bold">
                  {openSection.events ? '−' : '+'}
                </div>
              </div>
              {openSection.events && (
                <div className="pl-2 mt-2 space-y-3 border-l border-gray-100">
                  {eventCategories.map(cat => <a key={cat} href={`/events/${cat.toLowerCase()}`} className="block text-[10px] font-bold text-gray-400 hover:text-[#f02971] tracking-wide">• {cat}</a>)}
                </div>
              )}
            </div>

            <a href="/submit-event" className="block py-3 text-[12px] font-bold tracking-widest uppercase">Submit Your Event</a>
            <a href="/partner" className="block py-3 text-[12px] font-bold tracking-widest uppercase">Partner With Us</a>

            {/* PRESS RELEASE SECTION */}
            <div className="mb-4">
              <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleSection('press')}>
                <span className="text-[12px] font-bold tracking-widest uppercase">Press Release</span>
                <div className="bg-[#f02971] text-white rounded-sm w-5 h-5 flex items-center justify-center font-bold">
                  {openSection.press ? '−' : '+'}
                </div>
              </div>
              {openSection.press && (
                <div className="pl-2 mt-2 space-y-3 border-l border-gray-100">
                  <a href="/press/submit" className="block text-[10px] font-bold text-gray-400 hover:text-[#f02971] tracking-wide">• SUBMIT</a>
                </div>
              )}
            </div>
          </div>

          {/* Social Footer */}
         
        </div>
      </div>
    </div>
  );
}