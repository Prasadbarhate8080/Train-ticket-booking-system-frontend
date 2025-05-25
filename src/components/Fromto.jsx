import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";

function Fromto() {
  const [from, setFrom] = useState("shrirampur");
  const [to, setTo] = useState("kopargaon");
  const date1 = Date.now();

  const [date, setDate] = useState(new Date(date1).toLocaleDateString());
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/searched-trains?from=${from}&to=${to}&date=${date}`);
  };
  return (
    <div
      className="[From-to-div] mt-[68px] max-w-full rounded-3xl p-1 shadow-[0_4px_11px_rgba(29,29,29,0.188)] h-[125px] 
           bg-white"
    >
      <div className="[in-from-to] h-[65px] w-fit flex flex-wrap gap-4 mt-3 rounded-3xl mx-auto">
        <div className="relative [h-full] max-w-[310px] md:max-w-[1200px] rounded-3xl border-[0.8px] flex">
          <div className=" [from] w-[50%] md:w-[260px] h-full border-r-[0.8px] flex justify-center items-center">
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
                <div className="h-full w-[100px]">
                  <div className="text-[12px] inline-block md:block h-[18px] outline-0 border-0 focus:outline-0 focus:border-0 text-[rgba(29,29,29,0.64)]">
                    From
                  </div>
                  <div>
                    <input
                      className="md:text-[17px] text-[13px] w-[100px] font-bold outline-0 border-0 text-[#1d1d1d]"
                      type="text"
                      value={from}
                      onChange={(e) => {
                        setFrom(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:block hidden left-[244px] bg-gray-700  rounded-md  top-3.5 cursor-pointer h-[30px] w-[30px]">
            <img className="invert" src="\images\logo1.svg" alt="" /> 
          </div>
          <div className="absolute md:hidden block left-[127px]   rounded-md  top-4.5 cursor-pointer h-[30px] min-w-[30px]">
            <ArrowBigRight/>
          </div>
          <div className="[to] md:ml-1  max-w-[50%] md:w-[260px]  h-full ml-5  md:border-r-[0.8px] flex justify-center items-center">
            <div className="h-[45px]   flex items-center justify-center">
              <div className=" flex h-full w-[130px] gap-3 ">
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
                <div className="h-full w-[110px]">
                  <div className="text-[12px] inline-block md:block h-[18px] outline-0 border-0 focus:outline-0 focus:border-0 text-[rgba(29,29,29,0.64)]">
                    To
                  </div>
                  <div>
                    <input
                      className="md:text-[17px] text-[13px] w-[100px] font-bold outline-0 border-0 text-[#1d1d1d]"
                      type="text"
                      value={to}
                      onChange={(e) => {
                        setTo(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[date] hidden md:flex min-w-[350px] h-full  justify-center items-center">
            <div className="h-[45px] w-full flex items-center justify-center">
              <div className=" flex h-full gap-3">
                <div className="h-full">
                  <div className="text-[12px] h-[18px] outline-0 border-0 focus:outline-0 focus:border-0 text-[rgba(29,29,29,0.64)]">
                    Date of Journey
                  </div>
                  <div>
                    <input
                      className="font-bold  text-[#1d1d1d]"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-1 items-center font-semibold">
                  <button className="bg-[#fed9d5]  rounded-3xl px-2 py-2 cursor-pointer">
                    Tomorrow
                  </button>
                  <button className="  bg-[#fed9d5] rounded-3xl px-2 py-2 cursor-pointer">
                    Day After
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="[toggle] h-full md:flex hidden  w-[270px]  items-center rounded-3xl border-[0.8px]">
          <div className="h-[45px] w-full flex items-center justify-center">
            <div className="w-[90%] flex h-full gap-3">
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
                <div className="  text-[#1d1d1d]  font-[500]">
                  Free Cancellation
                </div>
                <div>
                  <span className=" cancellation text-[rgba(29,29,29,0.64)] ">
                    Rs.0 cancellation fee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5">
        <button
          className="px-16 py-2 flex gap-2 bg-[#d63941] rounded-3xl cursor-pointer"
          onClick={handleSearch}
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#fff"
              fill="none"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-white font-semibold"> Search Trains</div>
        </button>
      </div>
    </div>
  );
}

export default Fromto;
