import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './setup/connection';
import { v4 as uuidv4 } from 'uuid';

const app: Express = express();

app.use(express.json());
app.use(cors());


const createUser = async ( 
    id: string, 
    name: string, 
    nickname: string, 
    email: string 
    ) : Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES (
                '${id}',
                '${name}',
                '${nickname}',
                '${email}'
            );
        `);
        console.log("Usuário inserido com sucesso");
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = '${id}';
    `)
  
    console.log(result[0][0])
    return result[0][0]
}

// ENDPOINTS
// createUser
app.post("/user", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, nickname, email } = req.body;

        if ( !name || !nickname || !email ) {
            errorCode = 422;
            throw new Error("Algum campo está faltando! Por favor, preencha corretamente.");
        }

        const id = uuidv4();

        await createUser(id, name, nickname, email);
  
        res.status(200).send({ 
            message: "Usuário criado com sucesso!",
            user: {
                id: id,
                name: name,
                nickname: nickname,
                email: email
            }
        });
    } catch (error) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message,
        });
    }
});

// getUserById
app.get('/user/:id', async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id as string;

        if ( !req.params ) {
            errorCode = 422;
            throw new Error('Id do usuário não foi informado.')
        }

        const user = await getUserById(id);

        if ( !user ) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!")
        }

        res.status(200).send({ 
            message: 'Success', 
            user: {
                id: id,
                nickname: user.nickname
            }
        });
    } catch (error) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        });
    }
});


const server = app.listen( process.env.PORT || 3003, () => {
    if ( server ) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon running server.`);
    };
});