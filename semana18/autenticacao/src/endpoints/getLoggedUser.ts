import { Request, Response } from 'express';
import { selectUserById } from '../data/selectUserById';
import { getData } from '../services/authenticator';
import { User } from '../types/User';

export const getLoggedUser = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const authData = getData(token);

        const user: User | null = await selectUserById(authData.id);

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        res.status(200).send({user});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};