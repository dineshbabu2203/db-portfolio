import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { logo } from "../assets";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailClick = () => {
    const email = "dineshbabu2203@gmail.com";
    const subject = "Let's Connect";
    const body = "Hi Dinesh,\n\nI’d like to connect with you regarding...";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
  };

  const handleLinkedInClick = () => {
    const linkedInUsername = "dinesh-babu-74b96a222";
    const linkedInUrl = `https://www.linkedin.com/in/${linkedInUsername}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <footer className="bg-primary w-full text-white py-6 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left - Logo */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <img src={logo} alt="logo" className="w-12 h-11 object-contain" />
          <p className="text-[18px] font-bold">
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </div>

        {/* Middle - Social Links & Email */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/dineshbabu2203"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </a>
            <button
              onClick={handleLinkedInClick}
              className="hover:text-gray-400"
              title="Visit my LinkedIn profile"
            >
              <FaLinkedin />
            </button>
          </div>

          <button
            onClick={handleEmailClick}
            className="text-sm text-gray-300 hover:text-white underline"
          >
            dineshbabu2203@gmail.com
          </button>
        </div>

        {/* Right - Scroll to Top */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-violet-500 to-pink-500 p-2 rounded-full hover:scale-110 transition"
            title="Go to top"
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
