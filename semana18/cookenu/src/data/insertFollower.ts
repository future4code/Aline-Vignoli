import connection from './connection';
import { USER_FOLLOWERS } from '../constants/tableNames';

export const insertFollower = async (
    userId: string, 
    followerId: string
) : Promise<void> => {
    await connection.insert({
        userId,
        followerId
    }).into(USER_FOLLOWERS);
};