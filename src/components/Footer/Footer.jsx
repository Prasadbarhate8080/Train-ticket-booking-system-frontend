
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800  w-full text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <Logo/>
    
          <ul className="flex space-x-6 text-sm">
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Support</a></li>
          </ul>

          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-orange-400"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-orange-400"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-orange-400"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-orange-400"><FaYoutube /></a>
          </div>
        </div>

        <hr className="border-gray-600 my-4" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} easyTrain. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

