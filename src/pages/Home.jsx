import React, { useState } from "react";
import AI from "../assets/ai-powered.png";
import Trust from '../assets/Trustpilot.png';
import BetterFooter from "./BetterFooter";

export default function Home() {
  const testimonials = {
    Arian: {
      img: "https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp",
    },
    Amanda: {
      img: "https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp",
    },
    Paul: {
      img: "https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp",
    }
  };
  const [selected, setSelected] = useState("Arian");

  const tabs = {
    OurProduct: {
      img: "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
      img2: "https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
      img3: "https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
      img4: "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
      title1: "Buying your first home with Better",
      description1: "",
      title2: "One Day Mortgage<sup>1</sup>",
      description2: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
      title3: "Better HELOC",
      description3: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit <sup>2</sup>.",
      title4: "Insurance",
      description4: "Explore our insurance options to protect your home and investments.",
    },
    Calculator: {
      img: "https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp",
      img2: "https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp",
      img3: "https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp",
      img4: "https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp",
      title1: "Mortgage Calculator",
      description1: "",
      title2: "Affordability Calculator",
      description2: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
      title3: "HELOC Calculator",
      description3: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
      title4: "Fixed-Rate loan comparison Calculator",
      description4: "Explore fixed-rate mortgage options with our calculator.",
    },
    Guides: {
      img: "https://media.better.com/better-com/homepage/learning-center/good-dti.webp",
      img2: "https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp",
      img3: "https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp",
      img4: "https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp",
      title1: "What is good dept-to-income ration for a home",
      description1: "",
      title2: "Buying a House Without a Realtor",
      description2: "Thinking about buying a house without a real estate agent? Read this first.",
      title3: "Timeline for homebuying process",
      description3: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
      title4: "Conventional Loans requirements",
      description4: "",
    },
  };
  const[tab,setTab] =useState("OurProduct");
  
  return (
    <div>
      {/* Hero Setion Starts here */}

      <section className="relative section bg-accentPrimary overflow-hidden bg-green-900">
            <div className="absolute bottom-0 left-1/2 w-full h-[250px] md:h-[230px] -translate-x-1/2 translate-y-1/3 rounded-[406px] md:rounded-[1100px] bg-textInverseHighlight blur-[220px] md:blur-[475px]"></div>
            
            <div className="relative  m-auto max-w-6xl overflow-hidden px-6 md:px-10 lg:px-14">
              <h1 className="font-medium leading-heading m-0 p-0 w-auto tracking-tight md:tracking-tighter mt-[48px] z-1 leading-small text-center text-[50px] text-white md:mt-[80px] md:p-0 md:text-4xl lg:text-[100px]">
                The first <br /> 
                <span className="bg-[linear-gradient(116deg,_#00FF80_16.51%,_#A987FF_54.85%,_#EA06FF_94.62%)] bg-clip-text text-transparent">
                  AI-powered
                </span> Mortgage
              </h1>
              
              <p className="font-normal leading-body m-0 p-0 text-white text-[18px] md:text-[24px] text-center mt-[32px] md:mt-[18px]">
                Because you deserve Better.
              </p>
              
              <div className="w-auto text-center mt-8 md:mt-10">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200  hover:bg-green-950 hover:text-white h-16 px-12 py-5 w-full sm:w-fit bg-green-400"
                >
                  Start my pre-approval
                </a>
                
                <div className="mt-3 flex items-center justify-center gap-1 text-xs text-accentSecondary text-white">
                  <span >⏱️3 min</span><span>| No hard credit check</span>
                </div>
              </div>
            
      
            {/* Image Section */}
            <div className="relative flex flex-col items-center justify-center md:flex-row">
              <div className="mt-10 px-4 md:mt-12">
                <img
                  alt="Better Mortgage"
                  width="510"
                  height="810"
                  decoding="async"
                  loading="eager" 
                  style={{ color: "transparent" }}
                  src={AI}
                />
              </div>
            </div></div>
          </section>


      {/* Hero Section Ends Here  */}

      {/* Find Out Section Starts Here */}

          <section className='section m-auto flex max-w-7xl max-h-xl flex-col justify-between gap-x-3xl p-base px-lg py-4xl md:px-10 md:flex-row-reverse xl:p-[120px]'>
            <div className='flex flex-col justify-center md:max-w-[507px]'>
              <h2 className='font-bold text-textPrimary leading-heading m-0 p-0 w-auto tracking-tight md:tracking-tighter mb-lg text-3xl leading-small md:text-3xl lg:text-7xl'>
                Find out why we're better.
              </h2>
              <a 
                className='inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all duration-200 bg-accentPrimary text-interactiveForegroundPrimary hover:bg-backgroundInverseSecondary h-16 px-12 py-5 mb-sm w-full md:w-fit bg-green-900 text-white mt-11'
                href='#'
              >
                See all our stories
              </a>
              <div className='mb-2xl flex items-end justify-center gap-sm leading-small text-textSecondary md:justify-start'>
                <img src={Trust} className='h-8 mt-1.5 pt-1' alt="Trustpilot rating" />
                <span><strong>Excellent
                4.4</strong> out of 5</span>
              </div>
            </div>
      
            {/* Left Side - Testimonial Section */}
            <div className='flex flex-col items-center md:items-start'>
              {/* Dynamic Image + Text */}
              <div className="relative flex flex-col w-60 rounded-lg overflow-hidden shadow-lg ">
                <img
                  alt={`${selected}-testimonial`}
                  src={testimonials[selected].img}
                  className="w-full rounded-lg"
                />
           
              </div>
      
              {/* Buttons for Image Switching */}
              <div className='mt-lg flex gap-4'>
        {Object.keys(testimonials).map((name) => (
          <button
            key={name}
            onClick={() => setSelected(name)}
            className={`px-5 py-2 rounded-full text-base font-semibold border transition-all 
              ${selected === name ? "ring-4 ring-[#004D32] ring-offset-2 border-transparent" : "border-gray-300 text-gray-700"} 
              hover:ring-4 hover:ring-[#004D32] hover:ring-offset-2 hover:border-transparent mt-6 p-4`}
          >
            {name}
          </button>
        ))}
      </div>
      
            </div>
          </section>

      {/* Find Out Section Ends Here  */}

      {/* FAQ Section Starts Here  */}

      <section className="section w-full pb-base lg:pb-12">
  <div className="m-auto flex max-w-7xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
    <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
      <h2 className="font-bold text-xl md:text-2xl md:tracking-tight w-full max-w-lg">
        Got questions?
        <br />
        We've got answers
      </h2>
      <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
        {Object.keys(tabs).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => setTab(tabKey)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold transition-all ease-in-out duration-200 border h-12 px-6 py-3 w-auto ${
              tab === tabKey
                ? "ring-4 ring-green-600 text-black"
                : "border-gray-400 hover:ring-green-600 hover:cursor-pointer"
            }`}
          >
            {{
              OurProduct: 'Our Product',
              Calculator: 'Calculators',
              Guides: 'Guides & FAQs'
            }[tabKey]}
          </button>
        ))}
      </div>
    </div>

    <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
      {/* Card 1 */}
      <a className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10 bg-green-50" href="#">
        <div className="flex flex-col gap-6">
          <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl" dangerouslySetInnerHTML={{ __html: tabs[tab].title1 }} />
          <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block" dangerouslySetInnerHTML={{ __html: tabs[tab].description1 }} />
          <div className="flex items-end justify-between">
            <div className="group relative w-fit border border-gray-500 rounded-full">
              <div className="absolute inset-0 bg-green-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-universal"></div>
              <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="relative z-10 transition-transform duration-300 ease-universal group-hover:scale-115 text-green-900 group-hover:text-white " xmlns="http://www.w3.org/2000/svg">
                <path d="M16 24.5H32M32 24.5L25.3333 18M32 24.5L25.3333 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <img
          alt="Dynamic content"
          className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
          src={tabs[tab].img}
        />
      </a>

      {/* Card 2 */}
      <a className="bg-green-50 flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10" href="#">
        <div className="flex flex-col gap-6">
          <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl" dangerouslySetInnerHTML={{ __html: tabs[tab].title2 }} />
          <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block" dangerouslySetInnerHTML={{ __html: tabs[tab].description2 }} />
          <div className="flex items-end justify-between">
            <div className="group relative w-fit border border-gray-500 rounded-full">
              <div className="absolute inset-0 bg-green-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-universal"></div>
              <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="relative z-10 transition-transform duration-300 ease-universal group-hover:scale-115 text-green-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 24.5H32M32 24.5L25.3333 18M32 24.5L25.3333 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <img
          alt="Dynamic content"
          className="mt-8 w-7xl rounded-lg object-cover h-20 max-h-[250px] md:max-h-[300px]"
          src={tabs[tab].img2}
        />
      </a>

      {/* Card 3 */}
      <a className="bg-green-50 flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10" href="#">
        <div className="flex flex-col gap-6">
          <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl" dangerouslySetInnerHTML={{ __html: tabs[tab].title3 }} />
          <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block" dangerouslySetInnerHTML={{ __html: tabs[tab].description3 }} />
          <div className="flex items-end justify-between">
            <div className="group relative w-fit border border-gray-500 rounded-full">
              <div className="absolute inset-0 bg-green-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-universal"></div>
              <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="relative z-10 transition-transform duration-300 ease-universal group-hover:scale-115 text-green-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 24.5H32M32 24.5L25.3333 18M32 24.5L25.3333 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <img
          alt="Dynamic content"
          className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
          src={tabs[tab].img3}
        />
      </a>

      {/* Card 4 */}
      <a className="bg-green-50 flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10" href="#">
        <div className="flex flex-col gap-6">
          <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl" dangerouslySetInnerHTML={{ __html: tabs[tab].title4 }} />
          <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block" dangerouslySetInnerHTML={{ __html: tabs[tab].description4 }} />
          <div className="flex items-end justify-between">
            <div className="group relative w-fit border border-gray-500 rounded-full">
              <div className="absolute inset-0 bg-green-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-universal"></div>
              <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="relative z-10 transition-transform duration-300 ease-universal group-hover:scale-115 text-green-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 24.5H32M32 24.5L25.3333 18M32 24.5L25.3333 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <img
          alt="Dynamic content"
          className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
          src={tabs[tab].img4}
        />
      </a>
    </div>
  </div>
</section>

      {/* FAQ Section Ends Here  */}
      <BetterFooter/>

    </div>
  );
}