import React, { useState } from "react";
import { trainService } from "../services/trainServices.js";

const AdminCompo = () => {
  const [trainData, setTrainData] = useState({
    name: "",
    trainNumber: "",
    source: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    totalSeats: "",
    availableSeats: "",
    pricePerSeat: "",
    duration: "",
  });

  const handleChange = (e) => {
    setTrainData({ ...trainData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await trainService.addTrains(trainData);
      alert("Train added successfully!");
      console.log(response);
    } catch (error) {
      alert("Error adding train");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg mt-5 rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        🚆 Add New Train
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {Object.keys(trainData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700 mb-1">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type="text"
              name={key}
              value={trainData[key]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md transition-all"
        >
          ➕ Add Train
        </button>
      </form>
    </div>
  );
};

export default AdminCompo;
