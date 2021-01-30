import { Request, Response } from 'express';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { recipe } from '../types/recipe';
import { user } from '../types/user';
import { selectRecipeById } from '../data/selectRecipeById';
import { updateRecipe } from '../data/updateRecipe';

export const editRecipe = async (req: Request, res: Response) : Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const { id } = req.params;
        const { title, description } = req.body;

        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to create a recipe');
        };

        const authData = getTokenData(token);
        const userId = authData.id;
        const user: user | null = await selectUserByPropriety("id", userId) as user;

        if ( !user ) {
            errorCode = 404;
            throw new Error('User not found');
        };

        const recipeToEdit: recipe | null = await selectRecipeById(id);

        if ( !recipeToEdit ) {
            errorCode = 404;
            throw new Error('Recipe not found');
        }

        if ( recipeToEdit.userId !== userId ) {
            errorCode = 404;
            throw new Error('You are not allowed to edit a recipe from another user');
        };
        
        if ( !title && !description ) {
            errorCode = 422;
            throw new Error("Please, inform 'title' or 'description'");
        };

        const updatedRecipe: recipe = {
            id: recipeToEdit.id,
            title,
            description,
            createdAt: recipeToEdit.createdAt,
            userId
        };

        await updateRecipe(updatedRecipe);

        res.status(200).send("Recipe updated successfuly!");

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};