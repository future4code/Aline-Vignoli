import connection from './connection';
import { USER_FOLLOWERS } from '../setup/tableNames';

export const deleteFollower = async ( 
    followerId: string
) : Promise<void> => {
    await connection.delete()
    .from(USER_FOLLOWERS)
    .where({ followerId });
};