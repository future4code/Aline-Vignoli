import { connection } from './connection';
import { USER_TABLE } from './insertUser';

export const deleteUser = async (id: string) 
: Promise<void> => {
    await connection
    .delete()
    .from(USER_TABLE)
    .where({ id });
};