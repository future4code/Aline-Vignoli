import connection from './connection';
import { v4 as uuidv4 } from 'uuid';

const populateUserTable = async (): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email) VALUES 
            (
                '${uuidv4()}',
                'Astrodev',
                'astrodev',
                'astrodev@gmail.com'
            ),
            (
                '${uuidv4()}',
                'Aline Vignoli',
                'nyhvignoli',
                'nyhv@gmail.com'
            ),
            (
                '${uuidv4()}',
                'Dori',
                'dori',
                'dori@gmail.com'
            );
        `);

        console.log('3 users inserted to get you started!');
        connection.destroy();        
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

populateUserTable();