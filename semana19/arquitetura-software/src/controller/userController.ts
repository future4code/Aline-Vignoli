import { Request, Response } from 'express';
import { user } from '../business/entities/user';
import { businessGetAllUsers, businessRemoveUser, businessSignup, getUserByEmail } from '../business/userBusiness';
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

export const getAllUsers = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const token: string = req.headers.authorization!;
        const users: user[] = await businessGetAllUsers(token);
    
        res.status(200).send({ users });

    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage });
    }
};

export const removeUser = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const { id } = req.params;
        const token: string = req.headers.authorization!;
        
        await businessRemoveUser(token, id);
    
        res.status(200).send({ message: "User deleted successfuly" });

    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage });
    }
};