import { Request, Response } from 'express';
import { selectRecipeById } from '../data/selectRecipeById';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { formatDate } from '../service/dateManager';
import { recipe } from '../types/recipe';
import { user } from '../types/user';

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const { id } = req.params;
        
        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to access this information');
        };

        const authData = getTokenData(token);
        const user: user | null = await selectUserByPropriety("id", authData.id);
        const recipe: recipe | null = await selectRecipeById(id);

        if ( !user ) {
            errorCode = 404;
            throw new Error(
                "User not found"
            );
        };
        
        if ( !recipe ) {
            errorCode = 404;
            throw new Error('Recipe not found');
        };

        res.status(200).send(
            { 
                id: recipe.id, 
                title: recipe.title, 
                description: recipe.description,
                createdAt: formatDate(recipe.createdAt)
            }
        );

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};