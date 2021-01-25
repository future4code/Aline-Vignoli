import { User } from '../types/User';
import { connection } from './connection';
export const USER_TABLE = "User";

export const insertUser = async (user: User) => {
    await connection.insert({
        id: user.id,
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        password: user.password
    }).into(USER_TABLE);
};