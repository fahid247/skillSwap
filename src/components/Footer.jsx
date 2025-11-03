import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">SkillSwap</h2>
          <p className="text-gray-600">
            Learn, teach, and share your skills with people around the world. 
            SkillSwap connects learners and experts in a global knowledge community.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" /> +880 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" /> support@skillswap.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-primary">About Us</a></li>
            <li><a href="/skills" className="hover:text-primary">Popular Skills</a></li>
            <li><a href="/providers" className="hover:text-primary">Top Providers</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Social & Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>

          <ul className="text-gray-600 space-y-1 text-sm">
            <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-primary">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;