import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-[#333333]">
      {/* 1. Official Media Partner Banner */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="relative w-full overflow-hidden rounded-sm shadow-sm border border-gray-100">
          <img 
            src="/path-to-partner-banner.png" 
            alt="Official Media Partner StartupNews with FutureTech Expo" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-1 uppercase text-gray-900">
            Cancellation / Refund Policy
          </h1>
          <p className="text-xs text-gray-500 mb-2 italic">Last updated: January 15, 2023</p>
          <div className="h-1 w-16 bg-[#f02971] mx-auto"></div>
        </div>

        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
          <section>
            <p className="mb-4">Thank you for shopping at StartupNews.fyi.</p>
            <p>
              If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns. 
              The following terms are applicable for any products that You purchased with Us.
            </p>
          </section>

          {/* Interpretation and Definitions */}
          <section>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide text-black border-b border-gray-100 pb-2">
              Interpretation and Definitions
            </h2>
            <h3 className="font-bold mb-2 text-black">Interpretation</h3>
            <p className="mb-4">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. 
              The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3 className="font-bold mb-2 text-black">Definitions</h3>
            <p className="mb-4 italic text-sm text-gray-500 underline decoration-[#f02971]">
              For the purposes of this Return and Refund Policy:
            </p>
            <ul className="list-disc ml-5 space-y-3">
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to DOTFYI Media Ventures Private Limited, 1150-A-8 Gali No.2, West Rohtash Nagar, Shahdara, East Delhi, India 110032.</li>
              <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
              <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Website</strong> refers to StartupNews.fyi, accessible from <a href="https://www.startupnews.fyi" className="text-[#f02971] font-medium hover:underline">https://www.startupnews.fyi</a></li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          {/* Cancellation Rights */}
          <section>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide text-black border-b border-gray-100 pb-2">
              Your Order Cancellation Rights
            </h2>
            <p className="mb-4">You are entitled to cancel Your Order within 7 days without giving any reason for doing so.</p>
            <p className="mb-4">
              The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, 
              who is not the carrier, takes possession of the product delivered.
            </p>
            <p className="mb-4">To exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement.</p>
            <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#f02971] mb-4">
              <p className="font-bold">By email: <a href="mailto:office@startupnews.fyi" className="text-[#f02971] hover:underline">office@startupnews.fyi</a></p>
            </div>
            <p>
              We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as 
              You used for the Order, and You will not incur any fees for such reimbursement.
            </p>
          </section>

          {/* Conditions for Returns */}
          <section>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide text-black border-b border-gray-100 pb-2">
              Conditions for Returns
            </h2>
            <p className="mb-4">In order for the Goods to be eligible for a return, please make sure that:</p>
            <ul className="list-disc ml-5 space-y-2 mb-6">
              <li>The Goods were purchased in the last 7 days</li>
              <li>The Goods are in the original packaging</li>
            </ul>
            <p className="font-bold mb-2 uppercase text-sm tracking-tighter text-gray-500">The following Goods cannot be returned:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>The supply of Goods made to Your specifications or clearly personalized.</li>
              <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
              <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
              <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
            </ul>
          </section>

          {/* Returning Goods */}
          <section>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide text-black border-b border-gray-100 pb-2">
              Returning Goods
            </h2>
            <p className="mb-4">You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods to the following address:</p>
            <p className="mb-6 font-medium italic text-black bg-gray-50 p-4 rounded-sm border border-gray-200">
              1150-A-8 Gali No.2, West Rohtash Nagar, Shahdara, East Delhi, India 110032
            </p>
            <p>
              We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. 
              We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.
            </p>
          </section>

          {/* Gifts */}
          <section>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide text-black border-b border-gray-100 pb-2">
              Gifts
            </h2>
            <p className="mb-4">
              If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. 
              Once the returned product is received, a gift certificate will be mailed to You.
            </p>
            <p>
              If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, 
              We will send the refund to the gift giver.
            </p>
          </section>

          {/* Contact Section */}
          <section className="pt-8 mt-12 border-t-2 border-gray-100">
            <h2 className="text-2xl font-black mb-4 uppercase text-black">Contact Us</h2>
            <p className="mb-4">If you have any questions about our Returns and Refunds Policy, please contact us:</p>
            <ul className="list-disc ml-5">
              <li>
                <strong>By email:</strong> <a href="mailto:office@startupnews.fyi" className="text-[#f02971] font-bold hover:underline">office@startupnews.fyi</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;