### Exercício 1
a) Essa query está deletando a coluna `salary`.

b) Essa query está alterando o nome da coluna `gender` para `sex`, com o tipo `VARCHAR(6)` com no máximo 6 caracteres, e sem constraints.

c) Essa query está alterando o número máximo de caracteres da `VARCHAR(6)`, na coluna `gender`, para um limite de 255 caracteres(`VARCHAR(255)`).

d) A query é:
```
ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a) A query é:
```
UPDATE Actor
SET name = "Antonio F.", birth_date = "1970-01-01"
WHERE id = 3;
```

b) A query é:
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

*Obs: Para atualizar dessa forma é precisa desabilitar o Safe Update*

c) A query é:
```
UPDATE Actor
SET 
	name = "Moacyr Francis",
    salary = 3000090,
    birth_date = "1980-09-23",
    gender = "male"
WHERE id = 5;
```

d) O resultado é:
> 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Como o banco não encontrou esse id, nada foi alterado na tabela.

### Exercício 3
a) A query é:
```
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```

b) A query é:
```
DELETE FROM Actor
WHERE gender = "male"
AND salary > 100000000;
```

*Obs: Para essa consulta, desabilitar o Safe Update*

### Exercício 4
a) A query é:
`SELECT MAX(salary) FROM Actor;`

b) A query é:
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c) A query é:
```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```

d) A query é:
`SELECT SUM(salary) FROM Actor;`

### Exercício 5
a) A função `COUNT(*)` vai contar os elementos que foram agrupados através do `GROUP BY` por uma característica em comum.

b) A query é:
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c) A query é:
```
SELECT * FROM Actor
ORDER BY salary;
```

d) A query é:
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e) A query é:
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6
a) A query é:
```
ALTER TABLE Movie
ADD playing_limit_date DATE DEFAULT(CURDATE());
```

b) A query é:
```
ALTER TABLE Movie
CHANGE rating rating FLOAT DEFAULT(0.0);
```

c) As queries são:
```
UPDATE Movie
SET playing_limit_date = "2021-01-20"
WHERE id = "004";
```

```
UPDATE Movie
SET playing_limit_date = "2021-01-04"
WHERE id = "001";
```

d) A query é:
` DELETE FROM Movie WHERE id = "001";`

O resultado é:
> 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Como o id não foi encontrado, a alteração não afeta a tabela.

### Exercício 7
a) A query é:
```
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5;
```

O número de filmes é: 3

b) A query é:
`SELECT AVG(rating) FROM Movie;`

A média é: 8.75

c) A query é:
```
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date > CURDATE();
```

A quantidade de filmes em cartaz é: 1

d) A query é:
```
SELECT COUNT(*) FROM Movie
WHERE release_date > CURDATE();
```

A quantidade de filmes que ainda irão lançar é: 0

e) A query é:
`SELECT MAX(rating) FROM Movie;`

A maior nota é: 10

f) A query é:
`SELECT MIN(rating) FROM Movie;`

A menor nota é: 7

### Exercício 8
a) A query é:
`SELECT * FROM Movie ORDER BY title;`

b) A query é:
```
SELECT * FROM Movie
ORDER BY title
LIMIT 5;
```

c) A query é:
```
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

d) A query é:
```
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```