import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isGreenBackground, setIsGreenBackground] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsGreenBackground(window.scrollY < 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-colors duration-300 z-50 ${
        isGreenBackground ? "bg-green-800 text-white" : "bg-white text-black shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Logo */}
            <Link to={"/"} className="text-2xl font-bold">
              Better
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:ml-6 sm:space-x-4">
              {["Buy", "Refinance", "HELOC", "Rates", "Better+"].map((menu, index) => (
                <div key={index} className="relative group">
                  <span
                    className="px-3 py-2 text-sm font-medium cursor-pointer group-hover:bg-white group-hover:text-black rounded-3xl"
                  >
                    {menu}
                  </span>
                  {/* Dropdown Menu (Visible on Hover) */}
                  <div className="absolute left-0 mt-2 w-64 rounded-md py-2 shadow-lg bg-white text-black hidden group-hover:block z-50">
                    {menu === "Buy" && (
                      <>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Apply now
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Purchase rates
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Affordability calculator
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Mortgage calculator
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Rent vs buy calcultor
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Find an agent
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          VA loans
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Learning center
                        </a>
                        
                      </>
                    )}
                    {menu === "Refinance" && (
                      <>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Apply now
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Refinance rates
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Cash-out refinance calculator
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Learning center
                        </a>
                      </>
                    )}
                    {menu === "HELOC" && (
                      <>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Apply now
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Calculate your cash 💵
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          HELOC vs. Refinance
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Learning center
                        </a>
                      </>
                    )}
                    {menu === "Rates" && (
                      <>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Purchase mortgage rates
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Refinance rates
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          HELOC rates
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Purchase VA rates
                        </a>
                      </>
                    )}
                    {menu === "Better+" && (
                      <>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Get Insurance
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Title and Closing
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Better Attorney Match
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Learning center
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Better Agent Match <span className="bg-yellow-300 rounded-2xl ml-5 p-0.5">For Agents</span>
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                          Better Duo <span className="bg-yellow-300 rounded-2xl ml-5 p-0.5">For Agents</span>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium hover:text-black hover:bg-white rounded-3xl"
            >
              Sign In
            </a>
            <a
              href="#"
              className="ml-4 inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Get started
            </a>
            {/* Hamburger Menu Icon */}
            <button
              className="ml-4 sm:hidden text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Opens on Click) */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white text-black shadow-md rounded-md mt-2 p-4">
            {["Buy", "Refinance", "HELOC", "Rates", "Better+"].map((menu, index) => (
              <div key={index} className="mb-2">
                <button className="w-full text-left px-4 py-2 text-sm font-medium bg-gray-100 rounded-md">
                  {menu}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
