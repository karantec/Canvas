import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Banner Section */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="relative w-full overflow-hidden rounded-sm shadow-lg">
          {/* Replace this placeholder with your actual image path */}
          <img 
            src="/path-to-your-banner.png" 
            alt="Official Media Partner - StartupNews with FutureTech Expo" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-10 tracking-tight">CONTACT US</h1>

        <div className="space-y-10 max-w-4xl">
          
          {/* Quick Support */}
          <section>
            <h2 className="text-xl font-bold mb-3">QUICK SUPPORT</h2>
            <p className="text-[15px] leading-relaxed text-gray-700 mb-4">
              Please chat with our team using the chat widget at the bottom right hand corner of this page, 
              which typically offers the fastest support.
            </p>
            <p className="text-[15px] text-gray-700">
              Or you can also share your concern at{' '}
              <a href="mailto:office@startupnews.fyi" className="text-[#f02971] hover:underline font-medium">
                office@startupnews.fyi
              </a>
            </p>
          </section>

          {/* Press */}
          <section>
            <h2 className="text-xl font-bold mb-3">PRESS</h2>
            <p className="text-[15px] text-gray-700">
              For all press inquiries or press releases, please email at{' '}
              <a href="mailto:publishing@startupnews.fyi" className="text-[#f02971] hover:underline font-medium">
                publishing@startupnews.fyi
              </a>
            </p>
          </section>

          {/* Careers */}
          <section>
            <h2 className="text-xl font-bold mb-3">CAREERS</h2>
            <p className="text-[15px] text-gray-700">
              For information regarding careers with us, please email at{' '}
              <a href="mailto:office@startupnews.fyi" className="text-[#f02971] hover:underline font-medium">
                office@startupnews.fyi
              </a>
            </p>
          </section>

          {/* Website Support */}
          <section>
            <h2 className="text-xl font-bold mb-3">WEBSITE SUPPORT</h2>
            <p className="text-[15px] leading-relaxed text-gray-700">
              To report a technical issue with{' '}
              <a href="https://StartupNews.fyi" className="text-[#0ea5e9] hover:underline">
                StartupNews.fyi
              </a>
              , please email{' '}
              <a href="mailto:tech@startupnews.fyi" className="text-[#f02971] hover:underline font-medium">
                tech@startupnews.fyi
              </a>{' '}
              with a summary of the issue along with a screenshot, the url, your browser version, 
              browser extensions enabled, operating system, and the make & model of your device.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;