import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { generate } from '../services/idGenerator';
import { User } from '../types/User';

export const signup = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            errorCode = 406;
            throw new Error('Preencha o "email" e "password" para se cadastrar.');
        };

        if ( !email.includes("@") ) {
            errorCode = 406;
            throw new Error('Um endereço de "email" válido deve conter "@".');
        };

        if ( password.length < 6 ) {
            errorCode = 406;
            throw new Error('A senha deve conter no mínimo 6 caracteres.');
        };

        const user: User = {
            id: generate(),
            email: email,
            password: password
        };

        await insertUser(user);

        const authData: AuthenticationData = {id: user.id};
        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};