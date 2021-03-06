import { Request, Response } from 'express';
import { selectUserByEmail } from '../data/selectUserByEmail';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { User } from '../types/User';
import { compare } from '../services/hashManager';

export const login = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        };

        if ( !input.email || !input.password ) {
            errorCode = 406;
            throw new Error('Preencha o "email" e "password" para fazer o login.');
        };

        if ( !input.email.includes("@") ) {
            errorCode = 406;
            throw new Error('Um endereço de "email" válido deve conter "@".');
        };

        const user: User | null = await selectUserByEmail(input.email);

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        const passwordIsCorrect: boolean = compare(
            input.password,
            user.password
        );

        if ( !passwordIsCorrect ) {
            errorCode = 401;
            throw new Error('Senha incorreta.');
        };

        const authData: AuthenticationData = {id: user.id, role: user.role!};
        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};

type loginInput = {
    email: string,
    password: string
};