import { Request, Response } from 'express';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { user } from '../types/user';

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const { id } = req.params;
        
        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to access this information');
        };

        const authData = getTokenData(token);
        const loggedUser: user | null = await selectUserByPropriety("id", authData.id);
        const user: user | null = await selectUserByPropriety("id", id);

        if ( !loggedUser ) {
            errorCode = 404;
            throw new Error('User not found');
        };

        if ( !user ) {
            errorCode = 404;
            throw new Error(
                "The profile you were looking for were not found. Please, make sure you have the correct 'id'"
            );
        };

        res.status(200).send(
            { user: { id: user.id, name: user.name, email: user.email } }
        );

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};