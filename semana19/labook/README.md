# LABOOK

## Primeiros Passos

* Clonar este repositório
* Executar `npm install` para adicionar as dependências
* Criar um arquivo .env na raiz do projeto e preencher as chaves a seguir com os valores apropriados:
   ```
   DB_HOST = 
   DB_USER = 
   DB_PASSWORD = 
   DB_NAME = 

   JWT_KEY = 
   JWT_EXPIRES_IN = 

   BCRYPT_COST = 
   ```
* Executar `npm run my-sql-setup` para adicionar as tabelas ao banco de dados (em caso de sucesso, o servidor já estará pronto para receber requisições )

## Endpoints

1. signup
   * Exemplo de requisição:
      ```bash
      curl -i -X POST http://localhost:3003/users/signup -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@gmail.com","password":"pass123"}'
      ```
   * Exemplo de resposta (sucesso):
      ```bash
      HTTP/1.1 201 Created
      X-Powered-By: Express
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Content-Length: 220
      ETag: W/"dc-ec7r4rkKsMBe/V0SGyUkO6Vyto0"
      Date: Tue, 17 Nov 2020 14:33:15 GMT
      Connection: keep-alive

      {"message":"Success!", "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5OGJjNDVlLTExZjEtNGEyMy04OTZhLTdmMmUyOWNmZTAxMiIsImlhdCI6MTYwNTYyMzU5NSwiZXhwIjoxNjA1NzA5OTk1fQ.pWxV2vtLnp0hKm0CXXnLpnDu6PEPkZM27A71oTTCYfE"}%   
      ```
2. login
   * Exemplo de requisição:
      ```bash
      curl -i -X POST http://localhost:3003/users/login -H "Content-Type: application/json" -d '{"email":"alice@gmail.com","password":"pass123"}'
      ```
   * Exemplo de resposta (sucesso):
      ```bash
      HTTP/1.1 200 OK
      X-Powered-By: Express
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Content-Length: 220
      ETag: W/"dc-IBDYVXSmDzdFsqHXhPCAutzNwn8"
      Date: Tue, 17 Nov 2020 14:39:23 GMT
      Connection: keep-alive

      {"message":"Success!","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5OGJjNDVlLTExZjEtNGEyMy04OTZhLTdmMmUyOWNmZTAxMiIsImlhdCI6MTYwNTYyMzk2MywiZXhwIjoxNjA1NzEwMzYzfQ.9JvXRQpazI5k6GAnc1lFcVcTbZ_ElASnwyybU_tRU48"}%   
      ```
3. createPost
   * Exemplo de requisição:
      ```bash
      curl -i -X POST http://localhost:3003/posts/create -H "Content-Type: application/json" -H "authorization:$token" -d '{"photo":"https://i.picsum.photos/id/238/200/200.jpg?hmac=O4Jc6lqHVfaKVzLf8bWssNTbWzQoaRUC0TDXod9xDdM","description":"My city is beautiful =D","type":"normal"}'
      ```
   * Exemplo de resposta (sucesso):
      ```bash
      HTTP/1.1 201 Created
      X-Powered-By: Express
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Content-Length: 22
      ETag: W/"16-ChcZhlw1slqtGuDwxLsUclql5gE"
      Date: Tue, 17 Nov 2020 14:47:15 GMT
      Connection: keep-alive

      {"message":"Success!"}%    
      ```
3. getPostById
   * Exemplo de requisição:
      ```bash
      curl -i GET http://localhost:3003/posts/$id -H "Content-Type: application/json" -H "authorization:$token" 
      ```
   * Exemplo de resposta (sucesso):
      ```bash
      HTTP/1.1 200 OK
      X-Powered-By: Express
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Content-Length: 322
      ETag: W/"142-IYRwCODXZBltXE3MydHuIDB8M3w"
      Date: Tue, 17 Nov 2020 14:52:19 GMT
      Connection: keep-alive

      {"message":"Success!","post":{"id":"e4eb1531-d814-4742-b614-be2a36602548","photo":"https://i.picsum.photos/id/238/200/200.jpg?hmac=O4Jc6lqHVfaKVzLf8bWssNTbWzQoaRUC0TDXod9xDdM","description":"My city is beautiful =D","type":"normal","createdAt":"2020-11-17T17:47:15.000Z","authorId":"898bc45e-11f1-4a23-896a-7f2e29cfe012"}}% 
      ```
4. addFriend
   * Exemplo de requisição:
      ```bash
      curl -i PUT http://localhost:3003/users/friendship/$id -H "Content-Type: application/json" -H "authorization:$token" 
      ```
   * Exemplo de resposta (sucesso):
      ```bash
      HTTP/1.1 200 OK
      X-Powered-By: Express
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Content-Length: 38
      ETag: W/"26-FRG92jk/IDv4fDHb8n2wbljn+Xw"
      Date: Fri, 05 Feb 2021 20:07:12 GMT
      Connection: close

      {"message": "Friend added successfuly"} 
      ```    
5. removeFriend
   * Exemplo de requisição:
      ```bash
      curl -i DELETE http://localhost:3003/users/friendship/$id -H "Content-Type: application/json" -H "authorization:$token" 
      ```
   * Exemplo de resposta (sucesso):
      ```bash
      HTTP/1.1 200 OK
      X-Powered-By: Express
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Content-Length: 40
      ETag: W/"28-p/Q+JvLS79xP5hajp1hbgqiqxTM"
      Date: Fri, 05 Feb 2021 20:10:39 GMT
      Connection: close

      {"message": "Friend removed successfuly"} 
      ```      

5. getPosts
   * Exemplo de requisição:
      ```bash
      curl -i GET http://localhost:3003/posts/feed -H "Content-Type: application/json" -H "authorization:$token" 
      ```
   * Exemplo de resposta (sucesso):
      ```bash
      {"posts":[{"id":"25a2dc30-86f0-42f7-af90-1c323b95d7fc","photo":"Terceiro Post da Amiga da Aline","description":"Descrição do post dela","type":"event","createdAt":"2021-02-05T16:30:34.000Z","authorId":"77a5f772-cb00-4bf9-9d8a-7227cd88cbc8"},{"id":"12ab0792-e0c7-41ad-b810-f3a0d69406a6","photo":"Segundo Post da Amiga da Aline","description":"Descrição do post dela","type":"event","createdAt":"2021-02-05T16:30:21.000Z","authorId":"77a5f772-cb00-4bf9-9d8a-7227cd88cbc8"},{"id":"564f711e-0341-4c1a-a12b-9d5fd1044691","photo":"Post da Amiga da Aline","description":"Descrição do post dela","type":"normal","createdAt":"2021-02-05T16:29:56.000Z","authorId":"77a5f772-cb00-4bf9-9d8a-7227cd88cbc8"}]} 
      ```