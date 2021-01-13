import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import knex, { ResolveTableType } from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

// Dotenv settings
dotenv.config();

// Inicializing express and cors
const app: Express = express();

app.use(express.json());
app.use(cors());

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
      SELECT * FROM Actor WHERE id = ${id};
    `)
  
    console.log(result[0][0])
    return result[0][0]
}

// getActorById(6);

const getActorByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}";
        `);
        console.log(result[0][0]);
        return result[0][0];
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

// getActorByName('Juliana Paes');


const countActorsByGender = async (gender: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) as total FROM Actor WHERE gender = "${gender}";
        `);
        
        const total = result[0][0].total;
        console.log(total);
        return total;
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

// countActorsByGender('female');


const updateSalary = async (
    id: number, 
    salary: number
) : Promise<void> => {
    try {
        await connection("Actor")
        .update({ salary: salary })
        .where("id", id);
        console.log(`Salario alterado`);
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    };
};

// updateSalary(2, 9000000);


const deleteActor = async (id: number) : Promise<void> => {
    try {
        await connection("Actor")
        .where("id", id)
        .del();
        console.log(`Ator removido`);
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    };
};

// deleteActor(5);


const averageByGender = async (gender: string): Promise<any> => {
    try {
        const result = await connection("Actor")
        .avg("salary as average")
        .where("gender", gender);
        console.log(result[0].average);
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

// averageByGender("female");


app.get("/actor/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = Number(req.params.id);
        const actor = await getActorById(id);

        if ( !actor ) {
            errorCode = 400;
            throw new Error("Ator não encontrado")
        }

        res.status(200).send({ actor: actor });
    } catch (error) {
        res.status(400).send({ message: error.message });
    };
});

// Server settings
const server = app.listen(process.env.PORT || 3003, () => {
    if ( server ) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in localhost://${address.port}`);
    } else {
        console.log(`Failure upon start server`);
    };
});