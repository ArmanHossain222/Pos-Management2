import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">JMC Medicine Corner Ltd.</h2>
          <p className="text-sm text-gray-400">Your Trusted Pharmacy Partner</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/about" className="text-gray-400 hover:text-white transition">
            About Us
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-300 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} JMC Medicine Corner Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
