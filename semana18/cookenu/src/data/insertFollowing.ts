import connection from './connection';
import { USER_FOLLOWING } from '../constants/tableNames';

export const insertFollowing = async (
    userId: string, 
    followingUserId: string
) : Promise<void> => {
    await connection.insert({
        userId,
        followingUserId
    }).into(USER_FOLLOWING);
};