import { User } from '../types/User';
import { connection } from './connection';
import { USER_TABLE } from '../setup/tables';

export const insertUser = async (user: User) => {
    await connection.insert({
        id: user.id,
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        password: user.password
    }).into(USER_TABLE);
};