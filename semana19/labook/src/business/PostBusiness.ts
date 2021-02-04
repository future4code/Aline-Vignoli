import { CreatePostInputDTO, PostToDatabase, postTypeToString } from "../data/model/postModel";
import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
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
        const user: User = await userDatabase.selectUserByPropriety(
            "id", 
            tokenData.id
        );

        if (!user) {
            throw new Error("User not found");
        };

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

        console.log(createdAt)

        await postDatabase.insertPost(post);
    };
};