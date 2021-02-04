import { User } from "../business/entities/User";
import { BaseDatabase } from "./BaseDatabase";
import { toUserModel } from "./model/userModel";

export class UserDatabase extends BaseDatabase {

    tableName = "labook_users"

    insertUser = async (
        user: User
    ): Promise<void> => {
        await BaseDatabase.connection(this.tableName)
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            });
    };
    
    selectUserByEmail = async (
        email: string
    ): Promise<User> => {
        const result = await BaseDatabase.connection(this.tableName)
            .select("*")
            .where({ email });
    
        return toUserModel(result[0]);
    };
};