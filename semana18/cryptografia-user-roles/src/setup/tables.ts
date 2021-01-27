import { connection } from '../data/connection';
import { USER_TABLE } from '../data/insertUser';

const createUserTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE ${USER_TABLE} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                nickname VARCHAR(64) NOT NULL,
                email VARCHAR(64) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role enum('NORMAL','ADMIN') DEFAULT 'NORMAL'
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