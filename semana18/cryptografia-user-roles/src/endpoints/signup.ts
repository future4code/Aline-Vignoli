import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { generate } from '../services/idGenerator';
import { User } from '../types/User';
import { hash } from '../services/hashManager';

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

        const id: string = generate();
        const cypherPassword: string = hash(password);

        const user: User = {
            id,
            email,
            password: cypherPassword
        };

        await insertUser(user);

        const authData: AuthenticationData = {id: user.id};
        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};