import axios from 'axios';
import { BASE_URL } from '../constants/requestConfig';
import { goToFeed } from '../routes/coordinator';

export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
    })
    .catch(error => {
        console.log(error.message)
    })
}

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
    })
    .catch(error => {
        console.log(error.message)
        window.alert("E-mail ou senha não correspondem!")
    })
}