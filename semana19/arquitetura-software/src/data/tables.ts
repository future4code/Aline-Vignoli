import { getConnection } from './connection';
import { USER_TABLE } from './tableNames';

const connection = getConnection();
const createTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE User_Arq(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role ENUM ("ADMIN", "NORMAL") DEFAULT "NORMAL"
            );
        `);

        console.log(`'${USER_TABLE}' table created successfuly"`);

    } catch (error) {
        console.log(error.message || error.sqlMessage);
    } finally {
        connection.destroy();
    };
};

createTable();