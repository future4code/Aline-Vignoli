import { Post } from "../business/entities/Post";
import { BaseDatabase } from "./BaseDatabase";
import { PostToDatabase, toPostModel } from "./model/postModel";

export class PostDatabase extends BaseDatabase {
    
    private postTable = "labook_posts";
    private userTable = "labook_users";
    private friendshipTable = "labook_friendship_relation";

    public insertPost = async (
        post: PostToDatabase
    ): Promise<void> => {
        await BaseDatabase.connection(this.postTable)
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            });
    };

    public selectPostByPropriety = async (
        name: string,
        value: string
    ): Promise<Post> => {
        const result = await BaseDatabase.connection(this.postTable)
            .select("*")
            .where(name, "=", value);
    
        return toPostModel(result[0]);
    };

    public selectFriendsPosts = async (
        userId: string
    ): Promise<Post[]> => {
        const result = await BaseDatabase.connection.raw(`
            SELECT ${this.postTable}.id, photo, description, type, created_at, author_id, name 
            FROM ${this.postTable}
            LEFT JOIN ${this.userTable}
            ON ${this.userTable}.id = ${this.postTable}.author_id 
            JOIN ${this.friendshipTable}
            ON ${this.userTable}.id = ${this.friendshipTable}.user_id
            WHERE friend_id = "${userId}"
            ORDER BY created_at DESC;
        `);

        const posts: Post[] = []
        
        for (let post of result[0]) {
            posts.push(toPostModel(post));
        };

        return posts;
    };
};