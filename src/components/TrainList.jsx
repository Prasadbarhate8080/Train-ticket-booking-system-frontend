import React, { useEffect, useState } from "react";
import TrainCard from "./TrainCard";
import { trainService } from "../services/trainServices";
import { useDispatch } from "react-redux";
import { setTrains } from "../store/slices/trainSlice";
import { useSelector } from "react-redux";

function TrainList({ source, destination }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const trains = useSelector((state) => state.train.trainList);

  useEffect(() => {
    trainService
      .getTrains({ source, destination })
      .then((trains) => {
        if (trains) {
          dispatch(setTrains(trains.data));
        } else {
          console.log("not getting trains");
        }
      })
      .finally(() => setLoading(false));
  }, [source, destination, dispatch]);

  return (
    <div>
      <div className=" m-2 flex justify-center flex-col items-center gap-2">
        {loading ? (
          <p className="text-gray-500">Loading trains...</p>
        ) : trains.length > 0 ? (
          trains.map((train, index) => <TrainCard key={index} train={train} />)
        ) : (
          <p className="text-red-500">No trains found</p>
        )}
      </div>
    </div>
  );
}

export default TrainList;
