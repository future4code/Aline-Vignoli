import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

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

const getActors = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor;
    `)
  
    console.log(result[0])
    // return result[0][0]
}

getActors();

const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen( process.env.PORT || 3003, () => {
    if ( server ) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon running server.`);
    };
});