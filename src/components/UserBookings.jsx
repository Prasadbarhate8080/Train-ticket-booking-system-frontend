import React, { useEffect, useState } from "react";
import { ticketService } from "../services/ticketServices.js";
import { useSelector, useDispatch } from "react-redux";
import { setBookedTickets } from "../store/slices/bookedTicketsSlice.js";
import { useNavigate } from "react-router-dom";
import TicketCount from "./TicketCount.jsx";
import {
  FaTrain,
  FaCalendarDay,
  FaRupeeSign,
  FaArrowRight,
  FaMapMarkerAlt,
  FaChair,
  FaTicketAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function UserBookings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const tickets = useSelector((state) => state.bookedTickets.tickets);
  
  useEffect(() => {
    const bookings = async () => {
      try {
        setLoading(true)
        let response = await ticketService.getTickets();
        dispatch(setBookedTickets(response.data));
        
      } catch (error) {
        setErrors(error.message);
      }
      finally
      {
        setLoading(false)
      }
    };
    bookings();
  }, [dispatch]);

  const handleTicketClick = (ticketId) =>
    navigate(`/display-ticket/${ticketId}`);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <TicketCount />
      <div className="max-w-7xl mx-auto">
        <h1 className="md:text-4xl text-2xl mt-4 font-bold text-gray-800 text-center mb-12">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Your Travel History
          </span>
        </h1>
        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
          </div>
        )}
        {error && (
          <div className="bg-red-50 p-4 rounded-xl text-center max-w-md mx-auto border border-red-100">
            <p className="text-red-600 font-medium">⚠️ {error }</p>
          </div>
        )}
        {!error && tickets.length === 0 ? ( 
          <div className="bg-red-50 p-4 rounded-xl text-center max-w-md mx-auto border border-red-100">
            <p className="text-red-600 font-medium">⚠️ No Tickets Booked Yet</p>
          </div>
        ) : (
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket._id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className="h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200"
                  onClick={() => handleTicketClick(ticket._id)}
                >
                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                      ticket.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ticket.status.toUpperCase()}
                  </div>

                  {/* Train Header */}
                  <div className="p-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-orange-100 rounded-xl">
                        <FaTrain className="text-2xl text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {ticket.trainId.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-mono mt-1">
                          PNR: {ticket.pnrNumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Journey Details */}
                  <div className="p-6">
                    {/* Route */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-center">
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaMapMarkerAlt className="text-orange-500" />
                          <span className="font-semibold">
                            {ticket.trainId.source}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Departure</p>
                      </div>

                      <FaArrowRight className="text-gray-400 mx-2" />

                      <div className="text-center">
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaMapMarkerAlt className="text-red-500" />
                          <span className="font-semibold">
                            {ticket.trainId.destination}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Arrival</p>
                      </div>
                    </div>

                    {/* Date & Seat */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <FaCalendarDay className="text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">
                              {new Date(ticket.travelDate).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            Travel Date
                          </p>
                        </div>

                        <div className="flex-1 p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <FaChair className="text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">
                              {ticket.passengerId.seatPreference || "Any"}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            Seat Type
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <FaRupeeSign className="text-green-600" />
                          <span className="text-xl font-bold text-gray-800">
                            {ticket.totalPrice}
                          </span>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                          <FaTicketAlt className="text-sm" />
                          <span className="text-sm font-medium">
                            View Details
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserBookings;
