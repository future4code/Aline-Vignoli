# Arquitetura de Software

## ESTRUTURA DE DADOS  
  
* ## Users
  * id
  * name
  * email
  * password
  * role (`NORMAL` ou `ADMIN`)
   
---

## TABELAS - MySQL

```sql
CREATE TABLE User_Arq(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	role ENUM ("ADMIN", "NORMAL") DEFAULT "NORMAL"
);
```

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