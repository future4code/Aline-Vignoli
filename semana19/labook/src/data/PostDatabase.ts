import { Post } from "../business/entities/Post";
import { BaseDatabase } from "./BaseDatabase";
import { PostToDatabase } from "./model/postModel";

export class PostDatabase extends BaseDatabase {
    
    tableName = "labook_posts"

    insertPost = async (
        post: PostToDatabase
    ): Promise<void> => {
        await BaseDatabase.connection(this.tableName)
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            });

            console.log(post.createdAt)
    };
};