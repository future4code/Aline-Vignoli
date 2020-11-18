import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import TripDetails from '../components/TripDetails'

const TripDetailsPage = () => {
    const [trip, setTrip] = useState(undefined)
    const history = useHistory()
    const pathParams = useParams()

    useEffect(()=> {
        const token = localStorage.getItem('token')
        token ? getTripDetail() : history.push('/login')
    }, [history])

    const getTripDetail = () => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/trip/${pathParams.id}`,
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
            />
        </div> 
        :
        null
    )
}

export default TripDetailsPage