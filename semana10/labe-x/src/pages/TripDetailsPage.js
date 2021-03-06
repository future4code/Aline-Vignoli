import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import TripDetails from '../components/tripDetails/TripDetails'
import { baseUrl } from '../hooks/useRequestData'

const TripDetailsPage = () => {
    const [trip, setTrip] = useState(undefined)
    const history = useHistory()
    const pathParams = useParams()

    useEffect(()=> {
      const token = localStorage.getItem('token')
      token ? getTripDetails() : history.push('/login')
    },[history])

    const getTripDetails = () => {
      axios
        .get(
          `${baseUrl}/trip/${pathParams.id}`,
          {
            headers: {
              auth: localStorage.getItem("token")
            }
          }
        )
        .then((response) => {
          setTrip(response.data.trip);
        })
        .catch((error) => {
          console.log(error);
      });
    };

    return (
        trip !== undefined ? 
        <div>
            <TripDetails 
              tripId={trip.id}
              name={trip.name}
              description={trip.description}
              planet={trip.planet}
              date={trip.date}
              duration={`${trip.durationInDays} dias`}
              candidates={trip.candidates}
              getTripDetails={getTripDetails}
            />
        </div> 
        :
        null
    )
}

export default TripDetailsPage