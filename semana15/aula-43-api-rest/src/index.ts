import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { user, UserType, users } from './users';

const app: Express = express();

app.use(express.json());
app.use(cors());


// EXERCÍCIO 1:
// a. Devemos utilizar o método GET
// b. E entidade que está sendo manipulada é user, pois a requisição está se referindo à usuários

// getAllUsers
app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {

        const result = users;
        res.status(200).send({users: result});

    } catch (error) {
        res.status(errorCode).send(error.message);
    };
});

// EXERCÍCIO 2:
// a. Passei o parâmetro de type através de PathParams, já que vai receber apenas um parametro específico que é o type.
// b. Para garantir que só types válidos seja utilizados eu criei um enum UserType. Também foi feita uma validação que confirma se o parametro type é igual à UserType.ADMIN ou UserType.NORMAL. Se for diferente, é jogado um erro.
// filterUsersByType
app.get("/user/:type", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {

        const type: string = req.params.type as string;
        const validTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL

        if (!validTypes) {
            errorCode = 422;
            throw new Error("Tipo inválido")
        } 

        const matches = users.filter(((u: user) => u.type === type));

        res.status(200).send({message: "Success", quantity: matches.length, users: matches})

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`)
    }
});