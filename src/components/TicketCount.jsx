import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function TicketCount() {
  const bookedTickets = useSelector((state) => state.bookedTickets.count);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (displayCount < bookedTickets) {
      const increaseCount = () => {
        setDisplayCount((prev) => {
          if (prev >= bookedTickets) return bookedTickets;
          setTimeout(increaseCount, 40); // **Speed control (100ms slow effect)**
          return prev + 1;
        });
      };
      increaseCount();
    }
  }, [bookedTickets]);

  return (
    <div className="text-right max-w-7xl m-auto text-xl font-bold text-orange-500">
      {displayCount} <span>Tickets</span>
    </div>
  );
}

export default TicketCount;
