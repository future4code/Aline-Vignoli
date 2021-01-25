### Exercício 1
a) Eu acho que strings é uma forma melhor de representar id por causa da variedade de caracteres e combinações possíveis para que o `id` não se repita.

b) A resposta está no caminho `/services/idGenerator`.

### Exercício 2
a) O código acima está criando uma variável `userTableName` para armazenar o nome da tabela.
Em seguida é criada a conexão com o Banco de Dados através da lib `knex`.
Logo abaixo nós temos uma função assíncrona que recebe como parâmetro um `id`, um `email` e um `password` (ambos do tipo `string`) e aguarda a conexão com o banco para fazer a inserção desses valores na tabela `User`.

b) A query utilizada foi:
```
CREATE TABLE ${USER_TABLE} (
    id VARCHAR(64) NOT NULL PRIMARY KEY,
    name VARCHAR(64),
    nickname VARCHAR(64),
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

c) Função que insere usuários na tabela:
```
import { User } from '../types/User';
import { connection } from './connection';
export const USER_TABLE = "User";

export const insertUser = async (user: User) => {
    await connection.insert({
        id: user.id,
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        password: user.password
    }).into(USER_TABLE);
};
```

### Exercício 3
a) O segundo argumento da funcão `sign` precisa ser do tipo `string`. Como nós não sabemos se o valor que está vindo do `process.env.JWT_KEY` é uma `string` (ele pode ser `undefined`), nós temos uma forma de "forçar" o nosso código garantindo que nós só vamos receber esse valor como uma `string`, usando a palavra reservada `as`.

b) Função para gerar token:
```
import * as jwt from 'jsonwebtoken';

const expiresIn = '1min';

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        { id: input.id },
        process.env.JWT_KEY as string,
        { expiresIn }
    );

    return token;
};

export type AuthenticationData = {
    id: string
};
```

### Exercício 4
a) Endpoint signup:
```
import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { generate } from '../services/idGenerator';
import { User } from '../types/User';

export const signup = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const { email, password } = req.body;

        const user: User = {
            id: generate(),
            email: email,
            password: password
        }

        await insertUser(user);

        const authData: AuthenticationData = {id: user.id};
        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};
```

b) Foram adicionadas as seguintes validações:
```
if ( !email || !password ) {
    errorCode = 406;
    throw new Error('Preencha o "email" e "password" para se cadastrar');
};

if ( !email.includes("@") ) {
    errorCode = 406;
    throw new Error('Um endereço de "email" válido deve conter "@"');
};
```

c) Foi adicionada a seguinte validação:
```
if ( password.length < 6 ) {
    errorCode = 406;
    throw new Error('A senha deve conter no mínimo 6 caracteres.');
};
```

### Exercício 5
a) Função selectUserByEmail:
```
import { User } from '../types/User';
import { connection } from './connection';
import { USER_TABLE } from './insertUser';

export const selectUserByEmail = async (email: string) 
: Promise<User> => {
    const result = await connection
    .select("*")
    .from(USER_TABLE)
    .where({ email });

    return toUserModel(result[0]);
};

const toUserModel = (obj: any): User => {
    const user: User = {
        id: obj.id,
        name: obj.name,
        nickname: obj.nickname,
        email: obj.email,
        password: obj.password
    };

    return user;
};
```

### Exercício 6
a) Endpoint de login:
```
import { Request, Response } from 'express';
import { selectUserByEmail } from '../data/selectUserByEmail';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { User } from '../types/User';

export const login = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        };

        if ( !input.email || !input.password ) {
            errorCode = 406;
            throw new Error('Preencha o "email" e "password" para fazer o login.');
        };

        const user: User | null = await selectUserByEmail(input.email);

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        if ( input.password !== user.password ) {
            errorCode = 401;
            throw new Error('Senha incorreta.');
        };

        const authData: AuthenticationData = {id: user.id};
        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};

type loginInput = {
    email: string,
    password: string
};
```

b) A validação adicionada foi:
```
if ( !input.email.includes("@") ) {
    errorCode = 406;
    throw new Error('Um endereço de "email" válido deve conter "@".');
};
```