# Instruções

* `npm install`:
Instala as dependências do projeto.

## Criar o arquivo .env
Criar o arquivo `.env` com as informações do seu banco de dados.
```
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados

JWT_KEY = chave-token
JWT_EXPIRE_TIME = tempo-de-expiracao-token

BCRYPT_COST = numero-de-rounds
```

## Criar a tabela
* `npm run tables`:
Cria a tabela User.

## Executar o projeto

* `npm run start`: 
Inicia a conexão com o banco de dados e roda o projeto.
Precisa dar o comando `ctrl + C` para parar a execução.

* `npm run dev`:
Reinicia o servidor automaticamente toda a vez que o projeto for salvo.

## ENDPOINTS 

* ### signup
  * Método: POST
  * Path: `/user/signup`
  * Body:
    * name (obrigatório)
    * nickname (obrigatório)
    * email (obrigatório)
    * password (obrigatório)
    * role (obrigatório => `ADMIN` ou `NORMAL`)

* ### login
  * Método: POST
  * Path: `/user/login`
  * Body:
    * email (obrigatório)
    * password (obrigatório)   

* ### getUserProfile
  * Método: GET
  * Path: `/user/profile`
  * Headers: Authorization (`id` vem atravéz do token de acesso, acesso restrito para role `NORMAL`)
  * Body de Resposta: (retornar um erro se não encontrar)
    * user {
        * id
        * name
        * email
    }

* ### getUserById
  * Método: GET
  * Path: `/user`
  * Headers: Authorization (`id` vem através do token de acesso)
  * Body de Resposta: (retornar um erro se não encontrar)
    * user {
        * id
        * email
        * role
    }

* ### removeUser
  * Método: DELETE
  * Path: `/user/:id`
  * Headers: Authorization (Token de acesso, acesso restrito para role `ADMIN`)
  * Body de Resposta: (retornar um erro se não encontrar)
    * Usuário excluído com sucesso!    