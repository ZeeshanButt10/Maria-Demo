import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);
  const location = useLocation();

  // Check Scroll and Change the Navarbar background
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setisOpen(false); // Close mobile menu when resizing to md or above
      }
    };

    window.addEventListener("resize", handleResize);
    //READ about it what are cleanup functions
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/watch", label: "Vigilados" },
    { to: "/data", label: "Data" },
    { to: "/contact", label: "Contactanos" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-[#050414]/50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center font-sans font-bold">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex text-lg font-semibold cursor-pointer">
            <img className="w-25 h-6" src="src\assets\logo.webp" alt="Logo" />
            <span className="text-gray-500 font-bold text-sm mt-5 -ml-8">
              Beta
            </span>
          </div>
        </Link>
        {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-8 text-gray-400 ">
          {menuItems.map((item) => (
            <Link
              to={item.to}
              className={`cursor-pointer transition duration-300 ${
                location.pathname === item.to
                  ? "text-[#4dbc83] underline underline-offset-8"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#339e81] cursor-pointer"
              onClick={() => setisOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#339e81] cursor-pointer"
              onClick={() => setisOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/50 backdrop-blur-md z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setisOpen(false)}
                  className={` hover:text-white 
                        ${location.pathname === item.to ? "text-[#339e81]" : ""}
                      `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;