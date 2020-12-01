import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useHistory } from 'react-router-dom';
import { goToFeed, goToSignUp } from '../../routes/coordinator';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const LoginForm = () => {
    const classes = useStyles();
    const { form, onChange } = useForm({email: "", password: ""})
    const history = useHistory()

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form)
    }

    const login = (body) => {
        axios.post(`${BASE_URL}/login`, body)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                goToFeed(history)
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
            <Button onClick={()=> goToSignUp(history)} variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default LoginForm;