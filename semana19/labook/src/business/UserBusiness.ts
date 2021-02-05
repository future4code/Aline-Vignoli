import { LoginInputDTO, SignupInputDTO } from '../data/model/userModel';
import { UserDatabase } from '../data/UserDatabase';
import { User } from './entities/User';
import { NotAcceptableError } from './errors/NotAcceptableError';
import { NotFoundError } from './errors/NotFoundError';
import { Authenticator } from './services/Authenticator';
import { HashManager } from './services/HashManager';
import { IdGenerator } from './services/IdGenerator';

const userDatabase = new UserDatabase();

export class UserBusiness {

    protected static businessSignup = async (
        input: SignupInputDTO
    ): Promise<string> => {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new NotAcceptableError('"name", "email" and "password" must be provided');
        };

        const id: string = IdGenerator.generateId();
        const cypherPassword = HashManager.hash(password);

        const user = new User(
            id,
            name,
            email,
            cypherPassword
        );

        await userDatabase.insertUser(user);

        const token: string = Authenticator.generateToken({ id });
        return token;
    };

    protected static businessLogin = async (
        input: LoginInputDTO
    ): Promise<string> => {
        const { email, password } = input;

        if (!email || !password) {
            throw new Error('"email" and "password" must be provided');
        };

        const user: User = await userDatabase.selectUserByPropriety("email", email);

        if ( !user ) {
            throw new NotFoundError("User not found");
        };

        const isPasswordCorrect: boolean = HashManager.compare(password, user.password);

        if ( !isPasswordCorrect ) {
            throw new Error('Incorrect password');
        };

        const token: string = Authenticator.generateToken({ id: user.id });
        return token;
    };

    protected static businessAddFriend = async (
        token: string,
        id: string
    ): Promise<void> => {
        const userData = Authenticator.getTokenData(token);
        const friend = await userDatabase.selectUserByPropriety("id", id);

        if (!friend) {
            throw new NotFoundError('User not found');
        };

        const isFriend: boolean = await userDatabase.checkFriendship(
            userData.id, 
            id
        );

        if (isFriend) {
            throw new Error('This user already is your friend');
        };

        await userDatabase.insertFriendship(userData.id, friend.id);
    };

    protected static businessRemoveFriend = async (
        token: string,
        friendId: string
    ): Promise<void> => {
        const userData = Authenticator.getTokenData(token);
        const isFriend: boolean = await userDatabase.checkFriendship(
            userData.id, 
            friendId
        );

        if (!isFriend) {
            throw new Error(
                'You cannot remove from your friend list an user who is not your friend'
            );
        };

        await userDatabase.deleteFriendship(userData.id, friendId);
    };
};