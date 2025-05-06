import React from "react";
import { FaTrain, FaClock, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal, MdDirectionsRailway } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function TrainCard({ train }) {
  const navigate = useNavigate();

  const handleBookedTicket = () => {
    navigate(`/book-ticket?trainNumber=${train.trainNumber}`);
  };

  return (
    <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-6 border border-orange-100 hover:shadow-2xl transition-shadow duration-300 group">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-orange-200">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <FaTrain className="text-2xl text-orange-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{train.name || "Rajdhani Express"}</h2>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MdDirectionsRailway className="text-orange-500" />
              <span>Train No: {train.trainNumber || "12951"}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Route Details */}
      <div className="flex items-center justify-between mb-6 relative">
        <div className="text-center">
          <p className="font-bold text-gray-800 text-lg">{train.source || "Mumbai"}</p>
          <p className="text-xs text-gray-500">{train.departureTime || "08:00 AM"}</p>
        </div>
        
        <div className="flex flex-col items-center mx-2">
          <IoIosArrowForward className="text-2xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="bg-orange-100 px-2 py-1 rounded-full text-xs font-semibold text-orange-700 mt-8">
            {train.duration || "6h 30m"}
          </div>
        </div>

        <div className="text-center">
          <p className="font-bold text-gray-800 text-lg">{train.destination || "Delhi"}</p>
          <p className="text-xs text-gray-500">{train.arrivalTime || "02:30 PM"}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center bg-orange-50 p-2 rounded-lg">
          <MdOutlineAirlineSeatReclineNormal className="text-2xl text-orange-600 mx-auto" />
          <p className="text-sm font-semibold mt-1">{train.availableSeats || "45"}</p>
          <p className="text-xs text-gray-500">Seats</p>
        </div>
        
        <div className="text-center bg-orange-50 p-2 rounded-lg">
          <FaClock className="text-2xl text-orange-600 mx-auto" />
          <p className="text-sm font-semibold mt-1">{train.duration || "6h 30m"}</p>
          <p className="text-xs text-gray-500">Duration</p>
        </div>
        
        <div className="text-center bg-orange-50 p-2 rounded-lg">
          <FaRegMoneyBillAlt className="text-2xl text-orange-600 mx-auto" />
          <p className="text-sm font-semibold mt-1">₹{train.pricePerSeat || "1200"}</p>
          <p className="text-xs text-gray-500">Fare</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-orange-100">
        <span className="text-sm text-gray-600 flex items-center gap-1">
          <span className="bg-orange-100 px-2 py-1 rounded-md text-orange-700 text-xs font-medium">
            {train.type || "Superfast Express"}
          </span>
        </span>
        <button 
          onClick={handleBookedTicket}
          className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-md hover:shadow-orange-200 flex items-center gap-2"
        >
          Book Now
          <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </div>
  );
}

export default TrainCard;
