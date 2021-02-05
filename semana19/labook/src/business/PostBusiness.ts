import { CreatePostInputDTO, GetPostOutputDTO, PostToDatabase, postTypeToString } from "../data/model/postModel";
import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { AuthenticationData, Authenticator } from "./services/Authenticator";
import { DateManager } from "./services/DateManager";
import { IdGenerator } from "./services/IdGenerator";

const userDatabase = new UserDatabase();
const postDatabase = new PostDatabase();

export class PostBusiness {

    protected static create = async (
        token: string,
        input: CreatePostInputDTO
    ): Promise<void> => {
        const tokenData: AuthenticationData = Authenticator.getTokenData(token);

        const { photo, description, type } = input;
        if (!photo || !description || !type) {
            throw new Error(
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
        id: string
    ) => {
        if (!id) {
            throw new Error("Param 'id' must be informed");
        };

        const post: Post = await postDatabase.selectPostByPropriety("id", id);

        if (!post) {
            throw new Error("Post not found");
        };

        const postOutputDTO: GetPostOutputDTO = {
            id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            createdAt: DateManager.formatDate(post.createdAt),
            authorId: post.authorId
        };

        return postOutputDTO;
    };

    protected static getPosts = async (
        token: string
    ) => {
        const tokenData: AuthenticationData = Authenticator.getTokenData(token);
        const posts = await postDatabase.selectFriendsPosts(tokenData.id);

        const postsOutputDTO = posts.map((post) => {
            return {
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                createdAt: DateManager.formatDate(post.createdAt),
                authorId: post.authorId
            }
        });

        return postsOutputDTO;
    };
};