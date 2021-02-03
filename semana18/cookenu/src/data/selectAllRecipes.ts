import connection from './connection';
import { RECIPE_TABLE, USER_TABLE } from '../setup/tableNames';
import { recipe } from '../types/recipe';

export const selectAllRecipes = async () 
: Promise<recipe[] | null> => {
    const result = await connection.raw(`
        SELECT ${RECIPE_TABLE}.id, title, description, createdAt, userId, name as userName 
        FROM ${RECIPE_TABLE}
        JOIN ${USER_TABLE} ON ${USER_TABLE}.id = ${RECIPE_TABLE}.userId;
    `)
    
    return result[0];
};