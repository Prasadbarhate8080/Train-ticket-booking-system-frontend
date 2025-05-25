import React from 'react';

function Logo({ width = "150px" }) {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e63900"  
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3h8a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z"></path>
        <line x1="8" y1="16" x2="8.01" y2="16"></line>
        <line x1="16" y1="16" x2="16.01" y2="16"></line>
        <path d="M7 8h10"></path>
        <path d="M7 12h10"></path>
      </svg>

      <div className="md:text-3xl text-2xl text-[#e63900]  md:font-extrabold tracking-wide italic">
        <span className="font-[500] ">easy</span>
        <span className="font-bold text-red-700">Train</span>
      </div>
    </div>
  );
}

export default Logo;

