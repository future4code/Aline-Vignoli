import connection from './connection';
import { USER_TABLE } from '../setup/tableNames';
import { user } from '../types/user';

export const insertUser = async (user: user) : Promise<void> => {
    await connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
    }).into(USER_TABLE);
};