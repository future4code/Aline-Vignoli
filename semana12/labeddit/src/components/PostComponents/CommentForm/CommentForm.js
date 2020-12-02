import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from '../../../hooks/useForm';
import { FlexForm } from '../../../global/global-styles';
import { createComment } from '../../../services/post';

const CommentForm = (props) => {
    const { form, onChange } = useForm({text:""})

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, props.postId, props.upDate)
        props.handleIsCommenting()
    }

    return (
        <FlexForm autoComplete="off" onSubmit={onSubmitForm}>
            <TextField
                required
                multiline
                label="Escreva seu comentário"
                type="text"
                variant="outlined"
                name="text"
                value={form.text}
                onChange={handleInput}
            />
            <Button type="submit" variant="contained" color="primary">
                Comentar
            </Button>
        </FlexForm>
    )
}

export default CommentForm;