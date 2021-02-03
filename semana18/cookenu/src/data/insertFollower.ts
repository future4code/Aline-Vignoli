import connection from './connection';
import { USER_FOLLOWERS } from '../setup/tableNames';

export const insertFollower = async (
    userId: string, 
    followerId: string
) : Promise<void> => {
    await connection.insert({
        userId,
        followerId
    }).into(USER_FOLLOWERS);
};