import connection from '../data/connection';
import { RECIPE_TABLE, USER_FOLLOWERS, USER_FOLLOWING, USER_TABLE } from './tableNames';

const createTables = async () => {
    try {
        await connection.raw(`
            CREATE TABLE ${USER_TABLE} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                email VARCHAR(64) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role enum('NORMAL','ADMIN') DEFAULT 'NORMAL'
            );
            
            CREATE TABLE ${RECIPE_TABLE} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                title VARCHAR(64) NOT NULL,
                description VARCHAR(255) NOT NULL,
                createdAt DATE NOT NULL,
                userId VARCHAR(255) NOT NULL,
                FOREIGN KEY (userId) REFERENCES ${USER_TABLE}(id)
            );
            
            CREATE TABLE ${USER_FOLLOWING} (
                userId VARCHAR(255) NOT NULL,
                followingUserId VARCHAR(255) NOT NULL,
                FOREIGN KEY (userId) REFERENCES ${USER_TABLE}(id),
                FOREIGN KEY (followingUserId) REFERENCES ${USER_TABLE}(id)
            );
            
            CREATE TABLE ${USER_FOLLOWERS} (
                userId VARCHAR(255) NOT NULL,
                followerId VARCHAR(255) NOT NULL,
                FOREIGN KEY (userId) REFERENCES ${USER_TABLE}(id),
                FOREIGN KEY (followerId) REFERENCES ${USER_TABLE}(id)
            );
        `);

        console.log(`'${USER_TABLE}', '${RECIPE_TABLE}', '${USER_FOLLOWING}' and '${USER_FOLLOWERS}' tables created successfuly"`);

    } catch (error) {
        console.log(error.message || error.sqlMessage);
    } finally {
        connection.destroy();
    };
};

createTables();