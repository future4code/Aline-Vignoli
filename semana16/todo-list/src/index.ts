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
    `);
  
    console.log(result[0][0]);
    return result[0][0];
}

const editUser = async (
    id: string,
    name: string,
    nickname: string
): Promise<void> => {
    await connection("TodoListUser")
    .update({ name: name, nickname: nickname })
    .where("id", id);
}

const createTask = async (
    task: {
        id: string,
        title: string, 
        description: string,
        status: string,
        limit_date: string,
        creator_user_id: string
    }
): Promise<void> => {
    await connection("TodoListTask")
    .insert(task);
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

// editUser
app.post('/user/edit/:id', async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id as string;
        const { name, nickname } = req.body;
        const user = await getUserById(id);

        if ( !name && !nickname ) {
            errorCode = 422;
            throw new Error("Preencha um dos campos para editar.");
        }

        if ( !user ) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!")
        }

        await editUser(id, name || user.name, nickname || user.nickname);

        res.status(200).send({ 
            message: 'Success', 
            user: {
                name: name || user.name,
                nickname: nickname || user.nickname
            }
        });
    } catch (error) {
        res.status(errorCode).send({ 
            message: error.sqlMessage || error.message
        });
    };
});

// createTask
app.put("/task", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { title, description, limitDate, creatorUserId } = req.body;

        if ( !title || !description || !limitDate || !creatorUserId ) {
            errorCode = 422;
            throw new Error("Algum campo está faltando! Por favor, preencha corretamente.");
        }

        const id = uuidv4();
        const splitedDate = limitDate.split("/");
        const formatDate = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`

        const task = {
            id: id,
            title: title, 
            description: description,
            status: 'to do',
            limit_date: formatDate,
            creator_user_id: creatorUserId
        }

        await createTask(task);
  
        res.status(200).send({ 
            message: "Tarefa adicionada com sucesso!"
        });
    } catch (error) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message,
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