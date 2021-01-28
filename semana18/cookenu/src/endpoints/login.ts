import { Request, Response } from 'express';
import { checkInputs } from '../util/validate';
import { input } from '../types/input';
import { user } from '../types/user';
import { compare } from '../service/hashManager';
import { AuthenticationData, generateToken } from '../service/authenticator';
import { selectUserByPropriety } from '../data/selectUserByPropriety';

export const login = async (req: Request, res: Response) : Promise<void> => {
    let errorCode: number = 400;
    try {
        const { email, password } = req.body;
        const inputs: input[] = [
            { name: "email", value: email }, 
            { name: "password", value: password }
        ];

        checkInputs(inputs);

        const user: user | null = await selectUserByPropriety("email", email);

        if ( !user ) {
            errorCode = 404;
            throw new Error("User not found");
        };

        const passwordMatch = compare(password, user.password);

        if ( !passwordMatch ) {
            errorCode = 401;
            throw new Error("Incorrect password, please try again");
        };

        const userData: AuthenticationData = { id: user.id, role: user.role };
        const token: string = generateToken(userData);

        res.status(200).send({ accessToken: token });
    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};