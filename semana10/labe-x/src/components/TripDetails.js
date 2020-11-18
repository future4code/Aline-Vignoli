import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const TripDetails = () => {
    const [trip, setTrip] = useState({})
    const history = useHistory()

    useEffect(()=> {
        const token = localStorage.getItem('token')
        token ? getTripDetail() : history.push('/login')
    }, [history])

    const getTripDetail = () => {
        //requisicao API
    }

    return (
        <div>
            Detalhes de viagem
        </div>
    )
}

export default TripDetails