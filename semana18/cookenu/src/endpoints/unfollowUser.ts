import { Request, Response } from 'express';
import { deleteFollowing } from '../data/deleteFollowing';
import { deleteFollower } from '../data/deleteFollower';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { user } from '../types/user';

export const unfollowUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const { userToUnfollowId } = req.body;
        
        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to access this information');
        };

        if (!userToUnfollowId) {
            errorCode = 406;
            throw new Error("Please, inform the 'userToUnFollowId' field");
        };

        const authData = getTokenData(token);
        const loggedUser: user | null = await selectUserByPropriety("id", authData.id);
        const userToUnfollow: user | null = await selectUserByPropriety("id", userToUnfollowId);

        if ( !loggedUser ) {
            errorCode = 404;
            throw new Error('User not found');
        };

        if ( !userToUnfollow ) {
            errorCode = 404;
            throw new Error(
                "The profile you are trying to unfollow were not found. Please, make sure you have the correct 'id'"
            );
        };

        await deleteFollowing(userToUnfollowId);
        await deleteFollower(authData.id);

        res.status(200).send(
            { message: "Unfollowed successfuly" }
        );

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};