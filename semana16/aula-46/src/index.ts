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

const createActor = async ( 
    name: string, 
    salary: number, 
    dateOfBirth: Date, 
    gender: string 
    ) : Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO Actor (name, salary, birth_date, gender)
            VALUES (
                '${name}',
                ${salary},
                '${dateOfBirth.toLocaleDateString("pt-br")}',
                '${gender}'
            );
        `);
        console.log("Ator inserido com sucesso");
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

// ENDPOINTS
// getActorById
app.get("/actor/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = Number(req.params.id);
        const actor = await getActorById(id);

        if ( !actor ) {
            errorCode = 400;
            throw new Error("Ator não encontrado");
        }

        res.status(200).send({ actor: actor });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
});

// getActorCountByGender
app.get("/actor", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const gender = req.query.gender as string;
        const count: number = await countActorsByGender(gender);

        if ( !count ) {
            errorCode = 422;
            throw new Error("Gênero informado inválido");
        };

        res.status(200).send({ gender: gender, count: count});
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
});

// createActor
app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.gender
      );
  
      res.status(200).send("Ator criado com sucesso!");
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
});

// updateSalary

app.put("/actor", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        await updateSalary(
            Number(req.body.id),
            Number(req.body.salary)
        );

        const actor = await getActorById(req.body.id);

        if ( !actor ) {
            errorCode = 400;
            throw new Error("Ator não encontrado")
        };
  
        res.status(200).send("Salário alterado com sucesso");
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);
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