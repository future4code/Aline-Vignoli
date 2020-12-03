import axios from 'axios';
import { BASE_URL } from '../constants/requestConfig';

export const createPost = (body,upDate) => {
    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }

    axios.post(`${BASE_URL}/posts`, body, headers)
    .then(() => {
        window.alert("postagem feita")
        upDate()
    })
    .catch(error => {
        console.log(error.message)
    })
}

export const createComment = (body, postId, upDate) => {
    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }

    axios.post(`${BASE_URL}/posts/${postId}/comment`, body, headers)
    .then(() => {
        window.alert("comentário feito")
        upDate()
    })
    .catch(error => {
        console.log(error.message)
    })
}

export const vote = (postId, voteDirection, upDate) => {
    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }

    const body = {
        direction: voteDirection
    }

    axios.put(`${BASE_URL}/posts/${postId}/vote`, body, headers)
    .then(() => {
        upDate()
    })
    .catch(error => {
        console.log(error.message)
    })
}

export const voteComment = (postId, commentId, voteDirection, upDate) => {
    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }

    const body = {
        direction: voteDirection
    }

    axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, headers)
    .then(() => {
        upDate()
    })
    .catch(error => {
        console.log(error.message)
    })
}