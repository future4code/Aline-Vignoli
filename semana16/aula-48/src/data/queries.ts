import connection from '../setup/connection';

const TABLE: string = "aula48_exercicio";

export const selectAllUsers = async () : Promise<any> => {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);
 
    return result[0];
};

export const selectFilteredUsers = async (key: string, value: string) : Promise<any> => {
    const result = await connection
    .select("*")
    .from("aula48_exercicio")
    .where(`${key}`, "LIKE", `%${value}%`);
 
    return result;
};

export const selectOrderedUsers = async (
    orderBy: string,
    orderType: string
    ) : Promise<any> => {
    const result = await connection
    .select("*")
    .from("aula48_exercicio")
    .orderBy(orderBy, orderType);
 
    return result;
};

export const selectUsersPagination = async (
    resultsPerPage: number,
    offset: number
    ) : Promise<any> => {
    const result = await connection
    .select("*")
    .from("aula48_exercicio")
    .limit(resultsPerPage)
    .offset(offset)
 
    return result;
};

export const selectUsers = async (
        orderBy: string,
        orderType: string,
        resultsPerPage: number,
        offset: number,
        key?: string, 
        value?: string
    ) : Promise<any> => {
    const result = await connection
        .select("*")
        .from("aula48_exercicio")
        .where(`${key}`, "LIKE", `%${value? value : "%"}%`)  
        .orderBy(orderBy, orderType)
        .limit(resultsPerPage)
        .offset(offset);
    
    return result;
};