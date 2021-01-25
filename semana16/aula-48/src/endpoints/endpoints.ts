import { Request, Response } from 'express';
import { selectAllUsers, selectFilteredUsers, selectOrderedUsers, selectUsers, selectUsersPagination } from '../data/queries';
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

export const getOrderedUsers = async(req: Request, res: Response): Promise<void> =>{
    try {
        const {
            orderBy = "name",
            orderType = "ASC",
        } = req.query as searchUserInput;

   
        if (!["name", "type"].includes(orderBy)) {
            res.statusCode = 422
            throw new Error(`Valores válidos para "orderBy" são "name" e "type"`)
        }

        const users = await selectOrderedUsers(orderBy, orderType);
    
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

export const getUsersPagination = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            page = "1"
        } = req.query as searchUserInput;
        const pageNumber: number = Number(page);

        if (!pageNumber) {
            res.statusCode = 422
            throw new Error(`"page" deve ser um número positivo`)
        }
   
        const resultsPerPage: number = 5
        const offset: number = resultsPerPage * (pageNumber - 1)

        const users = await selectUsersPagination(resultsPerPage, offset);
    
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

export const getUsers = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
           name,
           type,
           orderBy = "name",
           orderType = "DESC",
           page = "1"
        } = req.query as searchUserInput;

        let key: string = "name";

        if ( !name ) { key = "type" };
  
        const pageNumber: number = Number(page)
  
        if (!["name", "type"].includes(orderBy)) {
            res.statusCode = 422
            throw new Error(`Valores válidos para "orderBy" são "name" e "type"`)
        }
  
        if (!["ASC", "DESC"].includes(orderType)) {
           res.statusCode = 422
           throw new Error(`Valores válidos para "orderType" são "ASC" e "DESC"`)
        }
  
        if (!pageNumber) {
           res.statusCode = 422
           throw new Error(`"page" deve ser um número positivo`)
        }
  
        const resultsPerPage: number = 5
        const offset: number = resultsPerPage * (pageNumber - 1)

        const users = await selectUsers(
            orderBy,
            orderType,
            resultsPerPage,
            offset,
            key,
            name || type
        );

        if (!users.length) {
           res.statusCode = 404
           throw new Error("Nenhum usuário encontrado");
        };
  
        res.send(users);
  
    } catch (error) {
        res.send(error.sqlMessage || error.message);
    };
};