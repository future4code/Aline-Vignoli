import { deleteUser, insertUser, selectAllUsers, selectUserByPropriety } from "../data/userDatabase";
import { authenticationData, user, USER_ROLES } from "./entities/user";
import { generateToken, getTokenData } from "./services/authenticator";
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

    const userFromDB: user | null = await selectUserByPropriety("email", email);

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

export const businessGetAllUsers = async (
    token: string
) : Promise<user[]> => {

    if ( !token ) {
        throw new Error("You need to login to access this information");
    };

    getTokenData(token);

    const users: user[] | null = await selectAllUsers();

    if ( !users ) {
        throw new Error("No users to show");
    };

    return users;
};

export const businessRemoveUser = async (
    token: string,
    userToRemoveId: string
) : Promise<void> => {

    if ( !token ) {
        throw new Error("You need to login to delete an user!");
    };

    const tokenData: authenticationData = getTokenData(token);

    if ( tokenData.role !== USER_ROLES.ADMIN ) {
        throw new Error("Only an administrator can delete an user!");
    };

    const userToRemove = await selectUserByPropriety("id", userToRemoveId);

    if ( !userToRemove ) {
        throw new Error("The user you are trying to delete was not found!");
    };

    await deleteUser(userToRemoveId);
};