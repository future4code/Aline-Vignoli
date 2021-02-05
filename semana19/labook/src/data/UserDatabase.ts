import { User } from "../business/entities/User";
import { BaseDatabase } from "./BaseDatabase";
import { toUserModel } from "./model/userModel";

export class UserDatabase extends BaseDatabase {

    userTable = "labook_users";
    friendshipTable = "labook_friendship_relation";

    insertUser = async (
        user: User
    ): Promise<void> => {
        await BaseDatabase.connection(this.userTable)
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            });
    };
    
    selectUserByPropriety = async (
        name: string,
        value: string
    ): Promise<User> => {
        const result = await BaseDatabase.connection(this.userTable)
            .select("*")
            .where(name, "=", value);
    
        return toUserModel(result[0]);
    };

    insertFriendship = async (
        userId: string,
        friendId: string
    ): Promise<void> => {
        await BaseDatabase.connection(this.friendshipTable)
            .insert([
                {
                    user_id: userId,
                    friend_id: friendId
                },
                {
                    user_id: friendId,
                    friend_id: userId
                }
            ]);    
    };

    checkFriendship = async (
        userId: string,
        friendId: string
    ): Promise<boolean> => {
        const result = await BaseDatabase.connection(this.friendshipTable)
            .select("*")
            .where({ 
                user_id: userId, 
                friend_id: friendId 
            });

        return result[0] ? true : false;  
    };

    deleteFriendship = async (
        userId: string,
        friendId: string
    ): Promise<void> => {
        await BaseDatabase.connection(this.friendshipTable)
            .del()
            .where({
                user_id: userId, 
                friend_id: friendId,
            });
        
        await BaseDatabase.connection(this.friendshipTable)
            .del()
            .where({
                user_id: friendId, 
                friend_id: userId
            });
    };
};