import connection from '../setup/connection';

const TABLE: string = "aula48_exercicio";

export const selectAllUsers = async () : Promise<any> => {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);
 
    return result[0];
};

export const selectFilteredUsers = async (name: string) : Promise<any> => {
    const result = await connection
    .select("*")
    .from("aula48_exercicio")
    .where("name", "LIKE", `%${name}%`);
 
    return result;
};