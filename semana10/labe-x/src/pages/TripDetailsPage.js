import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

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
            <h2>{trip.name}</h2>
            <p>{trip.planet}</p>
            <p>{trip.date}</p>
            <p>{trip.description}</p>
            <p>{`${trip.durationInDays} dias`}</p>
            <h4>Candidatos:</h4>
            {trip && trip.candidates.map((candidate => {
                return <p key={candidate.id}>{candidate.name}</p>
            }))}
        </div> :
        null
    )
}

export default TripDetailsPage