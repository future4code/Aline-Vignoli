import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from '../../../hooks/useForm';
import { FlexForm } from '../../../global/global-styles';
import { createPost } from '../../../services/post';
import { useRequestData } from '../../../hooks/useRequestData';
import { BASE_URL, HEADERS } from '../../../constants/requestConfig';

const PostForm = (props) => {
    const { form, onChange } = useForm({title: "", text:""})
    const { getData }  = useRequestData(`${BASE_URL}/posts`, HEADERS, undefined)

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, getData)
    }

    return (
        <FlexForm autoComplete="off" onSubmit={onSubmitForm}>
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
            <Button onClick={props.handleIsPosting} variant="contained" color="secondary">
                Cancelar
            </Button>
        </FlexForm>
    )
}

export default PostForm;