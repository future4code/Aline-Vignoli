import { Request, Response } from 'express';
import { insertRecipe } from '../data/insertRecipe';
import { selectUserByPropriety } from '../data/selectUserByPropriety';
import { getTokenData } from '../service/authenticator';
import { parseDate } from '../service/dateManager';
import { generate } from '../service/idGenerator';
import { input } from '../types/input';
import { recipe } from '../types/recipe';
import { user } from '../types/user';
import { checkInputs } from '../service/validate';

export const createRecipe = async (req: Request, res: Response) : Promise<void> => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;

        if (!token) {
            errorCode = 401;
            throw new Error('You must be logged to create a recipe');
        };

        const authData = getTokenData(token)
        const user: user | null = await selectUserByPropriety("id", authData.id) as user;

        if ( !user ) {
            errorCode = 404;
            throw new Error('User not found');
        };

        const { title, description } = req.body;
        const inputs: input[] = [
            { name: "title", value: title },
            { name: "description", value: description }
        ];

        checkInputs(inputs);

        const id: string = generate();
        const createdAt: string = parseDate(Date.now());

        const recipe: recipe = {
            id,
            title,
            description,
            createdAt,
            userId: user.id
        };

        await insertRecipe(recipe);

        res.status(200).send({ message: "Recipe created successfuly!" });

    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};