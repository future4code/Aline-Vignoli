import connection from './connection';

const createTable = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE aula48_exercicio (
                id INT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                type VARCHAR(255) NOT NULL
            );
        `);

        console.log(
            'Table "aula48_exercicio" created successfully, run "npm run populate" to populate the table with dummy values'
        );   
        connection.destroy();   
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

createTable();