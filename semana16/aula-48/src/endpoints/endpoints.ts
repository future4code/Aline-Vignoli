import { Request, Response } from 'express';
import { selectAllUsers, selectFilteredUsers } from '../data/queries';
import { searchUserInput } from '../types/searchUserInput';

export const getAllUsers = async(req: Request, res: Response): Promise<void> =>{
    try {
        const users = await selectAllUsers();
    
        if(!users.length){
            res.statusCode = 404
            throw new Error("No users found");
        };
    
        res.status(200).send(users);
       
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};

export const getFilteredUsers = async(req: Request, res: Response): Promise<void> =>{
    try {
        const { name } = req.query as searchUserInput;

        if ( !name ) {
            throw new Error("'name' é obrigatório");
        };

        const users: any = await selectFilteredUsers("name", name);
    
        if(!users.length){
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado");
        };
    
        res.status(200).send(users);
       
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};

export const getUsersByType = async(req: Request, res: Response): Promise<void> =>{
    try {
        const type = req.query.type as string;
        const users: any = await selectFilteredUsers("type", type);
    
        if(!users.length){
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado");
        };
    
        res.status(200).send(users);
       
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};