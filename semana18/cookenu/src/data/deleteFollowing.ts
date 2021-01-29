import connection from './connection';
import { USER_FOLLOWING } from '../constants/tableNames';

export const deleteFollowing = async ( 
    followingUserId: string
) : Promise<void> => {
    await connection.delete()
    .from(USER_FOLLOWING)
    .where({ followingUserId });
};