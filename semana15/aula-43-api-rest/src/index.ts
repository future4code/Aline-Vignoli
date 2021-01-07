import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { user, UserType, users } from './users';

const app: Express = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
// getAllUsers
app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = users;
        res.status(200).send({ quantity: users.length, users: result });
    } catch (error) {
        res.status(errorCode).send(error.message);
    };
});

//findUserByName
app.get("/user/search", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const userName: string = (req.query.name as string).toLowerCase();

        if (!userName) {
            errorCode = 422;
            throw new Error("Busca inválida. O nome do usuário não foi informado.");
        };

        const user = users.find(((u: user) => u.name.toLowerCase() === userName));

        if (!user) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        };

        res.status(200).send({ message: "Success", user: user })
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
});

// filterUsersByType
app.get("/user/:type", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const type: string = (req.params.type as string).toUpperCase();
        const validTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL

        if (!validTypes) {
            errorCode = 422;
            throw new Error("Tipo inválido");
        };

        const matches = users.filter(((u: user) => u.type === type));

        res.status(200).send({ message: "Success", quantity: matches.length, users: matches });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
});

// createUser
app.post("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, email, type, age } = req.body;
        const validTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL
        const reqBody: user = {
            id: Date.now(),
            name: name,
            email: email,
            type: type,
            age: age
        };

        if (!name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Algum campo está faltando. Preencha corretamente.");
        };

        if (!validTypes) {
            errorCode = 422;
            throw new Error("Tipo do usuário inválido");
        };

        users.push(reqBody);

        res.status(200).send({ message: "Usuário inserido com sucesso!", user: reqBody });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});

// EXERCÍCIO 5
// editUserName
app.put("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: { id: number, name: string } = {
            id: Number(req.params.id),
            name: `${req.body.name} -ALTERADO`
        };

        if (isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("Id inválido");
        };

        if (!req.body.name) {
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        };

        const userIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)));

        if (userIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!");
        };

        users[userIndex].name = reqBody.name;

        res.status(200).send({ message: "Nome alterado com sucesso!", user: reqBody });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
});

// EXERCÍCIO 6
// patchUserName
app.patch("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: { id: number, name: string } = {
            id: Number(req.params.id),
            name: `${req.body.name} -REALTERADO`
        };

        if (isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("Id inválido");
        }

        if (!req.body.name) {
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        };

        const userIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)));

        if (userIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!");
        }

        users[userIndex].name = reqBody.name;

        res.status(200).send({ message: "Nome alterado com sucesso!", user: reqBody });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
});

// deleteUser
app.delete("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id);

        if (isNaN(Number(id))) {
            errorCode = 422;
            throw new Error("Id inválido");
        }

        const userIndex = users.findIndex(((u: user) => u.id === id));

        if (userIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        users.splice(userIndex, 1);
        res.status(200).send({ message: "Usuário removido com sucesso!" });
    } catch (error) {
        res.status(errorCode).send(error.message);
    };
});


// SERVER SETTINGS
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    };
});