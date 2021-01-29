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

### Criar as tabelas
* `npm run tables`:
Cria as tabelas 'Cookenu_User', 'Cookenu_Recipe', 'Cookenu_User_Following' e 'Cookenu_User_Followers'

### Executar o projeto
* `npm run start`: 
Inicia a conexão com o banco de dados e roda o projeto.

*OU*

* `npm run dev`:
Executa o projeto e reinicia o servidor automaticamente toda a vez que o projeto for salvo.

## ENDPOINTS 

* ### signup
  * Método: POST
  * Path: `/user/signup`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório)
    * role (`ADMIN` ou `NORMAL`)


* ### login
  * Método: POST
  * Path: `/user/login`
  * Body:
    * email (obrigatório)
    * password (obrigatório)   

* ### getLoggedUser
  * Método: GET
  * Path: `/user/profile`
  * Headers: Authorization (token de acesso)
  * Body de Resposta: (retornar um erro se não encontrar)
    * user {
      * id
      * name
      * email
    }

* ### getUserProfile
  * Método: GET
  * Path: `/user/:id`
  * Path params: `id`
  * Headers: Authorization (token de acesso)
  * Body de Resposta: (retornar um erro se não encontrar)
    * user {
      * id
      * email
      * role
    }

* ### createRecipe
  * Método: POST
  * Path: `/recipe`
  * Headers: Authorization (token de acesso)
  * Body:
    * title (obrigatório)
    * description (obrigatório)
  * Body de Resposta: (retornar um erro algum campo estiver faltando)
    * Recipe created successfuly!  

* ### getRecipeById
  * Método: GET
  * Path: `/recipe/:id`
  * Path params: `id`
  * Headers: Authorization (token de acesso)
  * Body de Resposta: (retornar um erro se não encontrar a receita)
    {
      * id
      * title
      * description
      * createdAt
    }    

* ### followUser
  * Método: POST
  * Path: `/user/follow`
  * Headers: Authorization (token de acesso)
  * Body:
    * userToFollowId (obrigatório)
  * Body de Resposta: (retornar um erro se não encontrar o usuário)
    * Followed successfuly! 

* ### unfollowUser
  * Método: POST
  * Path: `/user/unfollow`
  * Headers: Authorization (token de acesso)
  * Body:
    * userToUnfollowId (obrigatório)
  * Body de Resposta: (retornar um erro se não encontrar o usuário)
    * Unfollowed successfuly!    

* ### getAllRecipes
  * Método: GET
  * Path: `/user/feed`
  * Headers: Authorization (token de acesso)
  * Body de Resposta: (retornar um mensagem se não existir nenhuma receita)
    [
      {
      * id
      * title
      * description
      * createdAt
      * userId
      * userName
      },
      {
      * id
      * title
      * description
      * createdAt
      * userId
      * userName
      }
    ]
        