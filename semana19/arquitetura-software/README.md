# Arquitetura de Software

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

### Criar tabela
* `npm run tables`:
Cria a tabela User_Arq'

### Executar o projeto

* `npm run dev`:
Executa o projeto e reinicia o servidor automaticamente toda a vez que o projeto for salvo.

---

## ESTRUTURA DE DADOS  
  
* ## Users
  * id
  * name
  * email
  * password
  * role (`NORMAL` ou `ADMIN`)
   
---

## ENDPOINTS 

* ### signup
  * Método: PUT
  * Path: `/signup`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório -> deve ter 6 ou mais caracteres)
    * role (obrigatório -> `NORMAL` ou `ADMIN`)
  * Body de Resposta: (retornar um erro se algum campo estiver faltando)
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyNzg1NjUyLTdjNTQtNGFmZz04MjliLWI5ODQ3YTkxOTcwZCIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2MTIyMDc5NTYsImV4cCI6MTYxMjI5NDM1Nn0.0cpN1oMr1V3LfsKfDqe--XAMw9JMzMqUOJt-AYkLBMt"
    }
    ```  

* ### login
  * Método: POST
  * Path: `/login`
  * Body:
    * email (obrigatório)
    * password (obrigatório)
  * Body de Resposta: (retornar um erro se algum campo estiver faltando ou se a senha estiver incorreta)
    ```json
    {
      "token": "eyJhbGciOiJIezI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyNzg1NjUyLTdjNTQtNGFmZz04MjliLWI5ODQ3YTkxOTcwZCIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2MTIyMDc5NTYsImV4cCI6MTYxMjI5NDM1Nn0.0cpN1oMr1V3LfsKfDqe--XAMw9JMzMqUOJt-AYkLBMt"
    }
    ```

* ### getAllUsers
  * Método: POST
  * Path: `/all`
  * Headers: token de acesso
  * Body de Resposta:
    ```json
    {
      "users": [
        {
          "id": "9aef1760-29aa-49a0-91e3-574ca1192c50",
          "name": "Aline Vignoli",
          "email": "aline@gmail.com",
          "password": "$2a$12$dBt8Syzw5hjUmvGvTqVFeuSWEsfhXTn8GOTwsfY2uOv.UdnhHsILO",
          "role": "ADMIN"
        },
        {
          "id": "9e067c80-15c9-422e-b408-3e0f6d3d9c4d",
          "name": "New User",
          "email": "nuser@gmail.com",
          "password": "$2a$12$dYuslmfPvsGgbPdGAudFxeILIKCHds0QCwLG5Kk2RMLJGCzCZaFEK",
          "role": "NORMAL"
        }
      ]
    }
    ```  

* ### removeUser
  * Método: DELETE
  * Path: `/:id`
  * Headers: token de acesso (precisa ser `ADMIN`)
  * Body de Resposta: (retornar um erro se não não for `ADMIN` ou se não encontrar o usuário para remover)
    ``` json
    {
      "message": "User deleted successfuly"
    }
    ```