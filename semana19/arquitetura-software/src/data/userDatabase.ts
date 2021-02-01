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

export const selectUserByPropriety = async (
    name: string,
    value: string
) : Promise<user | null> => {
    const result = await connection
    .select("*")
    .from(USER_TABLE)
    .where( name, "=",  `${value}` );

    return result[0] ? toUserModel(result[0]) : null;
};

export const selectAllUsers = async () 
: Promise<user[] | null> => {
    const result = await connection
    .select("*")
    .from(USER_TABLE);

    return result;
};

export const deleteUser = async (
    id: string
) : Promise<void> => {
    await connection
    .delete()
    .from(USER_TABLE)
    .where({ id });
};