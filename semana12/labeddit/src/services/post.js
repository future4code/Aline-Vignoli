import axios from 'axios';
import { BASE_URL, HEADERS } from '../constants/requestConfig';
import { useRequestData } from '../hooks/useRequestData';

export const createPost = (body) => {
    axios.post(`${BASE_URL}/posts`, body, HEADERS)
    .then(() => {
        window.alert("postagem feita")
    })
    .catch(error => {
        console.log(error.message)
    })
}

export const vote = (postId, voteDirection) => {
    const body = {
        direction: voteDirection
    }

    axios.put(`${BASE_URL}/posts/${postId}/vote`, body, HEADERS)
    .then(() => {
        window.alert("voto ok")
    })
    .catch(error => {
        console.log(error.message)
    })
}