import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../service/authenticator';
import { hash } from '../service/hashManager';
import { generate } from '../service/idGenerator';
import { input } from '../types/input';
import { user, USER_ROLES } from '../types/user';
import { checkInputs, checkPassword, checkValidRoles } from '../service/validate';

export const signup = async (req: Request, res: Response) : Promise<void> => {
    let errorCode: number = 400;
    try {
        const { name, email, password, role } = req.body;
        const inputs: input[] = [
            { name: "name", value: name },
            { name: "email", value: email },
            { name: "password", value: password }
        ];

        checkInputs(inputs);
        checkPassword(password);

        if ( role && !checkValidRoles(role) ) {
            errorCode = 406;
            throw new Error("The valid roles are 'NORMAL' or 'ADMIN'.");
        };

        const id: string = generate();
        const cypherPassword: string = hash(password);

        const user: user = {
            id,
            name,
            email,
            password: cypherPassword,
            role: role || USER_ROLES.NORMAL
        };

        await insertUser(user);

        const userData: AuthenticationData = { id, role: user.role };
        const token: string = generateToken(userData);
        res.status(200).send({ accessToken: token });

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};