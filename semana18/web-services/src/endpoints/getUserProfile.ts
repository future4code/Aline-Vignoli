import { Request, Response } from 'express';
import { selectUserById } from '../data/selectUserById';
import { getData } from '../services/authenticator';
import { User, USER_ROLES } from '../types/User';

export const getUserProfile = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const authData = getData(token);
        const user: User | null = await selectUserById(authData.id);
        const unauthorized: boolean = authData.role !== USER_ROLES.NORMAL;

        if ( unauthorized ) {
            errorCode = 401;
            throw new Error('Você não tem permissão para acessar essas informações');
        };

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        res.status(200).send(
            { user: { id: user.id, name: user.name, email: user.email} }
        );

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};