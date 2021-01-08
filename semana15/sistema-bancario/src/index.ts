import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { users, User, Account, Transaction } from './data/data';

// EXPRESS AND CORS ACTVATION
const app: Express = express();

app.use(express.json());
app.use(cors());


// ENDPOINTS
// createUser
app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const {name, cpf, dateOfBirth} = req.body;
        
        if (!name || !cpf || !dateOfBirth) {
            errorCode = 422;
            throw new Error("Algum campo está faltando. Preencha corretamente.");
        }

        const reqBody : User = {
            name: name,
            cpf: cpf,
            dateOfBirth: dateOfBirth,
            transactions: []
        }

        users.push(reqBody);
        
        res.status(200).send({message: "Success", user: reqBody})
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
});


// SERVER SETTINGS
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon start server.`);
    }
});