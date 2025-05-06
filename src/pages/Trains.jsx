import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchedTrains from '../components/FromtoSearchTrains.jsx'
import TrainList from '../components/TrainList.jsx'
function Trains() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  return (
    <div>
      <SearchedTrains source={from} destination={to}/>
      <TrainList source={from} destination={to} />
    </div> 
  )
}

export default Trains
    