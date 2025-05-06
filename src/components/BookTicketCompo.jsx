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
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-4 rounded-xl text-lg font-bold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-orange-200 disabled:opacity-50"
        >
          {loading ? "Booking..." : "Confirm Booking"}
          <ArrowRightIcon className="h-5 w-5 text-white" />
        </button>
      </form>
    </div>
  );
};

export default BookTicketCompo;




// import React, { useState, useEffect } from 'react'
// import { ticketService } from '../services/ticketServices.js';
// import { trainService } from '../services/trainServices.js';
// import { useSearchParams, useNavigate } from 'react-router-dom'

// function BookTicketCompo() {
//     const [searchParam] = useSearchParams();
//     const trainNumber = searchParam.get("trainNumber")
//     const navigate = useNavigate()
    
//     // State variables
//     const [trainDetails, setTrainDetails] = useState(null)
//     const [passengers, setPassengers] = useState([{ 
//         name: '', 
//         age: '', 
//         gender: 'male',
//         seatPreference: 'none'
//     }])
//     const [bookingStatus, setBookingStatus] = useState('')

//     // Fetch train details
//     useEffect(() => {
//         const fetchTrainDetails = async () => {
//             try {
//                 const response = await trainService.getTrains({source:"shrirampur",destination:"pune"})
//                 setTrainDetails(response.data)
//             } catch (error) {
//                 console.error("Error fetching train details:", error)
//             }
//         }
//         fetchTrainDetails()
//     }, [trainNumber])

//     // Handle passenger input change
//     const handlePassengerChange = (index, e) => {
//         const newPassengers = [...passengers]
//         newPassengers[index][e.target.name] = e.target.value
//         setPassengers(newPassengers)
//     }

//     // Add more passengers
//     const addPassenger = () => {
//         setPassengers([...passengers, { 
//             name: '', 
//             age: '', 
//             gender: 'male',
//             seatPreference: 'none'
//         }])
//     }

//     // Handle form submission
//     const handleBooking = async (e) => {
//         e.preventDefault()
//         try {
//             if(!passengers.every(p => p.name && p.age)) {
//                 alert('Please fill all passenger details')
//                 return
//             }
            
//             const bookingData = {
//                 trainNumber,
//                 passengers,
//                 bookingDate: new Date().toISOString()
//             }

//             const response = await ticketService.bookTicket(bookingData)
//             navigate(`/booking-confirmation/${response.data.bookingId}`, {
//                 state: { bookingDetails: response.data }
//             })
            
//         } catch (error) {
//             setBookingStatus('Booking failed! Please try again.')
//             console.error("Booking error:", error)
//         }
//     }

//     if(!trainDetails) return <div className="text-center py-8">Loading train details...</div>

//     return (
//         <div className="min-h-screen bg-gray-100 py-8 px-4">
//             <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
//                 {/* Train Details Section */}
//                 <div className="mb-8 border-b pb-4">
//                     <h2 className="text-2xl font-bold text-blue-600 mb-4">Train Details</h2>
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <p className="font-semibold">Train Name: <span className="font-normal">{trainDetails.trainName}</span></p>
//                             <p className="font-semibold">Train Number: <span className="font-normal">{trainDetails.trainNumber}</span></p>
//                         </div>
//                         <div>
//                             <p className="font-semibold">Departure: <span className="font-normal">{trainDetails.departureTime}</span></p>
//                             <p className="font-semibold">Arrival: <span className="font-normal">{trainDetails.arrivalTime}</span></p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Passenger Details Form */}
//                 <form onSubmit={handleBooking} className="space-y-6">
//                     {passengers.map((passenger, index) => (
//                         <div key={index} className="border rounded-lg p-4 mb-4">
//                             <h3 className="text-lg font-semibold mb-4">Passenger {index + 1} Details</h3>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         value={passenger.name}
//                                         onChange={(e) => handlePassengerChange(index, e)}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Age</label>
//                                     <input
//                                         type="number"
//                                         name="age"
//                                         value={passenger.age}
//                                         onChange={(e) => handlePassengerChange(index, e)}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Gender</label>
//                                     <select
//                                         name="gender"
//                                         value={passenger.gender}
//                                         onChange={(e) => handlePassengerChange(index, e)}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                     >
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                         <option value="other">Other</option>
//                                     </select>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Seat Preference</label>
//                                     <select
//                                         name="seatPreference"
//                                         value={passenger.seatPreference}
//                                         onChange={(e) => handlePassengerChange(index, e)}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                     >
//                                         <option value="none">No Preference</option>
//                                         <option value="lower">Lower Berth</option>
//                                         <option value="upper">Upper Berth</option>
//                                         <option value="window">Window Seat</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     <div className="flex justify-between items-center">
//                         <button
//                             type="button"
//                             onClick={addPassenger}
//                             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
//                         >
//                             Add Passenger
//                         </button>

//                         <button
//                             type="submit"
//                             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
//                         >
//                             Confirm Booking
//                         </button>
//                     </div>

//                     {bookingStatus && (
//                         <div className={`mt-4 p-3 rounded-lg ${bookingStatus.includes('failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
//                             {bookingStatus}
//                         </div>
//                     )}
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default BookTicketCompo