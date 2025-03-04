import React, { useState } from 'react'
import manImage from '../assets/man.png';
import SB from '../assets/softbank.png'
import Ally from '../assets/ally.png'
import Citi from '../assets/citi.png'
import Ping from '../assets/pinglogo.png'
import GM from '../assets/goldman.png'
import KPCB from '../assets/KPCB.png'
import AE from '../assets/AmericanExpress.png';
import BetterFooter from './BetterFooter';


export default function About() {
    
    const [showVideoModal, setShowVideoModal] = useState(false);
    
   
    const youtubeVideoId = '1KjYlLBM9j4';
    
    
    const handlePlayClick = () => {
      setShowVideoModal(true);
      
      document.body.style.overflow = 'hidden';
    };

    const closeVideoModal = () => {
      setShowVideoModal(false);
      
      document.body.style.overflow = 'auto';
    };
  
  return (
    <div>
      {/* Mission Section Starts here  */}
      <section className="m-auto flex min-h-screen max-w-3xl flex-col justify-center items-center px-6 sm:px-10 md:px-20 text-center">
  <div>
    <h1 className="font-semibold text-lg sm:text-xl md:text-2xl tracking-normal md:tracking-tight text-green-700">
      Our mission
    </h1>
    <h2 className="font-semibold text-textPrimary text-xl sm:text-2xl md:text-3xl tracking-tight md:tracking-tighter mt-6">
      We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
    </h2>
  </div>
</section>

      {/* Mission Section Ends here  */}

      {/* Status Quo Starts here  */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left content column */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The status quo is broken
            </h2>
            <p className="text-gray-600 mb-6">
              The traditional processes around homeownership are opaque 
              and stressful. Fees aren't transparent and some are simply 
              outrageous in size. <span className="text-green-700">Traditional mortgage lending</span> is rife with 
              unnecessary fees and slow, painful processes. It's a system set 
              up to benefit insiders — not you. Better.com CEO, <span className="text-green-700">Vishal Garg</span>, 
              set out to change that.
            </p>
            <button 
              className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded transition duration-300"
            >
              Read Vishal's story
            </button>
          </div>
    
          {/* Right video column */}
          <div className="flex-1">
            <div className="relative rounded overflow-hidden bg-gray-200">
              <img 
                src={manImage} 
                alt="Vishal Garg, CEO of Better.com" 
                className="w-full h-auto"
              />
              {/* Play button overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 ml-1">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="text-green-700"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal/Popup */}
      {showVideoModal && (
        <div className="fixed inset-0  z-50 flex items-center justify-center p-4">
          <div className="relative h-170 w-350  ">
            {/* Close button */}
            <button 
              onClick={closeVideoModal}
              className="absolute -top- right-0 text-white hover:text-gray-300 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video container */}
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="Better.com Video"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* Status Quo Section Ends here  */}

      {/* How we Change Section Starts here  */}
      <section className="bg-green-800 text-white py-16 px-6 lg:px-12">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="font-semibold leading-tight text-2xl md:text-3xl lg:text-4xl tracking-tight md:tracking-tighter mr-120">
      How we're changing things
    </h2>
    <p className="leading-relaxed text-base md:text-lg text-left mt-8">
      Homeownership is a huge part of our economy. Housing overall is a <strong>$33 trillion</strong> business, and mortgages account for <strong>$15 trillion</strong>.
      Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers'.
    </p>
    <p className="font-normal leading-relaxed text-base md:text-lg text-left mt-4">
      That's why Better.com is redefining the homeownership process from the ground up.
      We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
    </p>
  </div>
</section>

<section className="bg-gray-50 py-16 px-6 lg:px-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl text-stone-600 mb-12">Backed by</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 place-items-center">
      <img src={SB} alt="SoftBank" className="h-10 md:h-12" />
      <img src={Ally} alt="Ally" className="h-10 md:h-12" />
      <img src={Citi} alt="Citi" className="h-10 md:h-12" />
      <img src={Ping} alt="PingAn Bank" className="h-10 md:h-12" />
      <img src={GM} alt="Goldman Sachs" className="h-10 md:h-12" />
      <img src={KPCB} alt="KPCB" className="h-10 md:h-12" />
      <img src={AE} alt="American Express" className="h-10 md:h-12" />
    </div>
  </div>
</section>

      {/* How we change section ends here  */}

      {/* CompanyTime Line Starts here  */}
      <section className="m-auto max-w-screen-xl pb-20 text-center mt-20">
        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight mb-16">
          Company timeline
        </h2>

        {/* Timeline Container */}
        <div className="relative m-auto w-1/3 p-2">
          {/* Adjustable and thick line */}
          <div 
            className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 bg-gray-300 mt-4"
            style={{ height: "100%" }}
          ></div>

          {/* Timeline Item 1 */}
          <div className="relative flex flex-col items-center">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold leading-heading  text-lg md:text-xl text-white bg-green-700 rounded-3xl p-2">
                2014
              </h3>
            </div>

            {/* Description Box */}
            <div className=" bg-stone-200 rounded-sm relative w-full bg-accentSecondary my-8 p-4 lg:p-6 -ml-4 -translate-x-1/2 lg:-ml-8">
              <p className="text-stone-600  leading-body m-0 p-0 text-left text-textSecondary text-base">
                After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold leading-heading  w-auto text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2015
              </h3>
            </div>

            {/* Description Box */}
            <div className="rounded-sm relative w-full bg-stone-200 my-8 p-4 lg:p-6 ml-4 translate-x-1/2 lg:ml-8">
              <p className="text-stone-600   text-left text-textSecondary text-base">
                Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
              </p>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2016
              </h3>
            </div>

            {/* Description Box */}
            <div className="bg-stone-200 rounded-sm relative w-full bg-accentSecondary my-8 p-4 lg:p-6 -ml-4 -translate-x-1/2 lg:-ml-8">
              <p className="text-stone-600 text-left text-textSecondary text-base">
                Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
              </p>
            </div>
          </div>
    
          {/* Timeline Item 4 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold  w-auto text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2017
              </h3>
            </div>

            {/* Description Box */}
            <div className="bg-stone-200 rounded-sm relative w-full  my-8 p-4 lg:p-6 ml-4 translate-x-1/2 lg:ml-8">
              <p className="text-stone-600 text-left text-textSecondary text-base">
                Better expands into the real estate market with Better Real Estate.
              </p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold  text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2018
              </h3>
            </div>

            {/* Description Box */}
            <div className="bg-stone-200 rounded-sm relative w-full bg-accentSecondary my-8 p-4 lg:p-6 -ml-4 -translate-x-1/2 lg:-ml-8">
              <p className="text-stone-600 text-left text-textSecondary text-base">
                Better Mortgage partners with Ally Bank to build Ally powered by Better.
              </p>
            </div>
          </div>

          {/* Timeline Item 6 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold  w-auto text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2019
              </h3>
            </div>

            {/* Description Box */}
            <div className=" bg-stone-200 rounded-sm relative w-full my-8 p-4 lg:p-6 ml-4 translate-x-1/2 lg:ml-8">
              <p className="text-stone-600   text-left text-textSecondary text-base">
                Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
              </p>
            </div>
          </div>

          {/* Timeline Item 7 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold  text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2021
              </h3>
            </div>

            {/* Description Box */}
            <div className="bg-stone-200 rounded-sm relative w-full bg-accentSecondary my-8 p-4 lg:p-6 -ml-4 -translate-x-1/2 lg:-ml-8">
              <p className="text-stone-600  text-left text-textSecondary text-base">
                Better acquires Trussle — The UK's most innovative online mortgage broker
              </p>
            </div>
          </div>

          {/* Timeline Item 8 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold w-auto text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2022
              </h3>
            </div>

            {/* Description Box */}
            <div className="bg-stone-200 rounded-sm relative w-full my-8 p-4 lg:p-6 ml-4 translate-x-1/2 lg:ml-8">
              <p className="text-stone-600 text-left text-textSecondary text-base">
                Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
              </p>
            </div>
          </div>

          {/* Timeline Item 10 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold w-auto text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                2023
              </h3>
            </div>

            {/* Description Box */}
            <div className="bg-stone-200 rounded-sm relative w-full bg-accentSecondary my-8 p-4 lg:p-6 -ml-4 -translate-x-1/2 lg:-ml-8">
              <p className="text-stone-600 text-left text-textSecondary text-base">
                Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
              </p>
            </div>
            <div className="bg-stone-200 rounded-sm relative w-full  my-8 p-4 lg:p-6 ml-4 translate-x-1/2 lg:ml-8">
              <p className="text-stone-600 text-left text-textSecondary text-base">
                Better Mortgage launches the fully digital 3-day HELOC²
              </p>
            </div>
            <div className="bg-stone-200 rounded-sm relative w-full bg-accentSecondary my-8 p-4 lg:p-6 -ml-4 -translate-x-1/2 lg:-ml-8">
              <p className="text-stone-600 text-left text-textSecondary text-base">
                Better Mortgage launches One Day Verified Approval Letter.
              </p>
            </div>
          </div>

          {/* Timeline Item 11 */}
          <div className="relative flex flex-col items-center mt-8">
            {/* Year Badge */}
            <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2 w-full">
              <h3 className="font-bold leading-heading m-0 tracking-normal text-lg md:text-xl text-white bg-green-700 rounded-3xl p-3">
                Today
              </h3>
            </div>

            {/* Description Box */}
            <div className="bg-stone-200 rounded-sm relative w-full  my-8 p-4 lg:p-6 ml-4 translate-x-1/2 lg:ml-8">
              <p className="text-stone-600  leading-body m-0 p-0 text-left text-textSecondary text-base">
                You become part of the story by joining tens of thousands of happy Better <br/>Mortgage borrowers
              </p>
              <a className='rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-base h-2xl items-center justify-center mt-4 flex w-fit p-3 rounded-xl bg-green-700 text-white' href='#'>Get started</a>
            </div>
          </div>
        </div>
      </section>
      {/* CompanyTime Line Ends here  */}

      <BetterFooter />
    </div>
  )
}