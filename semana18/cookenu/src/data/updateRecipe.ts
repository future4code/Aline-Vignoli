import connection from './connection';
import { RECIPE_TABLE } from '../setup/tableNames';
import { recipe } from '../types/recipe';

export const updateRecipe = async (recipe: recipe) : Promise<void> => {
    await connection(RECIPE_TABLE)
    .where({id: recipe.id})
    .update({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        createdAt: recipe.createdAt,
        userId: recipe.userId
    });
};