import { Request, Response } from 'express';
import { selectAllRecipes } from '../data/selectAllRecipes';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { formatDate } from '../service/dateManager';
import { recipe } from '../types/recipe';
import { user } from '../types/user';

export const getAllRecipes = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        
        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to access this information');
        };

        const authData = getTokenData(token);
        const user: user | null = await selectUserByPropriety("id", authData.id);

        if ( !user ) {
            errorCode = 404;
            throw new Error(
                "User not found"
            );
        };

        const recipes: recipe[] | null = await selectAllRecipes();
        let recipesToShow: recipe[] = []

        if (recipes) {
            recipesToShow = recipes.map((recipe: recipe) => {
                return {
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    createdAt: formatDate(recipe.createdAt),
                    userId: recipe.userId,
                    userName: recipe.userName
                }
            });
        } else {
            throw new Error("No recipes to show");
        };

        res.status(200).send({ recipesToShow });

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};