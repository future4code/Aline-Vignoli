### Exercício 1
a) `round` seria o número de "rodadas" utilizadas para encriptar uma senha, por exemplo. Quanto maior o round, mais demorado será o processo de codificação, mas também mais seguro.
`salt` é uma string aleatória que é gerada pelo bcrypt e adicionada a string de entrada, baseada no número de `rounds` passado como parâmetro.
O valor recomendado para `round` é de 12. Eu utilizei o valor recomendado pois é um bom equilibrio entre um tempo rápido de processamento e uma segurança efetiva do `hash`.

b) Função para cryptografar:
```
export const hash = (plainText: string): string => {
    const cost: number = Number(process.env.BCRYPT_COST);
    const salt: string = bcrypt.genSaltSync(cost);
    const cypherText: string = bcrypt.hashSync(plainText, salt);

    return cypherText;
};
```

c) Função para comparar string e hash:
```
export const compare = (
    plainText: string,
    cypherText: string
): boolean => {
    return bcrypt.compareSync(plainText, cypherText);
};
```

### Exercício 2
a) Devemos primeiro modificar o endpoint de cadastro.
Pois assim, nós primeiro salvamos no Banco de Dados a senha criptografada. Em seguida, no endpoint de login, nós verificamos se a senha passada no `body` é compatível com a senha que está salva no Banco, atravéz da nossa função `compare`.

b) Endpoint de signup refatorado:
```
import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { generate } from '../services/idGenerator';
import { User } from '../types/User';
import { hash } from '../services/hashManager';

export const signup = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            errorCode = 406;
            throw new Error('Preencha o "email" e "password" para se cadastrar.');
        };

        if ( !email.includes("@") ) {
            errorCode = 406;
            throw new Error('Um endereço de "email" válido deve conter "@".');
        };

        if ( password.length < 6 ) {
            errorCode = 406;
            throw new Error('A senha deve conter no mínimo 6 caracteres.');
        };

        const id: string = generate();
        const cypherPassword: string = hash(password);

        const user: User = {
            id,
            email,
            password: cypherPassword
        };

        await insertUser(user);

        const authData: AuthenticationData = {id: user.id};
        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};
```

c) Endpoint de login refatorado:
```
import { Request, Response } from 'express';
import { selectUserByEmail } from '../data/selectUserByEmail';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { User } from '../types/User';
import { compare } from '../services/hashManager';

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

        if ( !input.email.includes("@") ) {
            errorCode = 406;
            throw new Error('Um endereço de "email" válido deve conter "@".');
        };

        const user: User | null = await selectUserByEmail(input.email);

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        const passwordIsCorrect: boolean = compare(
            input.password,
            user.password
        );

        if ( !passwordIsCorrect ) {
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

d) Esse endpoint não precisa ser alterado pois ele apenas pega o `id` do usuário, que está encriptado no `token` passado pelo `authorization`, e verifica no banco se esse usuário existe. 
Caso ele exista, nós enviamos como resposta informações desse usuário.

### Exercício 3
a) Query final da tabela:
```
CREATE TABLE ${USER_TABLE} (
    id VARCHAR(64) NOT NULL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role enum('NORMAL','ADMIN') DEFAULT 'NORMAL'
);
```

b) A função getData e o type AuthenticationData ficaram dessa forma:
```
import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../types/User";

export const generateToken = (
    payload: AuthenticationData
): string => {

    const token: string = jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRE_TIME}
    );

    return token;
};

export const getData = (token: string): AuthenticationData => {
    const { id, role } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData;

    return { id, role };
};

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
};
```

c) Endpoint signup refatorado:
```
import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { generate } from '../services/idGenerator';
import { User, USER_ROLES } from '../types/User';
import { hash } from '../services/hashManager';

export const signup = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const { name, nickname, email, password, role } = req.body;

        if ( !email || !password || !name || !nickname ) {
            errorCode = 406;
            throw new Error('Preencha "name", "nickname", "email" e "password" para se cadastrar.');
        };

        if ( role !== USER_ROLES.ADMIN &&
             role !== USER_ROLES.NORMAL
        ) {
            errorCode = 406;
            throw new Error('"role" precisa ser "ADMIN" ou "NORMAL".');
        };

        if ( !email.includes("@") ) {
            errorCode = 406;
            throw new Error('Um endereço de "email" válido deve conter "@".');
        };

        if ( password.length < 6 ) {
            errorCode = 406;
            throw new Error('A senha deve conter no mínimo 6 caracteres.');
        };

        const id: string = generate();
        const cypherPassword: string = hash(password);

        const user: User = {
            id,
            name,
            nickname,
            email,
            password: cypherPassword,
            role
        };

        await insertUser(user);

        const authData: AuthenticationData = {
            id: user.id,
            role
        };

        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};
```

d) Endpoint login refatorado:
```
import { Request, Response } from 'express';
import { selectUserByEmail } from '../data/selectUserByEmail';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { User } from '../types/User';
import { compare } from '../services/hashManager';

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

        if ( !input.email.includes("@") ) {
            errorCode = 406;
            throw new Error('Um endereço de "email" válido deve conter "@".');
        };

        const user: User | null = await selectUserByEmail(input.email);

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        const passwordIsCorrect: boolean = compare(
            input.password,
            user.password
        );

        if ( !passwordIsCorrect ) {
            errorCode = 401;
            throw new Error('Senha incorreta.');
        };

        const authData: AuthenticationData = {id: user.id, role: user.role!};
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

### Exercício 4
a) Endpoint getLoggedUser refatorado:
```
import { Request, Response } from 'express';
import { selectUserById } from '../data/selectUserById';
import { getData } from '../services/authenticator';
import { User, USER_ROLES } from '../types/User';

export const getLoggedUser = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;
        const authData = getData(token);
        const user: User | null = await selectUserById(authData.id);
        const unauthorized: boolean = authData.role !== USER_ROLES.NORMAL;

        if ( unauthorized ) {
            errorCode = 401;
            throw new Error('Você não tem permissão para acessar essas informações');
        };

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        res.status(200).send(
            { user: { id: user.id, name: user.name, email: user.email} }
        );

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};
```

### Exercício 5
a) Endpoint deleteUser:
```
import { Request, Response } from 'express';
import { selectUserById } from '../data/selectUserById';
import { deleteUser } from '../data/deleteUser';
import { getData } from '../services/authenticator';
import { User, USER_ROLES } from '../types/User';

export const removeUser = async (req: Request, res: Response) : Promise<void> => {
    let errorCode: number = 400;
    try {
        const id = req.params.id;
        const token = req.headers.authorization as string;
        const authData = getData(token);
        const user: User | null = await selectUserById(id);
        const unauthorized: boolean = authData.role !== USER_ROLES.ADMIN;

        if ( unauthorized ) {
            errorCode = 401;
            throw new Error('Você não tem permissão para deletar usuários');
        };

        if ( !user ) {
            errorCode = 404;
            throw new Error('Usuário não encontrado!');
        };

        await deleteUser(id);

        res.status(200).send("Usuário excluído com sucesso!");

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};
```

### Exercício 6