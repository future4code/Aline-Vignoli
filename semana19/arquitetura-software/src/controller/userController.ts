import { Request, Response } from 'express';
import { businessSignup, getUserByEmail } from '../business/userBusiness';
import { destroyConnection } from '../data/connection';

export const signup = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const { name, email, password, role } = req.body;
        const input = { name, email, password, role };
        const token: string = await businessSignup(input);

        res.status(200).send({ token });

    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage });
    };
};

export const login = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const { email, password } = req.body;
        const input = { email, password };
        const token: string = await getUserByEmail(input);

        res.status(200).send({ token });

    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage });
    }
};