"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About us", link: "#about" },
  { name: "Contact", link: "#contact" },
  { name: "Courses", link: "#courses" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // ตรวจจับการสกรอลล์
    window.addEventListener("scroll", handleScroll);
    
    // อัพเดต active link ตาม path ปัจจุบัน
    setActiveLink(window.location.pathname);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/70 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-3xl font-bold text-purple-600 flex gap-4 items-center"
          >
            <img
              src="/LogoLXRT 1.png"
              className="w-7 h-10 inline-block"
              alt="Logo"
            />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
              Lexoration
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => {
            // ตรวจสอบว่าเป็นเมนูที่กำลังเปิดดูอยู่หรือไม่
            const isActive = activeLink === item.link;
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.link}
                  className={`text-gray-800 hover:text-purple-500 transition-colors text-sm font-medium tracking-wider ${
                    isActive ? "text-purple-600" : ""
                  }`}
                >
                  {item.name}
                </Link>
                {/* เพิ่มแถบแสงใต้เมนูเมื่อ active หรือ hover */}
                <span
                  className={`absolute left-0 bottom-[-5px] w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300 ${
                    isActive ? "w-full shadow-[0_0_8px_rgba(147,51,234,0.5)]" : ""
                  }`}
                ></span>
              </motion.div>
            );
          })}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/signup"
              className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300 text-sm font-bold tracking-wider"
            >
              SIGN UP
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-purple-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeLink === item.link;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`text-gray-800 transition-colors py-2 text-sm font-medium tracking-wider relative group ${
                      isActive ? "text-purple-600" : "hover:text-purple-500"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative">
                      {item.name}
                      {/* เพิ่มแถบแสงใต้เมนูใน mobile เมื่อ active */}
                      {isActive && (
                        <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.5)]"></span>
                      )}
                    </span>
                  </Link>
                );
              })}
              <Link
                href="/coming"
                className="bg-purple-600 text-white px-5 py-2 rounded-md flex justify-center items-center hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300 text-sm font-bold tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;