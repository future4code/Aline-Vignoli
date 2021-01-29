import connection from './connection';
import { RECIPE_TABLE } from '../setup/tableNames';
import { recipe, toRecipeModel } from '../types/recipe';

export const selectRecipeById = async (id: string) 
: Promise<recipe | null> => {
    const result = await connection
        .select("*")
        .from(RECIPE_TABLE)
        .where({ id });
    
    return result[0] ? toRecipeModel(result[0]) : null;
};