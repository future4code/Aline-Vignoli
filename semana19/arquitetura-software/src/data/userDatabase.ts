import { toUserModel, user } from '../business/entities/user';
import { connection } from './connection';
import { USER_TABLE } from './tableNames';

export const insertUser = async (
    user: user
) : Promise<void> => {
    await connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
    }).into(USER_TABLE);
};

export const selectUserByEmail = async (
    email: string
) : Promise<user | null> => {
    const result = await connection
    .select("*")
    .from(USER_TABLE)
    .where({ email });

    return result[0] ? toUserModel(result[0]) : null;
};