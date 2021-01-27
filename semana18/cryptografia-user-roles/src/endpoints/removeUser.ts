import { Request, Response } from 'express';
import { selectUserById } from '../data/selectUserById';
import { deleteUser } from '../data/deleteUser';
import { getData } from '../services/authenticator';
import { User, USER_ROLES } from '../types/User';

export const removeUser = async (req: Request, res: Response) : Promise<void> => {
    let errorCode: number = 400;
    try {
        const id = req.params.id;
        const token = req.headers.authorization as string;
        const authData = getData(token);
        const user: User | null = await selectUserById(id);
        const unauthorized: boolean = authData.role !== USER_ROLES.ADMIN;

        if ( unauthorized ) {
            errorCode = 401;
            throw new Error('Você não tem permissão para deletar usuários');
        };

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        await deleteUser(id);

        res.status(200).send("Usuário excluído com sucesso!");

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};