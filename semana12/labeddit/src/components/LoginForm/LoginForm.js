import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator';
import { login } from '../../services/user';

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
        login(form, history)
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