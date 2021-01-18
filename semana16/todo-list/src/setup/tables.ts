import connection from './connection';

const createTables = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE TodoListUser (
                id VARCHAR(255) PRIMARY KEY, 
                name VARCHAR(255) NOT NULL, 
                nickname VARCHAR(255) UNIQUE NOT NULL, 
                email VARCHAR(255) UNIQUE NOT NULL
            );
            
            CREATE TABLE TodoListTask (
                id VARCHAR(255) PRIMARY KEY, 
                title VARCHAR(255) NOT NULL, 
                description TEXT NOT NULL, 
                status ENUM('to do', 'doing', 'done') NOT NULL DEFAULT 'to do',
                limit_date DATE NOT NULL,
                creator_user_id varchar(255) NOT NULL,
                FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
            );
            
            CREATE TABLE ResponsibleUserTaskRelation (
                task_id VARCHAR(255),
                responsible_user_id VARCHAR(255),
                FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
                FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
            );
        `);

        console.log('Tables created successfully, run script "populate" to populate the TodoListUser table with dummy values');   
        connection.destroy();   
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

createTables();