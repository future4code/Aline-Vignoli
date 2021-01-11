### Exercício 1
a) Os demais comandos presentes nessa query são: 
**id** que é do tipo `VARCHAR` e poderá ter no máximo 255 caracteres. Esse id será a `PRIMARY KEY`, ou seja, um identificador único, obrigatório e que não poderá variar.

**name** também do tipo `VARCHAR` com no máximo 255 caracteres e aceita o valor nulo.

**birth_date** que é do tipo `DATE`, que representa uma data no formato **YYYY-MM-DD**, não aceitando um valor nulo.

**gender**, do tipo `VARCHAR` com no máximo 6 caracteres e não aceita o valor nulo.

b) O comando `SHOW DATABASES` retorna os bancos de dados. No meu caso, como possuo apenas um, ele retorna o banco de dados *dumount-aline-vignoli*.
Já o comando `SHOW TABLES` mostra as tabelas existentes no banco de dados em uso.

c) Ao utilizar o comando `DESCRIBE Actor` é detalhada a tabela Actor, mostrando informações como o nome da coluna (id, name, etc...), o tipo do dado (varchar, float, etc...), se o campo aceita valor nulo e qual dos campos é a `PRIMARY KEY`.

### Exercício 2
a) A query é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002", 
    "Glória Pires", 
    1200000, 
    "1963-10-23", 
    "female"
);
```

b) A mensagem de erro é:
>Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

O que significa 'Entrada duplicada para chave primária', ou seja, estamos tentando inserir um novo elemento um id (que é está definido como nossa PRIMARY KEY) já existente no banco. Como a PK precisa ser única o banco de dados retorna um erro.

c) A mensagem de erro é:
>Error Code: 1136. Column count doesn't match value count at row 1

O que quer dizer que o número de colunas não é compatível com o número de valores passados. Ou seja, foram passadas na query 3 colunas e 5 valores.

Para corrigir esse erro, basta passar o número correto de colunas, conforme o código abaixo.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);
```

d) A mensagem de erro é:
>Error Code: 1364. Field 'name' doesn't have a default value

O que quer dizer que o campo 'name' não tem um valor padrão, por tanto essa informação deve ser obrigatóriamente passada na *query*.

Para corrigir esse erro, basta apenas informarmos o campo nome e seu valor.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"004",
    "Antonio Fagundes",
	400000,
	"1949-04-18", 
	"male"
);
```

e) A mensagem de erro é:
>Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

Esse erro aparece pois o valor da coluna 'date' está incorreto. O campo 'date' é do tipo `VARCHAR` e o dado que foi passado é do tipo `INT`, por tanto o banco de dados tenta fazer essa operação como se fosse um cálculo, o que resulta no `INT` 1950 e não é aceito por não estar tipado corretamente.

Para corrigir esse erro, basta informar a data entre aspas, e o dado será reconhecido como uma `VARCHAR` ao invés de um `INT`.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
);
```

f) A query é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "006", 
    "Lázaro Ramos",
    7006503,
    "1978-11-01", 
    "male"
),(
    "007", 
    "Taís Araújo",
    8000560,
    "1978-11-25", 
    "female"
);
```

### Exercício 3
a) A query é:
```
SELECT * FROM Actor 
WHERE gender = "female";
```

b) A query é:
```
SELECT salary FROM Actor 
WHERE name = "Tony Ramos";
```

c) O resultado é:
> 0 row(s) returned

Pois nenhum item da nossa tabela correspondeu à condição de busca.

d) A query é:
```
SELECT id, name, salary FROM Actor 
WHERE salary <= 500000;
```

e) A mensagem de erro é:
> Error Code: 1054. Unknown column 'nome' in 'field list'

Coluna 'nome' desconhecida. Isso quer dizer que nossa tabela não possui uma coluna com esse nome. O correto é 'name', por tanto a pesquisa deveria ser:
```
SELECT id, name from Actor 
WHERE id = "002";
```

### Exercício 4
a) A query acima está selecionando todos os dados da tabela **Actor** onde o 'name' começa com 'A' ou 'J' e o salário é maior do que 300000.

b) A query é:
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) A query é:
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d) A query é:
```
SELECT * FROM Actor
WHERE LOWER(name) LIKE LOWER("%A%") 
OR LOWER(name) LIKE LOWER("%G%")
AND salary BETWEEN 35000000 AND 90000000;
```

### Exercício 5
a) A query é:
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rate INT NOT NULL
);
```

A query acima cria uma tabela de filmes, com os seguintes campos:
* **id**, do tipo `VARCHAR` que é a `PRIMARY KEY`.
* **title**, do tipo `VARCHAR` para guardar o nome do filme, não pode receber o valor nulo e deve ser único
* **synopsis** do tipo `TEXT`, não pode receber o valor nulo
* **release_date** do tipo `DATE`, não pode receber o valor nulo
* **rating** do tipo `INT`, não pode receber o valor nulo.

b) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
    "002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
    "004",
    "Bacurau",
    "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.",
    "2019-10-23",
    10
);
```