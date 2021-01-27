import { connection } from '../data/connection';
import { USER_TABLE } from '../data/insertUser';
import { ADDRESS_TABLE } from '../data/insertAddress';
import { USER_ADDRESS_TABLE } from '../data/insertUserAddressRelation';

const createTables = async () => {
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

            CREATE TABLE ${ADDRESS_TABLE} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                number VARCHAR(20) NOT NULL,
                neighborhood VARCHAR(255) NOT NULL,
                additional_info VARCHAR(50),
                city VARCHAR(50) NOT NULL,
                state VARCHAR(100) NOT NULL
            );
            
            CREATE TABLE ${USER_ADDRESS_TABLE} (
                user_id VARCHAR(255) NOT NULL,
                address_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES User(id),
                FOREIGN KEY (address_id) REFERENCES Address(id)
            );
        `);

        console.log(`'${USER_TABLE}', '${ADDRESS_TABLE}' and '${USER_ADDRESS_TABLE}' Table created successfuly"`);
        
    } catch (error) {
        console.log(error.message || error.sqlMessage);
    } finally {
        connection.destroy();
    };
};

createTables();