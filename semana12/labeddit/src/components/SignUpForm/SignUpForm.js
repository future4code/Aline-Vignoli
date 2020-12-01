import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SignUpForm = () => {
    const classes = useStyles();
    const { form, onChange } = useForm({username:"", email: "", password: ""})

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form)
    }

    const signUp = (body) => {
        axios.post(`${BASE_URL}/signup`, body)
            .then(response => {
                console.log(response.data.token)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <form className={classes.root} noValidate={false} autoComplete="off" onSubmit={onSubmitForm}>
            <TextField
                required
                id="outlined-required"
                label="Nome de usuário"
                type="text"
                variant="outlined"
                name="username"
                value={form.username}
                onChange={handleInput}
            />
            <TextField
                required
                id="outlined-required"
                label="E-mail"
                type="email"
                variant="outlined"
                name="email"
                value={form.email}
                onChange={handleInput}
            />
            <TextField
                required
                id="outlined-password-input"
                label="Senha"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                name="password"
                value={form.password}
                onChange={handleInput}
            />
            <Button type="submit" variant="contained" color="primary">
                Entrar
            </Button>
        </form>
    )
}

export default SignUpForm;