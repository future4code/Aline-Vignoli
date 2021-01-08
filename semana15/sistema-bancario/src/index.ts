import express, { Express, request, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { User, Account, Transaction, accounts } from './data/data';
import { stringToDate, checkIfIsOver18, validateDate } from './util/functions';

// EXPRESS AND CORS ACTVATION
const app: Express = express();

app.use(express.json());
app.use(cors());


// ENDPOINTS
// getAllUsers
app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = accounts.map((account) => account.client);
        
        res.status(200).send({ message: "Success", quantity: result.length, users: result })
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
});

// getBalance
app.get("/account", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const {name, cpf} = req.body;

        if (!name || !cpf) {
            errorCode = 422;
            throw new Error("Por favor, informe nome e CPF para prosseguir");
        };

        const result = accounts.find((account) => 
            account.client.name === name && account.client.cpf === cpf
        );
        
        if (!result) {
            errorCode = 404;
            throw new Error("Nenhuma conta foi encontrada com esses dados");
        }

        res.status(200).send({ message: "Success", balance: result.balance })
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
});

// createAccount
app.post("/account", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const {name, cpf, dateOfBirth} = req.body;
        
        if (!name || !cpf || !dateOfBirth) {
            errorCode = 422;
            throw new Error("Algum campo está faltando. Preencha corretamente.");
        };

        const currentDate = new Date();
        const date = stringToDate(dateOfBirth);

        if (!checkIfIsOver18(currentDate, date)) {
            errorCode = 401;
            throw new Error("Precisar ter mais de 18 anos para se cadastrar.");
        }

        const users = accounts.map((account) => account.client);
        const matchCPF = users.find(((u: User) => u.cpf === cpf ))

        if (matchCPF) {
            errorCode = 422;
            throw new Error("CPF já existe.")
        }

        const user : User = {
            name: name,
            cpf: cpf,
            dateOfBirth: dateOfBirth
        }

        const reqBody : Account = {
            client: user,
            balance: 0,
            extract: []
        }

        accounts.push(reqBody);
        
        res.status(200).send({ message: "Success", account: reqBody })
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
});

// makeADeposit
app.put("/account/deposit", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try { 
        const { name, cpf, amount } = req.body;

        if (!name || !cpf || !amount) {
            errorCode = 422;
            throw new Error("Algum campo está faltando. Preencha corretamente.");
        };

        const index = accounts.findIndex((account) => 
            account.client.name === name && account.client.cpf === cpf
        );

        if (index === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado. Confira os dados e tente novamente.");
        };

        let balance: number = accounts[index].balance;
        balance += Number(amount); 

        res.status(200).send({ message: "Success", depositValue: amount, currentBalance: balance })
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
});

// payBill
app.put("/account/payment", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, cpf, value, date, description } = req.body;
        let paymentDate: string = new Date().toLocaleDateString("pt-BR");

        if (!name || !cpf || !value || !description) {
            errorCode = 422;
            throw new Error("Algum campo está faltando. Preencha corretamente.");
        };

        const index = accounts.findIndex((account) => 
            account.client.name === name && account.client.cpf === cpf
        );

        if (index === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado. Confira os dados e tente novamente.");
        };
        
        let balance: number = accounts[index].balance;
        if (date) {
            if (!validateDate(stringToDate(date))) {
                errorCode = 400;
                throw new Error("Data inválida");
            }
            paymentDate = date;
        } else {
            balance -= Number(value);
        }
        
        const transaction: Transaction = {
            value: Number(value),
            date: paymentDate,
            description: description
        }

        const extract = accounts[index].extract;
        extract.push(transaction);

        res.status(200).send({ message:"Success", currentBalance: balance, extract: extract })
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