import { connection } from '../data/connection';

export const USER_TABLE = "User";

const createUserTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE ${USER_TABLE} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                nickname VARCHAR(64) NOT NULL UNIQUE,
                email VARCHAR(64) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            );
        `);

        console.log(`"${USER_TABLE} Table created successfuly"`);
        
    } catch (error) {
        console.log(error.message || error.sqlMessage);
    } finally {
        connection.destroy();
    };
};

createUserTable();