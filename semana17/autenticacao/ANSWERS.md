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
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

c) Função que insere usuários na tabela:
```
import { User } from '../types/User';
import { connection } from './connection';
import { USER_TABLE } from '../setup/tables';

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