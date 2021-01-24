## Instruções
### Instalando as dependências:
* `npm install`:
Instala todas as dependências listadas no `package.json`.

### Criando o arquivo .env:
Criar o arquivo `.env` e configurar com as informações de seu banco de dados.
```
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

### Criando a tabela:
* `npm run set-table`
Cria a tabela de usuários.
*Esse script deve ser executado apenas uma única vez*

### Populando a tabela:
* `npm run populate`
Popula a tabela com dados de usuários.
*Esse script deve ser executado apenas uma única vez*

### Executar o projeto:
* `npm run start`
*Estabelece a conexão com o banco de dados e executa o projeto no servidor `localhost`.*
É necessário executar esse comando toda a vez que algum dos arquivos sofrer alteração.

* `npm run dev`:
Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

### Endpoints:
#### getAllUsers
* Method: `GET`
* Path:`/users/all`
* Retorna todos os usuários.

#### getFilteredUsers
* Method: `GET`
* Path:`/users/search/name`
* PathParams: `/users/search/name?name=value`
* Retorna todos os usuários filtrados por nome.

#### getUsersByType
* Method: `GET`
* Path:`/users/search/type`
* PathParams: `/users/search/type?type=value`
* Retorna todos os usuários filtrados por *tipo*.

#### getOrderedUsers
* Method: `GET`
* Path:`/users/all/order`
* PathParams: `/users/all/order?orderBy=name&orderType=ASC`
* Retorna todos os usuários ordenados por *nome* ou *tipo* em ordem *crescente* ou *decrescente*.

#### getUsersPagination
* Method: `GET`
* Path:`/users/page`
* PathParams: `/users/page?page=1`
* Retorna todos os usuários em grupos de 5.

#### getUsers
* Method: `GET`
* Path:`/users/search`
* PathParams: `/users/search?name=Nome&orderBy=name&orderType=ASC&page=2`
* Retorna todos os usuários da página informada, filtrados por *nome* ou *tipo*, ordenados por *nome* ou *tipo* em ordem *crescente* ou *decrescente* e em grupos de 5.