import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

// Dotenv settings
dotenv.config();

// Connecting
// const connection: Knex = knex({
//     client: "mysql",
//     connection: {
//         host: process.env.DB_HOST,
//         port: Number(process.env.DB_PORT),
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME
//     }
// });

const connection: Knex = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
    }
 });

const getActorById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
    return result[0]
}

const getAllActors = async (): Promise<any> => {
    try {

        const result: any = await connection.raw(`
        SELECT * FROM Actor;
        `);
  
        return result[0];
        
     } catch (error) {
        console.log(error.sqlMessage || error.message);
     }
}

const result = getAllActors();
console.log(result);

// Inicializing express and cors
const app: Express = express();

app.use(express.json());
app.use(cors());

// Server settings
const server = app.listen(process.env.DB_PORT || 3006, () => {
    if ( server ) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in localhost://${address.port}`);
    } else {
        console.log(`Failure upon start server`);
    };
});