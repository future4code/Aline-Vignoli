import { Request, Response } from 'express';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { user } from '../types/user';

export const getLoggedUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        
        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to access this information')
        };

        const authData = getTokenData(token)
        const user: user | null = await selectUserByPropriety("id", authData.id)

        if ( !user ) {
            errorCode = 404;
            throw new Error('User not found');
        };

        res.status(200).send(
            { user: { id: user.id, name: user.name, email: user.email } }
        );

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};