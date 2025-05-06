import React from "react";
import { Container } from "../components/index.js";
import Fromto from "../components/Fromto.jsx";

function Home() {
  return (
    <div className="">
      <div className="">
        <div className="width-full p-4 h-[280px] bg-[url(https://www.redbus.in/rails/public/images/banner.svg)]">
          <Container>
            <h1 className="text-5xl mt-5 font-bold font-inter text-white ">
              Train Ticket Booking
            </h1>
            <div className="mt-8 flex items-center gap-3">
              <img
                className="inline-block"
                src="https://www.redbus.in/rails/public/images/irctc_b.svg"
                alt=""
              />
              <span className="text-white text-2xl">
                IRCTC Authorised Partner
              </span>
            </div>
          </Container>
          <Container>
            <Fromto />
          </Container>
        </div>
      </div>
      <div className="bg-[#f2f2f8] h-[160px] mt-24 py-6 ">
        <Container>
          <div className="flex gap-4">
            <div className="w-[295px] h-[112px] flex justify-center items-center rounded-2xl bg-white shadow-[0_1px_12px_rgba(29,29,29,0.102)]">
              <div>
                <img
                  className="block m-auto"
                  src="https://www.redbus.in/rails/public/images/pnr.svg"
                  alt=""
                />
                <div className="font-bold text-[#1d1d1d]">
                  check PRN status{" "}
                </div>
              </div>
            </div>
            <div className="w-[295px] h-[112px] flex justify-center items-center rounded-2xl bg-white shadow-[0_1px_12px_rgba(29,29,29,0.102)]">
              <div>
                <img
                  className="block m-auto"
                  src="https://www.redbus.in/rails/public/images/lts.svg"
                  alt=""
                />
                <div className="font-bold text-[#1d1d1d]">
                  check PRN status{" "}
                </div>
              </div>
            </div>
            <div className="w-[295px] h-[112px] flex justify-center items-center rounded-2xl bg-white shadow-[0_1px_12px_rgba(29,29,29,0.102)]">
              <div>
                <img
                  className="block m-auto"
                  src="https://www.redbus.in/rails/public/images/food.svg"
                  alt=""
                />
                <div className="font-bold text-[#1d1d1d]">
                  check PRN status{" "}
                </div>
              </div>
            </div>
            <div className="w-[295px] h-[112px] flex justify-center items-center rounded-2xl bg-white shadow-[0_1px_12px_rgba(29,29,29,0.102)]">
              <div>
                <img
                  className="block m-auto"
                  src="https://www.redbus.in/rails/public/images/madad.svg"
                  alt=""
                />
                <div className="font-bold text-[#1d1d1d]">
                  check PRN status{" "}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-15">
        <Container>
          <h1 className="font-bold text-2xl">Why Book With easyTrain</h1>
          <div className="h-[134px] mt-10 flex gap-4 ">
            <div className="w-[323px] h-full p-4 flex gap-2 rounded-xl shadow-[0_1px_12px_rgba(29,29,29,0.102)]">
              <div className="w-[189px]">
                <h1 className="text-orange-600 font-bold text-md">
                  easyTrain confirm
                </h1>
                <span className="mt-2 inline-block">
                  Confirm ticket on waitlisted trains
                </span>
              </div>
              <div className="w-[96px]">
                <img
                  src="https://st.redbus.in/Images/redrail/USP%20Page/redRail_confirm.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[323px] h-full p-4 flex gap-2 rounded-xl shadow-[0_1px_12px_rgba(29,29,29,0.102)]">
              <div className="w-[189px]">
                <h1 className="text-indigo-600 font-bold text-md">
                  easyTrain confirm
                </h1>
                <span className="mt-2 inline-block">
                  {" "}
                  Confirm ticket on waitlisted trains
                </span>
              </div>
              <div className="w-[96px]">
                <img
                  src="https://st.redbus.in/Images/redrail/USP%20Page/seat_guarantee.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[323px] h-full p-4 flex gap-2 rounded-xl shadow-[0_1px_12px_rgba(29,29,29,0.102)]">
              <div className="w-[189px]">
                <h1 className="text-green-600 font-bold text-md">
                  easyTrain confirm
                </h1>
                <span className="mt-2 inline-block">
                  Confirm ticket on waitlisted trains
                </span>
              </div>
              <div className="w-[96px]">
                <img
                  src="https://st.redbus.in/Images/redrail/USP%20Page/connecting_train.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
