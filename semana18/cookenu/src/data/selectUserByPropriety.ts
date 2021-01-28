import connection from './connection';
import { USER_TABLE } from '../constants/tableNames';
import { user, toUserModel } from '../types/user';

export const selectUserByPropriety = async (propriety: string, value: string) 
: Promise<user | null> => {
    const result = await connection
        .select("*")
        .from(USER_TABLE)
        .where(propriety, "=", value);
    
    return result[0] ? toUserModel(result[0]) : null;
};