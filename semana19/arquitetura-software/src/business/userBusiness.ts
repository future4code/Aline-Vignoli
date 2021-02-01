import { insertUser } from "../data/userDatabase";
import { authenticationData, user } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { hash } from "./services/hashManager";
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