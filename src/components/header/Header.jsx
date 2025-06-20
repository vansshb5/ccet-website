import React, { useState } from 'react';
import CCETLogo from '../../assets/header/CCET-Logo.png';
import IndianEmblem from '../../assets/header/Indian-Emblem.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  return (
      <div className="w-full pt-4 pb-1 px-4 bg-gradient-to-r from-blue-900 to-slate-900 flex flex-col items-center">
        <div className="w-full max-w-[1800px] flex flex-col items-center">
          {/* Logo and title row */}
          <div className="w-full flex justify-between items-center">
            <img
                className="w-36 sm:w-44 h-36 sm:h-44 rounded-3xl min-w-[144px] sm:min-w-[176px] object-contain"
                src={CCETLogo}
                alt="College Logo"
            />

            <div className="flex-1 px-2 sm:px-4 flex flex-col items-center min-w-0 text-center">
              <h1 className="text-white text-2xl sm:text-4xl xl:text-6xl font-serif max-w-full break-words">
                Chandigarh College of Engineering and Technology
              </h1>
              <p className="text-white text-base sm:text-xl xl:text-3xl font-serif max-w-full break-words mt-2">
                (Government Institute Under Chandigarh UT Administration Affiliated to Panjab University, Chandigarh)
              </p>
            </div>

            <img
                className="w-32 sm:w-40 h-32 sm:h-40 min-w-[128px] sm:min-w-[160px] object-contain"
                src={IndianEmblem}
                alt="University Logo"
            />
          </div>

          {/* Divider */}
          <div className="w-full max-w-[1400px] pt-1 pb-2">
            <div className="w-full border-t-2 border-white" />
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="w-full flex justify-end px-4 md:hidden">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
            >
              <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav
              className={`w-full flex-col md:flex-row md:flex justify-center items-center gap-6 xl:gap-20 px-4 transition-all duration-300 ease-in-out ${
                  menuOpen ? 'flex' : 'hidden md:flex'
              }`}
          >
            <NavItem text="Home" activeNav={activeNav} setActiveNav={setActiveNav} />
            <NavItem text="About Us" activeNav={activeNav} setActiveNav={setActiveNav} />
            <NavItem text="Academics" activeNav={activeNav} setActiveNav={setActiveNav} />
            <NavItem text="Students Section" activeNav={activeNav} setActiveNav={setActiveNav} />
            <NavItem text="Placements" activeNav={activeNav} setActiveNav={setActiveNav} />
            <NavItem text="Notices" activeNav={activeNav} setActiveNav={setActiveNav} />
          </nav>
        </div>
      </div>
  );
};

const NavItem = ({ text, activeNav, setActiveNav }) => {
  const isActive = activeNav === text;

  return (
      <div
          className={`flex-shrink-0 my-2 md:my-0 px-4 py-2 rounded-xl transition duration-200 cursor-pointer
        ${
              isActive
                  ? 'bg-yellow-500 border-2 border-yellow-300 text-black'
                  : 'text-white hover:bg-yellow-100 hover:text-black'
          }`}
          onClick={() => setActiveNav(text)}
      >
        <div className="text-xl md:text-2xl xl:text-[28px] font-serif whitespace-nowrap">
          {text}
        </div>
      </div>
  );
};

export default Header;
