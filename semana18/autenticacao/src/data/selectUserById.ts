import { toUserModel, User } from '../types/User';
import { connection } from './connection';
import { USER_TABLE } from './insertUser';

export const selectUserById = async (id: string) 
: Promise<User | null> => {
    const result = await connection
    .select("*")
    .from(USER_TABLE)
    .where({ id });

    return result[0] ? toUserModel(result[0]) : null;
};