import { CreatePostInputDTO, PostToDatabase, postTypeToString } from "../data/model/postModel";
import { PostDatabase } from "../data/PostDatabase";
import { Post } from "./entities/Post";
import { NotAcceptableError } from "./errors/NotAcceptableError";
import { NotFoundError } from "./errors/NotFoundError";
import { AuthenticationData, Authenticator } from "./services/Authenticator";
import { DateManager } from "./services/DateManager";
import { IdGenerator } from "./services/IdGenerator";

const postDatabase = new PostDatabase();

export class PostBusiness {

    protected static create = async (
        token: string,
        input: CreatePostInputDTO
    ): Promise<void> => {
        const tokenData: AuthenticationData = Authenticator.getTokenData(token);

        const { photo, description, type } = input;
        if (!photo || !description || !type) {
            throw new NotAcceptableError(
                "The proprieties 'photo', 'description' and 'name' are requireds."
            );
        };
        
        const id: string = IdGenerator.generateId();
        const createdAt = new DateManager();

        const post: PostToDatabase = {
            id,
            photo,
            description,
            type: postTypeToString(type),
            createdAt,
            authorId: tokenData.id
        };

        await postDatabase.insertPost(post);
    };

    protected static getPostById = async (
        token: string,
        id: string
    ): Promise<Post> => {
        Authenticator.getTokenData(token);
        
        if (!id) {
            throw new NotAcceptableError("Param 'id' must be informed");
        };

        const post: Post = await postDatabase.selectPostByPropriety("id", id);

        if (!post) {
            throw new NotFoundError("Post not found");
        };

        return post;
    };

    protected static getPosts = async (
        token: string
    ): Promise<Post[]> => {
        const tokenData: AuthenticationData = Authenticator.getTokenData(token);
        const posts = await postDatabase.selectFriendsPosts(tokenData.id);
        return posts;
    };
};