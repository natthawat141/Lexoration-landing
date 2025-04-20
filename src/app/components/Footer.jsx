import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-24 my-16 px-4 sm:px-6 lg:px-8">
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        <div className="space-y-2">
          <h2 className="font-bold text-2xl">Lexoration</h2>
          <p className="text-neutral-400">
            Lexoration is a leading platform for online education, offering
            innovative and accessible learning experiences to students and
            professionals around the globe.
          </p>
          <address className="not-italic space-y-2 text-purple-500">
            <div className="flex gap-4 items-center">
              <IoMail /> Lexoration@gmail.com
            </div>
            <div className="flex gap-4 items-center">
              <IoCall /> 999 9999
            </div>
          </address>
        </div>

        <nav className="space-y-2">
          <h2 className="font-bold text-2xl">Links</h2>
          <ul className="text-neutral-400 space-y-2">
            <li className="flex items-center gap-4 hover:translate-x-4 transition-all">
              <IoIosArrowForward /> Home
            </li>
            <li className="flex items-center gap-4 hover:translate-x-4 transition-all">
              <IoIosArrowForward /> About
            </li>
            <li className="flex items-center gap-4 hover:translate-x-4 transition-all">
              <IoIosArrowForward /> Contact
            </li>
            <li className="flex items-center gap-4 hover:translate-x-4 transition-all">
              <IoIosArrowForward /> Courses
            </li>
          </ul>
        </nav>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">Subscribe</h2>
          <p className="text-neutral-400">
            Stay informed with the latest updates, course launches, and insights
            from Lexoration by subscribing to our newsletter.
          </p>
          <form className="rounded-lg border flex flex-col sm:flex-row border-gray-400 px-2 py-1 gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-2 py-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-purple-500 px-4 py-2 rounded-lg font-bold text-white cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">Follow us</h2>
          <div className="flex gap-4 text-purple-500 flex-wrap">
            <div className="p-2 rounded-2xl border border-purple-500 cursor-pointer">
              <FaFacebook />
            </div>
            <div className="p-2 rounded-2xl border border-purple-500 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="p-2 rounded-2xl border border-purple-500 cursor-pointer">
              <FaLinkedin />
            </div>
            <div className="p-2 rounded-2xl border border-purple-500 cursor-pointer">
              <FaSquareInstagram />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
