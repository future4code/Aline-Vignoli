import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { generate } from '../services/idGenerator';
import { User, USER_ROLES } from '../types/User';
import { hash } from '../services/hashManager';

export const signup = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const { name, nickname, email, password, role } = req.body;

        if ( !email || !password || !name || !nickname ) {
            errorCode = 406;
            throw new Error('Preencha "name", "nickname", "email" e "password" para se cadastrar.');
        };

        if ( role !== USER_ROLES.ADMIN &&
             role !== USER_ROLES.NORMAL
        ) {
            errorCode = 406;
            throw new Error('"role" precisa ser "ADMIN" ou "NORMAL".');
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
            name,
            nickname,
            email,
            password: cypherPassword,
            role
        };

        await insertUser(user);

        const authData: AuthenticationData = {
            id: user.id,
            role
        };

        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};