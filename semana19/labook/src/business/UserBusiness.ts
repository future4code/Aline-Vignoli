import { LoginInputDTO, SignupInputDTO } from '../data/model/userModel';
import { UserDatabase } from '../data/userDatabase';
import { User } from './entities/User';
import { Authenticator } from './services/Authenticator';
import { HashManager } from './services/HashManager';
import { IdGenerator } from './services/idGenerator';

const userDatabase = new UserDatabase();

export class UserBusiness {

    protected static businessSignup = async (
        input: SignupInputDTO
    ): Promise<string> => {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new Error('"name", "email" and "password" must be provided');
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

        const user: User = await userDatabase.selectUserByEmail(email);

        if ( !user ) {
            throw new Error('User not found');
        };

        const isPasswordCorrect: boolean = HashManager.compare(password, user.password);

        if ( !isPasswordCorrect ) {
            throw new Error('Incorrect password');
        };

        const token: string = Authenticator.generateToken({ id: user.id });
        return token;
    };
}