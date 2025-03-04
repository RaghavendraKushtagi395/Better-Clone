import React from 'react';
import House from '../assets/foothouse.webp';

const BetterFooter = () => {
  return (
    <div>
      <div className="max-w-4/6 mx-auto px-4 py-12 font-sans">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-700">Better</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Better Services */}
          <div>
            <p className="text-gray-700 mb-6">
              Better is a family of companies serving all your homeownership needs.
            </p>

            <div className="mb-8">
              <h2 className="text-green-700  text-lg mb-2"><span className='font-bold'>Better</span> <span className='text-gray-500 font-medium'>Mortgage</span></h2>
              <p className="text-gray-700 text-sm">
                We can't wait to say "Welcome home." Apply 100% online, with expert customer support.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-green-700 text-lg mb-2"><span className='font-bold'>Better</span> <span className='text-gray-500 font-medium'>Real Estate</span></h2>
              <p className="text-gray-700 text-sm">
                Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-green-700 text-lg mb-2"><span className='font-bold'>Better</span> <span className='text-gray-500 font-medium'>Cover</span></h2>
              <p className="text-gray-700 text-sm">
                Shop, bundle, and save on insurance coverage for home, auto, life, and more.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-green-700 text-lg mb-2"><span className='font-bold'>Better</span> <span className='text-gray-500 font-medium'>Inspect</span></h2>
              <p className="text-gray-700 text-sm">
                Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-green-700 text-lg mb-2"><span className='font-bold'>Better</span> <span className='text-gray-500 font-medium'>Settlement Services</span></h2>
              <p className="text-gray-700 text-sm">
                Get transparent rates when you shop for title insurance all in one convenient place.
              </p>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h2 className="text-gray-800 font-semibold text-lg mb-4">Resources</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-700 hover:text-green-700">Home affordability calculator</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Mortgage calculator</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Free mortgage calculator</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Mortgage calculator with taxes</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Mortgage calculator with PMI</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Rent vs buy calculator</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">HELOC payment calculator</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">HELOC vs cash-out refinance calculator</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Buy a home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Sell a home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Get home inspection</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h2 className="text-gray-800 font-semibold text-lg mb-4">Company</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-700 hover:text-green-700">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Media</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Partner With Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Learning center</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">FAQs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-700">Investor Relations</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us & Legal */}
          <div>
            <div className="mb-8">
              <h2 className="text-gray-800 font-semibold text-lg mb-4">Contact Us</h2>
              <ul className="space-y-4">
                <li><a href="mailto:hello@better.com" className="text-gray-700 hover:text-green-700">hello@better.com</a></li>
                <li><a href="tel:415-523-8837" className="text-gray-700 hover:text-green-700">415-523-8837</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-700">FAQ</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-700">Glossary</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-800 font-semibold text-lg mb-4">Legal</h2>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-700 hover:text-green-700">NMLS Consumer Access</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-700">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-700">Terms of Use</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-700">Disclosures & Licensing</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-700">Affiliated Business</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-700">Browser Disclaimer</a></li>
              </ul>
            </div>

            <div className="mt-8 flex space-x-4">
              <img src={House} alt="Equal Housing Lender" className="h-8 w-8" />
              <img src={House} alt="Equal Housing Opportunity" className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Additional Text Section */}
        <div className="mt-8">
          <p className="text-xs text-gray-500">
            <sup>1</sup>Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. <a href="#" className="text-green-700 underline">See One Day Mortgage™ Terms and Conditions.</a>
          </p>
          <p className="text-xs text-gray-500 mt-8"><sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.</p>
          <p className="text-xs text-gray-500 mt-8"><sup>3</sup>Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value</p>
          <hr className='mt-15 mb-15'/>
          <p className="text-xs text-gray-500 mt-8">© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-8">Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
          <p className="text-xs text-gray-500 mt-8">Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-8">New York State Housing and Anti-Discrimination Notice</p>
          <p className="text-xs text-gray-500 mt-8">New York Standard Operating Procedures</p>
          <p className="text-xs text-gray-500 mt-8">Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice</p>
          <p className="text-xs text-gray-500 mt-8">Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
          <p className="text-xs text-gray-500 mt-8">Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
          <p className="text-xs text-gray-500 mt-8">Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.</p>
          <p className="text-xs text-gray-500 mt-8">Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
          <p className="text-xs text-gray-500 mt-8">Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
          <p className="text-xs text-gray-500 mt-8">Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>

        </div>
      </div>
    </div>
  );
};

export default BetterFooter;
