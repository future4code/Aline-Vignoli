import { Request, Response } from 'express';
import { insertFollowing } from '../data/insertFollowing';
import { insertFollower } from '../data/insertFollower';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { user } from '../types/user';

export const followUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const { userToFollowId } = req.body;
        
        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to access this information');
        };

        if (!userToFollowId) {
            errorCode = 406;
            throw new Error("Please, inform the 'userToFollowId' field");
        };

        const authData = getTokenData(token);
        const loggedUser: user | null = await selectUserByPropriety("id", authData.id);
        const userToFollow: user | null = await selectUserByPropriety("id", userToFollowId);

        if ( !loggedUser ) {
            errorCode = 404;
            throw new Error('User not found');
        };

        if ( !userToFollow ) {
            errorCode = 404;
            throw new Error(
                "The profile you are trying to follow were not found. Please, make sure you have the correct 'id'"
            );
        };

        await insertFollowing(authData.id, userToFollowId);
        await insertFollower(userToFollowId, authData.id);

        res.status(200).send(
            { message: "Followed successfuly" }
        );

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};