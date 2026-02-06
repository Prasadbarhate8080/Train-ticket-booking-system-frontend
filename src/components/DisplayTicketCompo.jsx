import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ticketService } from "../services/ticketServices";
import { FaTrain, FaUser, FaRupeeSign, FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";

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

  const handleDownloadPDF = () => {
    if (!ticketRef.current) return;

    html2pdf()
      .from(ticketRef.current)
      .set({
        filename: "ticket.pdf",
        margin: 10,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4",  },
      })
      .save();
  };

  if (loading)
    return (
      <div className="text-center mt-20">
        <div
          className="animate-spin rounded-full h-12 w-12 mx-auto"
          style={{ borderBottom: "2px solid #f97316" }}
        ></div>
      </div>
    );

  if (error)
    return (
      <p style={{ color: "red", textAlign: "center", marginTop: 40 }}>
        Error: {error}
      </p>
    );

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ background: "#f3f4f6" }}
    >
      <div
        ref={ticketRef}
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden border"
        style={{
          background: "#ffffff",
          borderColor: "#e5e7eb",
          color: "#111827",
        }}
      >
        {/* HEADER */}
        <div
          className="px-8 py-6 flex justify-between items-center"
          style={{ background: "#f97316" }}
        >
          <div className="flex items-center space-x-4">
            <FaTrain className="text-3xl" style={{ color: "#ffffff" }} />
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#ffffff" }}>
                Railway Express
              </h1>
              <p className="text-sm" style={{ color: "#ffedd5" }}>
                E-Ticket • {ticket.trainId.source} to{" "}
                {ticket.trainId.destination}
              </p>
            </div>
          </div>

          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: ticket.status === "confirmed" ? "#dcfce7" : "#fee2e2",
              color: ticket.status === "confirmed" ? "#166534" : "#991b1b",
            }}
          >
            {ticket.status.toUpperCase()}
          </div>
        </div>

        {/* BODY */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Journey */}
            <div className="space-y-4">
              <h2
                className="text-xl font-bold flex items-center"
                style={{ color: "#1f2937" }}
              >
                <FaTrain className="mr-2" style={{ color: "#f97316" }} />
                Journey Details
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Train Name
                  </p>
                  <p className="font-medium">{ticket.trainId.name}</p>
                </div>

                <div>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Train Number
                  </p>
                  <p className="font-medium">{ticket.trainId.trainNumber}</p>
                </div>

                <div>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Departure
                  </p>
                  <p className="font-medium">{ticket.trainId.departureTime}</p>
                </div>

                <div>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Arrival
                  </p>
                  <p className="font-medium">{ticket.trainId.arrivalTime}</p>
                </div>
              </div>
            </div>

            {/* Passenger */}
            <div className="space-y-4">
              <h2
                className="text-xl font-bold flex items-center"
                style={{ color: "#1f2937" }}
              >
                <FaUser className="mr-2" style={{ color: "#f97316" }} />
                Passenger Details
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Name
                  </p>
                  <p className="font-medium">{ticket.passengerId.name}</p>
                </div>

                <div>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Age & Gender
                  </p>
                  <p className="font-medium">
                    {ticket.passengerId.age} • {ticket.passengerId.gender}
                  </p>
                </div>

                <div>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    Seat Preference
                  </p>
                  <p className="font-medium">
                    {ticket.passengerId.seatPreference || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="border-l lg:pl-8 space-y-6"
            style={{ borderColor: "#e5e7eb" }}
          >
            <div>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                PNR Number
              </p>
              <p
                className="text-2xl font-bold font-mono"
                style={{ color: "#f97316" }}
              >
                {ticket.pnrNumber}
              </p>
            </div>

            <div
              className="border-t pt-4 space-y-3"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex justify-between">
                <span style={{ color: "#374151" }}>Total Fare</span>
                <span className="flex items-center font-semibold">
                  <FaRupeeSign className="mr-1" />
                  {ticket.totalPrice}
                </span>
              </div>

              <div className="flex justify-between">
                <span style={{ color: "#374151" }}>Booking Date</span>
                <span style={{ color: "#374151" }}>
                  {new Date(ticket.bookingDate).toLocaleDateString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="border-t px-8 py-4 flex justify-end"
          style={{ borderColor: "#e5e7eb", background: "#f9fafb" }}
        >
          <button
            onClick={handleDownloadPDF}
            className="flex items-center px-5 py-2 rounded-lg"
            style={{
              background: "#f97316",
              color: "#ffffff",
            }}
          >
            <FaDownload className="mr-2" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayTicketCompo;
