import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ticketService } from "../services/ticketServices";
import { FaTrain, FaUser, FaRupeeSign, FaDownload } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

function DisplayTicketCompo() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ticketRef = useRef(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await ticketService.getTicket(id);
        setTicket(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTicket();
  }, [id]);

useEffect(() => {
  console.log("Ticket Data:", ticket);
  console.log("Ticket Ref:", ticketRef.current);
}, [ticket]);

const handleDownloadPDF = useReactToPrint({
  content: () => ticketRef.current,
  documentTitle: "Train_Ticket",
  onBeforeGetContent: () => {
    console.log("Preparing PDF...");
  },
  onAfterPrint: () => {
    console.log("PDF Successfully Downloaded!");
  },
  removeAfterPrint: true, 
});
  

  if (loading)
    return (
      <div className="text-center mt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-red-500 text-center mt-10">Error: {error}</p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div
        ref={ticketRef}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
      >
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaTrain className="text-white text-3xl" />
            <div>
              <h1 className="text-2xl font-bold text-white">Railway Express</h1>
              <p className="text-orange-100 text-sm">
                E-Ticket • {ticket.trainId.source} to {ticket.trainId.destination}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full ${
                ticket.status === "confirmed"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <span className="text-sm font-semibold">{ticket.status.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <FaTrain className="mr-2 text-orange-500" />
                Journey Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Train Name</p>
                  <p className="font-medium">{ticket.trainId.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Train Number</p>
                  <p className="font-medium">{ticket.trainId.trainNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Departure</p>
                  <p className="font-medium">
                    {new Date(ticket.travelDate).toLocaleDateString("en-IN", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    • {ticket.trainId.departureTime}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Arrival</p>
                  <p className="font-medium">
                    {new Date(ticket.travelDate).toLocaleDateString("en-IN", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    • {ticket.trainId.arrivalTime}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <FaUser className="mr-2 text-orange-500" />
                Passenger Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{ticket.passengerId.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Age & Gender</p>
                  <p className="font-medium">
                    {ticket.passengerId.age} yrs • {ticket.passengerId.gender}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Seat Preference</p>
                  <p className="font-medium">{ticket.passengerId.seatPreference || "Not Specified"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-l lg:pl-8 space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">PNR Number</p>
                <p className="text-2xl font-bold text-orange-600 font-mono">{ticket.pnrNumber}</p>
              </div>
            </div>
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Fare</span>
                <span className="font-semibold text-lg flex items-center">
                  <FaRupeeSign className="mr-1" />
                  {ticket.totalPrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Booking Date</span>
                <span className="text-gray-700">
                  {new Date(ticket.bookingDate).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t bg-gray-50 px-8 py-4">
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <FaDownload className="mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayTicketCompo;
