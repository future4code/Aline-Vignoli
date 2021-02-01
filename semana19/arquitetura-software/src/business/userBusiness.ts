import { insertUser, selectUserByEmail } from "../data/userDatabase";
import { authenticationData, user } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { compare, hash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";
import { checkPassword, checkValidRoles } from "./services/validator";

export const businessSignup = async (
    input: any
) : Promise<string> => {
    const { name, email, password, role } = input
    if (
        !name ||
        !email ||
        !password ||
        !role
    ) {
        throw new Error("Please inform 'name', 'email', 'password' and 'role'");
    };

    checkPassword(password);
    checkValidRoles(role);
    
    const id: string = generateId();
    const cypherPassword: string = hash(password);
    const user: user = {
        id,
        name,
        email,
        password: cypherPassword,
        role
    };

    await insertUser(user);

    const payload: authenticationData = { id, role };
    const token: string = generateToken(payload);

    return token;
};

export const getUserByEmail = async (
    input: any
) : Promise<string> => {
    const { email, password } = input;

    if ( !email || !password ) {
        throw new Error("Please inform 'email' and 'password' to proceed");
    };

    const userFromDB: user | null = await selectUserByEmail(email);

    if ( !userFromDB ) {
        throw new Error("User not found");
    };

    const isPasswordCorrect = compare(password, userFromDB.password);

    if ( !isPasswordCorrect ) {
        throw new Error("Incorrect password");
    };

    const payload: authenticationData = { 
        id: userFromDB.id, 
        role: userFromDB.role 
    };
    const token: string = generateToken(payload);

    return token;
};