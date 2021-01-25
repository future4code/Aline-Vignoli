import { User } from '../types/User';
import { connection } from './connection';
import { USER_TABLE } from './insertUser';

export const selectUserByEmail = async (email: string) 
: Promise<User | null> => {
    const result = await connection
    .select("*")
    .from(USER_TABLE)
    .where({ email });

    return result[0] ? toUserModel(result[0]) : null;
};

const toUserModel = (obj: any): User => {
    console.log("obj ", obj)
    const user: User = {
        id: obj.id,
        name: obj.name,
        nickname: obj.nickname,
        email: obj.email,
        password: obj.password
    };

    return user;
};