## Instruções
### Instalando as dependências:
* `npm install`:
instala todas as dependências listadas no `package.json`.

### Criando a tabela:
* `npm run set-table`:
Cria a tabela de usuários.

### Populando a tabela:
* `npm run populate`:
Popula a tabela com dados de usuários.

### Executar o projeto:
* `npm run start`:
Executa o projeto no servidor `localhost`.

* `npm run dev`:
Reinicia automaticamente o servidor `localhost` toda a vez que o projeto for salvo.

### Endpoints:
#### getAllUsers
* Method: `GET`
* Path:`/users/all`
* Retorna todos os usuários.

#### getFilteresUsers
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