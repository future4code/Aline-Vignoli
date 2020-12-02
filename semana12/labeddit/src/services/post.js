import axios from 'axios';
import { BASE_URL, HEADERS } from '../constants/requestConfig';

export const createPost = (body,upDate) => {
    axios.post(`${BASE_URL}/posts`, body, HEADERS)
    .then(() => {
        window.alert("postagem feita")
        upDate()
    })
    .catch(error => {
        console.log(error.message)
    })
}

export const vote = (postId, voteDirection, upDate) => {
    const body = {
        direction: voteDirection
    }

    axios.put(`${BASE_URL}/posts/${postId}/vote`, body, HEADERS)
    .then(() => {
        upDate()
    })
    .catch(error => {
        console.log(error.message)
    })
}