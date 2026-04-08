import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      {/* 1. Partner Banner */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="relative w-full overflow-hidden rounded-sm shadow-sm border border-gray-100">
          <img 
            src="/path-to-your-banner.png" 
            alt="Official Media Partner" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tight mb-2 uppercase">Privacy Policy</h1>
          <div className="h-1 w-20 bg-[#f02971] mx-auto"></div>
        </div>

        <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-700">
          <p>
            At StartupNews.fyi, accessible from StartupNews.fyi, one of our main priorities is the privacy of our visitors. 
            This Privacy Policy document contains types of information that is collected and recorded by StartupNews.fyi and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the 
            information that they shared and/or collect in StartupNews.fyi. This policy is not applicable to any information 
            collected offline or via channels other than this website.
          </p>

          {/* Consent */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </section>

          {/* Information We Collect - Styled Box */}
          <section className=" p-6 bg-blue-50/40 rounded-sm">
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Information we collect</h2>
            <p className="mb-4">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
              will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, 
              phone number, the contents of the message and/or attachments you may send us, and any other information 
              you may choose to provide.
            </p>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase font-black">How we use your information</h2>
            <p className="mb-3 italic">We use the information we collect in various ways, including:</p>
            <ul className="list-disc ml-5 space-y-2 marker:text-gray-400">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          {/* Log Files */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Log Files</h2>
            <p>
              StartupNews.fyi follows a standard procedure of using log files. These files log visitors when they visit websites. 
              All hosting companies do this and a part of hosting services' analytics. The information collected by log files 
              include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, 
              referring/exit pages, and possibly the number of clicks. These are not linked to any information that is 
              personally identifiable.
            </p>
          </section>

          {/* Advertising Partners */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Our Advertising Partners</h2>
            <p className="mb-4">
              Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. 
              Each of our advertising partners has their own Privacy Policy for their policies on user data.
            </p>
            <ul className="list-disc ml-5">
              <li>
                <strong>Google: </strong> 
                <a href="https://policies.google.com/technologies/ads" className="text-[#f02971] hover:underline">
                  https://policies.google.com/technologies/ads
                </a>
              </li>
            </ul>
          </section>

          {/* Third Party Policies */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Third-Party Privacy Policies</h2>
            <p>
              StartupNews.fyi's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to 
              consult the respective Privacy Policies of these third-party ad servers for more detailed information. 
              It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </section>

          {/* CCPA */}
          <section className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-black mb-3 uppercase font-black">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p className="mb-4">Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
          </section>

          {/* GDPR */}
          <section className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-black mb-3 uppercase font-black">GDPR Data Protection Rights</h2>
            <p className="mb-4 font-semibold italic text-gray-600 underline decoration-[#f02971]">
              We would like to make sure you are fully aware of all of your data protection rights:
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data.</li>
              <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data.</li>
              <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization.</li>
            </ul>
          </section>

          {/* Children */}
          <section className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-black mb-3 uppercase">Children's Information</h2>
            <p className="mb-4">
              Another part of our priority is adding protection for children while using the internet. We encourage parents 
              and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              StartupNews.fyi does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
              If you think that your child provided this kind of information on our website, we strongly encourage you to 
              contact us immediately and we will do our best efforts to promptly remove such information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;