import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRightIcon,
  UserCircleIcon,
  TicketIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline"; 
import { ticketService } from "../services/ticketServices.js";

const BookTicketCompo = () => {
  const [searchParam] = useSearchParams();
  const trainNumber = searchParam.get("trainNumber");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    seatPreference: "Window",
    email: "",
    phone: "",
    travelDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const passengerData = {
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        seatPreference: formData.seatPreference,
        email: formData.email,
        phone: formData.phone,
      };

      const response = await ticketService.bookTicket(
        trainNumber,
        passengerData,
        formData.travelDate
      );

      console.log(response.data);

      navigate(`/display-ticket/${response.data._id}`);

    } catch (error) {
      alert("Booking failed! ❌");
      console.error("Error:", error);
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-2xl border-2 border-orange-200 relative">
      {/* Decorative Elements */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <TicketIcon className="h-12 w-12 text-orange-500" />
      </div>
      
      <div className="mb-8 text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
          Train Ticket Booking
        </h2>
        <p className="text-orange-700 font-medium">
          Train Number: {trainNumber || "N/A"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Passenger Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
          <div className="flex items-center mb-4 space-x-2">
            <UserCircleIcon className="h-6 w-6 text-orange-500" />
            <h3 className="text-xl font-semibold text-orange-700">Passenger Details</h3>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              />
              <UserCircleIcon className="h-5 w-5 text-orange-400 absolute left-3 top-3.5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <span className="absolute left-3 top-3.5 text-orange-400">🔢</span>
              </div>

              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none appearance-none"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <span className="absolute left-3 top-3.5 text-orange-400">👤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Preferences Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
          <div className="flex items-center mb-4 space-x-2">
            <TicketIcon className="h-6 w-6 text-orange-500" />
            <h3 className="text-xl font-semibold text-orange-700">Travel Preferences</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                name="seatPreference"
                value={formData.seatPreference}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none appearance-none"
              >
                <option>Window</option>
                <option>Aisle</option>
                <option>Middle</option>
              </select>
              <span className="absolute left-3 top-3.5 text-orange-400">💺</span>
            </div>

            <div className="relative">
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <CalendarIcon className="h-5 w-5 text-orange-400 absolute left-3 top-3.5" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center
           space-x-2 bg-gradient-to-r from-orange-500 to-amber-600
            text-white py-4 rounded-xl text-lg font-bold hover:from-orange-600 
            hover:to-amber-700 transition-all transform hover:scale-[1.01] shadow-lg
             hover:shadow-orange-200 disabled:opacity-50"
          >
          {loading ? "Booking..." : "Confirm Booking"}
          <ArrowRightIcon className="h-5 w-5 text-white" />
        </button>
      </form>
    </div>
  );
};

export default BookTicketCompo;


