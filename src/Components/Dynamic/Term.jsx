import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      {/* 1. Partner Banner */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="relative w-full overflow-hidden rounded-sm shadow-md border border-gray-100">
          <img 
            src="/path-to-your-banner.png" 
            alt="Official Media Partner" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* 2. Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tight mb-2 uppercase">Terms and Conditions</h1>
          <div className="h-1 w-20 bg-[#f02971] mx-auto"></div>
        </div>

        <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-700">
          <section className="space-y-4">
            <p className="font-medium text-black">Welcome to StartupNews.fyi!</p>
            <p>
              These terms and conditions outline the rules and regulations for the use of DOTFYI Media Ventures Private Limited's Website, 
              located at StartupNews.fyi.
            </p>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use StartupNews.fyi if you 
              do not agree to take all of the terms and conditions stated on this page.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Cookies</h2>
            <p className="mb-4">
              We employ the use of cookies. By accessing StartupNews.fyi, you agreed to use cookies in agreement with the 
              DOTFYI Media Ventures Private Limited's Privacy Policy.
            </p>
            <p>
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website 
              to enable the functionality of certain areas to make it easier for people visiting our website.
            </p>
          </section>

          {/* License */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">License</h2>
            <p className="mb-4">
              Unless otherwise stated, DOTFYI Media Ventures Private Limited and/or its licensors own the intellectual property rights 
              for all material on StartupNews.fyi. All intellectual property rights are reserved. You may access this from 
              StartupNews.fyi for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="font-semibold mb-2">You must not:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Republish material from StartupNews.fyi</li>
              <li>Sell, rent or sub-license material from StartupNews.fyi</li>
              <li>Reproduce, duplicate or copy material from StartupNews.fyi</li>
              <li>Redistribute content from StartupNews.fyi</li>
            </ul>
          </section>

          {/* Hyperlinking */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Hyperlinking to our Content</h2>
            <p className="mb-4">The following organizations may link to our Website without prior written approval:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
              <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups.</li>
            </ul>
          </section>

          {/* iFrames */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">iFrames</h2>
            <p>
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way 
              the visual presentation or appearance of our Website.
            </p>
          </section>

          {/* Content Liability */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase font-black">Content Liability</h2>
            <p>
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us 
              against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted 
              as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other 
              violation of, any third party rights.
            </p>
          </section>

          {/* Reservation of Rights */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase font-black">Reservation of Rights</h2>
            <p>
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to 
              immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions 
              and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow 
              these linking terms and conditions.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="bg-gray-50 p-6 border-l-4 border-[#f02971]">
            <h2 className="text-xl font-bold text-black mb-3 uppercase font-black">Disclaimer</h2>
            <p className="mb-4 font-medium">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions 
              relating to our website and the use of this website.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Limit or exclude our or your liability for death or personal injury;</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p className="mt-4 text-[13px] italic">
              As long as the website and the information and services on the website are provided free of charge, we will 
              not be liable for any loss or damage of any nature.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;