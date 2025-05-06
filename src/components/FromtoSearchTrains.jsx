import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "./Container/Container.jsx";
function SearchedTrains({source,destination}) {
  const [searchParams] = useSearchParams();
  const date1 = searchParams.get("date");
  return (
    <div className="w-full h-[152px] flex justify-center items-center bg-[#362f2f]">
      <div
        className="[From-to-div] w-fit rounded-md  shadow-[0_4px_11px_rgba(29,29,29,0.188)]  
           bg-white"
      >
        <div className="[in-from-to] h-[65px] w-fit flex gap-4  rounded-3xl mx-auto">
          <div className="relative [h-full]  w-fit  border-[0.8px] flex">
            <div className=" [from] w-[267px] h-full border-r-[0.8px] flex justify-center items-center">
              <div className="h-[45px] w-full flex items-center justify-center">
                <div className="w-[84%] flex h-full gap-3">
                  <div className="h-full w-fit flex items-center">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#111"
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
                  </div>
                  <div className="h-full">
                    <div className="text-[12px] h-[18px] outline-0 border-0 focus:outline-0 focus:border-0 text-[rgba(29,29,29,0.64)]">
                      From
                    </div>
                    <div>
                      <input
                        className="text-[17px] font-bold outline-0 border-0 text-[#1d1d1d]"
                        type="text" readOnly
                        value={source}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[252px] bg-gray-700 rounded-md  top-3.5 cursor-pointer w-[30px]  h-[30px]">
              <img className="invert" src="\public\images\logo1.svg" alt="" />
            </div>
            <div className="[to] w-[267px] h-full border-r-[0.8px] flex justify-center items-center">
              <div className="h-[45px] w-full flex items-center justify-center">
                <div className="w-[70%] flex h-full gap-3">
                  <div className="h-full w-fit flex items-center">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#111"
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
                  </div>
                  <div className="h-full">
                    <div className="text-[12px] h-[18px] outline-0 border-0 focus:outline-0 focus:border-0 text-[rgba(29,29,29,0.64)]">
                      To
                    </div>
                    <div>
                      <input
                        className="text-[17px] font-bold outline-0 border-0 text-[#1d1d1d]"
                        type="text" readOnly
                        value={destination}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[date] w-[267px] h-full flex justify-center items-center">
              <div className="h-[45px] w-full flex items-center justify-center">
                <div className="w-[70%] flex h-full gap-3">
                  <div className="h-full">
                    <div className="text-[12px] h-[18px] outline-0 border-0 focus:outline-0 focus:border-0 text-[rgba(29,29,29,0.64)]">
                      Date of Journey
                    </div>
                    <div>
                      <input
                        className="font-bold text-[#1d1d1d]"
                        type="date" readOnly
                        value={date1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchedTrains;
