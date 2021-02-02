# Arquitetura de Software II

## Instruções

* `npm install`:
Instala as dependências do projeto.

### Criar o arquivo .env
Criar o arquivo `.env` com as informações sensíveis do projeto (banco de dados, chave de acesso JWT e configurações de criptografia).
```
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados

JWT_KEY = chave-token
JWT_EXPIRE_TIME = tempo-de-expiracao-token

BCRYPT_COST = numero-de-rounds
```

### Executar o projeto

* `npm run dev`:
Executa o projeto e reinicia o servidor automaticamente toda a vez que o projeto for salvo.

---

## ESTRUTURA DE DADOS  
  
* ## Users
  * id
  * name
  * nickname
  * email
  * password
  * role (`NORMAL` ou `ADMIN`)
  * tasks?

* ## Tasks
  * id
  * title
  * description
  * deadline
  * authorId  
   
---

## ENDPOINTS 

* ### signup
  * Método: POST
  * Path: `user/signup`
  * Body:
    * name (obrigatório)
    * nickname (obrigatório)
    * email (obrigatório)
    * password (obrigatório)
    * role (obrigatório -> `NORMAL` ou `ADMIN`)
  * Body de Resposta: (retorna um erro se algum campo estiver faltando)
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyNzg1NjUyLTdjNTQtNGFmZz04MjliLWI5ODQ3YTkxOTcwZCIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2MTIyMDc5NTYsImV4cCI6MTYxMjI5NDM1Nn0.0cpN1oMr1V3LfsKfDqe--XAMw9JMzMqUOJt-AYkLBMt"
    }
    ```  

* ### login
  * Método: POST
  * Path: `user/login`
  * Body:
    * email (obrigatório)
    * password (obrigatório)
  * Body de Resposta: (retorna um erro se algum campo estiver faltando ou se a senha estiver incorreta)
    ```json
    {
      "token": "eyJhbGciOiJIezI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyNzg1NjUyLTdjNTQtNGFmZz04MjliLWI5ODQ3YTkxOTcwZCIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2MTIyMDc5NTYsImV4cCI6MTYxMjI5NDM1Nn0.0cpN1oMr1V3LfsKfDqe--XAMw9JMzMqUOJt-AYkLBMt"
    }
    ```

* ### getUserProfile
  * Método: GET
  * Path: `/user/profile`
  * Headers: token de acesso
  * Body de Resposta (retorna um erro se não encontrar o usuário):
    ```json
    {
        "user": {
            "id": "aa4bd916-05b3-4ca6-b9fa-509bfa6fa471",
            "name": "New User",
            "email": "newuser@gmail.com",
            "nickname": "newUser",
            "tasks": [
                {
                    "id": "abe036d8-bbe0-483c-93c5-897fd4fba3c7",
                    "title": "Arquitetura de Sofware",
                    "description": "projeto de arquitetura de software back-end",
                    "deadline": "2021-02-03T03:00:00.000Z",
                    "authorId": "aa4bd916-05b3-4ca6-b9fa-509bfa6fa471"
                },
                {
                    "id": "d43dad85-19e0-45ec-a166-b8847916b413",
                    "title": "Entregar o projeto",
                    "description": "Entregar o projeto de arquitetura de software back-end",
                    "deadline": "2021-02-04T03:00:00.000Z",
                    "authorId": "aa4bd916-05b3-4ca6-b9fa-509bfa6fa471"
                }
            ]
        }
    }
    ``` 

* ### createTask
  * Método: PUT
  * Path: `/task`
  * Headers: token de acesso
  * Body:
    * title
    * description
    * deadline
    * authorId
  * Resposta: (retorna um erro se algum campo estiver ou se não tiver token de acesso)
    ```
    201 Created
    ```     

* ### getTaskById
  * Método: GET
  * Path: `task/:id`
  * Body de Resposta: (retornar um erro se não encontrar a tarefa)
    ``` json
    {
        "id": "897ca12b-69f5-4b83-9b88-4dd20bfb215b",
        "title": "Entregar o projeto",
        "description": "Entregar o projeto de arquitetura de software back-end",
        "deadline": "2021-02-04T03:00:00.000Z",
        "authorId": "aa4bd916-05b3-4ca6-b9fa-509bfa6fa471"
    }
    ```