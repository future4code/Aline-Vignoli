import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { signUp } from '../../services/user';
import { FlexForm } from '../../global/global-styles';
import { goBack } from '../../routes/coordinator';

const SignUpForm = () => {
    const { form, onChange } = useForm({username:"", email: "", password: ""})
    const history = useHistory()

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, history)
    }

    return (
        <FlexForm medium autoComplete="off" onSubmit={onSubmitForm}>
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
                Cadastrar
            </Button>
            <Button onClick={()=> {goBack(history)}} color="primary">
                Voltar
            </Button>
        </FlexForm>
    )
}

export default SignUpForm;