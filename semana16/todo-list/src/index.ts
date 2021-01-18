import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './setup/connection';
import { v4 as uuidv4 } from 'uuid';
import { dateFormat, dateToDBFormat } from './util/dateFormat';

const app: Express = express();

app.use(express.json());
app.use(cors());

const getAllUsers = async () : Promise<any> => {
    try {
        const result = await connection("TodoListUser")
        .select();
        return result;
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

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

    return result[0][0];
};

const editUser = async (
    id: string,
    name: string,
    nickname: string
): Promise<void> => {
    await connection("TodoListUser")
    .update({ name: name, nickname: nickname })
    .where("id", id);
};

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
};

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection('TodoListTask')
    .select(
        'id as taskId', 
        'title', 
        'description', 
        'status', 
        'limit_date as limitDate',
        'creator_user_id as creatorUserId'
    )
    .where('id', id);

    return result[0];
};

const getTasksPerUser = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT 
            TodoListTask.id as taskId,
            title,
            description,
            limit_date as limitDate,
            creator_user_id as creatorUserId,
            status,
            nickname as creatorUserNickname
        FROM TodoListUser
        JOIN TodoListTask
        ON TodoListUser.id = TodoListTask.creator_user_id
        WHERE TodoListUser.id = "${id}";
    `);

    return result[0];
};

// ENDPOINTS

// getAllUsers
app.get("/user/all", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const users = await getAllUsers();

        if ( !users ) {
            errorCode = 404;
            throw new Error("Nenhum usuário encontrado");
        };

        res.status(200).send({
            message: "Success",
            quantity: users.length,
            users: users
        });
    } catch (error) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    };
});

// getTasksPerUser
app.get("/task?", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { creatorUserId } = req.query;

        const user = await getUserById(creatorUserId as string);

        if ( !user ) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        };

        const tasks = await getTasksPerUser(user.id);
        console.log(tasks)

        res.status(200).send({
            message: "Success",
            tasks: tasks
        });
    } catch (error) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    };
});


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

        const creatorUser = await getUserById(creatorUserId);

        if ( !creatorUser ) {
            errorCode = 404;
            throw new Error("Usuário informado não está cadastrado!");
        }

        const id = uuidv4();

        const task = {
            id: id,
            title: title, 
            description: description,
            status: 'to do',
            limit_date: dateToDBFormat(limitDate),
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

//getTaskById
app.get('/task/:id', async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id as string;
        const task = await getTaskById(id);

        if ( !task ) {
            errorCode = 404;
            throw new Error("Tarefa não encontrada!")
        }

        const formatDate = dateFormat(task.limitDate);

        res.status(200).send({ 
            message: 'Success', 
            task: {
                taskId: id,
                title: task.title,
                description: task.description,
                status: task.status,
                limitDate: formatDate,
                creatorUserId: task.creatorUserId
            }
        });
    } catch (error) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        });
    }
});

// SERVER SETTINGS
const server = app.listen( process.env.PORT || 3003, () => {
    if ( server ) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon running server.`);
    };
});