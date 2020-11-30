import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../../constants/url';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const PostForm = (props) => {
    const classes = useStyles();
    const { form, onChange } = useForm({title: "", text:""})

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        const body = {
            text: form.text,
            title: form.title
        }

        const requestHeaders = {
            headers: {
              Authorization: localStorage.getItem("token")
            }
        }

        createPost(body, requestHeaders)
    }

    const createPost = (body, requestHeaders) => {
        axios.post(`${BASE_URL}/posts`, body, requestHeaders)
        .then(response => {
            window.alert("postagem feita")
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <form className={classes.root} noValidate={false} autoComplete="off" onSubmit={onSubmitForm}>
            <TextField
                required
                label="Título do post"
                type="text"
                variant="outlined"
                name="title"
                value={form.title}
                onChange={handleInput}
            />
            <TextField
                required
                multiline
                label="Escreva aqui"
                type="text"
                variant="outlined"
                name="text"
                value={form.text}
                onChange={handleInput}
            />
            <Button type="submit" variant="contained" color="primary">
                Publicar
            </Button>
            <Button onClick={props.handleIsPosting} variant="contained">
                Cancelar
            </Button>
        </form>
    )
}

export default PostForm;