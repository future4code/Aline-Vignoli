import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { FlexForm, TextFieldCommentForm } from '../../../global/global-styles';
import { createComment } from '../../../services/post';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

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
        <FlexForm row autoComplete="off" onSubmit={onSubmitForm}>
            <TextFieldCommentForm
                required
                multiline
                label="Escreva seu comentário"
                type="text"
                variant="outlined"
                name="text"
                value={form.text}
                onChange={handleInput}
            />
            <IconButton 
                type="submit" variant="contained"
                aria-label="enviar"
                >
                <SendIcon color="primary"/>
            </IconButton>
        </FlexForm>
    )
}

export default CommentForm;