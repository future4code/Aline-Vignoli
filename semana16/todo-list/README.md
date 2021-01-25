## Instruções

* `npm install`:
Instala as dependências do projeto.

### Criar o arquivo .env
Criar o arquivo `.env` com as informações do seu banco de dados.
```
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

### Criar e popular as tabelas
* `npm run set-tables`:
Cria as tabelas necessárias para o projeto.

* `npm run populate`:
Popula a tabela de usuários com dados iniciais.

### Executar o projeto

* `npm run start`: 
Inicia a conexão com o banco de dados e roda o projeto.
Precisa dar o comando `ctrl + C` para parar a execução.

* `npm run dev`:
Reinicia o servidor automaticamente toda a vez que o projeto for salvo.