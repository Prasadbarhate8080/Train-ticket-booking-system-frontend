import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchedTrains({ source, destination }) {
  const [searchParams] = useSearchParams();
  const date1 = searchParams.get("date");

  return (
    <div className="w-full bg-[#362f2f] py-6 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-md shadow-[0_4px_11px_rgba(29,29,29,0.188)]">
        <div className="flex flex-col md:flex-row md:items-center md:divide-x">

          <div className="flex items-center gap-3 px-4 py-3 md:w-1/3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3h8a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z"></path>
              <path d="M7 8h10"></path>
              <path d="M7 12h10"></path>
            </svg>

            <div className="flex flex-col">
              <span className="text-xs text-gray-500">From</span>
              <input
                type="text"
                readOnly
                value={source}
                className="font-bold text-[15px] outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 md:w-1/3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3h8a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z"></path>
              <path d="M7 8h10"></path>
              <path d="M7 12h10"></path>
            </svg>

            <div className="flex flex-col">
              <span className="text-xs text-gray-500">To</span>
              <input
                type="text"
                readOnly
                value={destination}
                className="font-bold text-[15px] outline-none"
              />
            </div>
          </div>

          <div className="flex items-center px-4 py-3 md:w-1/3">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Date of Journey</span>
              <input
                type="date"
                readOnly
                value={date1}
                className="font-bold outline-none"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchedTrains;
