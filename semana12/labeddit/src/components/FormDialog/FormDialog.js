import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { createPost } from '../../services/post';
import { FlexBox, FlexForm } from '../../global/global-styles';
import { TextFieldStyled } from './styles';

const FormDialog = (props) => {
    const { form, onChange } = useForm({title: "", text:""})

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, props.upDate)
        props.handleClose()
    }

    return (
        <FlexBox>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">No que você está pensando?</DialogTitle>
                <FlexForm onSubmit={onSubmitForm}>
                    <DialogContent>
                        <FlexBox>
                            <TextFieldStyled
                                required
                                label="Título do post"
                                type="text"
                                variant="outlined"
                                name="title"
                                value={form.title}
                                onChange={handleInput}
                            />
                            <TextFieldStyled
                                required
                                multiline
                                label="Escreva aqui"
                                type="text"
                                variant="outlined"
                                name="text"
                                value={form.text}
                                onChange={handleInput}
                            />
                        </FlexBox>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Publicar
                        </Button>
                    </DialogActions>
                </FlexForm>
            </Dialog>
        </FlexBox>
    );
}

export default FormDialog;