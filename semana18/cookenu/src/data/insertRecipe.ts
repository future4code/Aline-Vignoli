import connection from './connection';
import { RECIPE_TABLE } from '../setup/tableNames';
import { recipe } from '../types/recipe';

export const insertRecipe = async (recipe: recipe) : Promise<void> => {
    await connection.insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        createdAt: recipe.createdAt,
        userId: recipe.userId
    }).into(RECIPE_TABLE);
};