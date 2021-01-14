### Exercício 1
a) Uma chave estrangeira é uma forma de relacionar uma tabela com a outra. A FK cria diz que determinada informação da tabela está referenciada, ou seja atrelada, e por isso esse dado depende de outra tabela para existir.

b) As queries são as seguintes:
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) VALUES 
(
    '0001', 
    'Filme legal, mas nada muito impressionante', 
    6, 
    '001'
),
(
    '0002', 
    'Amei demais! Super divertido', 
    10, 
    '002'
),
(
    '0003', 
    'Interessante', 
    8, 
    '003'
),
(
    '0004', 
    'Um dos melhores filmes nacionais, um choque de realidade.', 
    10, 
    '004'
),
(
    '0005', 
    'Filme sensacional, vale muito à pena assistir, mas se prepare porque é pesado', 
    10, 
    '004'
);
```

c) O resultado é:
> Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-aline-vignoli`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Ou seja, não é possível adicionar ou atualizar pois a foreign key está fazendo referência ao id do filme, e essa informação precisa ter correspondência da tabela Movie. 
Quando esse id não é encontrado, é retornada uma mensagem de erro.

d) A query é:
`ALTER TABLE Movie DROP COLUMN rating;`

e) O resultado é:
> Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-aline-vignoli`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

O resultado é parecido com o erro acima, porém agora não é possível deletar ou atualizar a tabela que é 'pai' da referência à foreign key. 
Para deletar esse filme, seria necessário deletar as referências à ele, nesse caso a avaliação que está relacionada à ele.

### Exercício 2
a) Essa tabela está relacionando Filmes e Atores. No caso ela irá pegar o id de um filme e relacionar à cada ator que participa desse filme. Como vários atores podem participar do mesmo filme, e um mesmo ator pode participar de vários filmes essa relação é uma N:M.

b) As queries são:
```
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
    actor_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id) VALUES
('001', 1), 
('001', 8), 
('002', 9), 
('002', 10), 
('003', 11), 
('003', 12), 
('003', 13),
('004', 11),
('004', 14),
('004', 15);
```

c) A mensagem de erro retornada é:
> Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-aline-vignoli`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Pois o id do filme ou do ator não foi encontrado no banco de dados, e essa tabela está relacionando id's de filmes e atores.

d) A mensagem de erro retornada é:
> Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-aline-vignoli`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Pois para deletar esse ator precisamos antes deletar toda e qualquer tabela que esteja usando seu id como referência.

### Exercício 3
a) A query está buscando todas as informações dos filmes e relacionando com as avaliações de cada um dos filmes. 
O operador `ON` coloca a condição para a junção das tabelas.

b) A query é:
```
SELECT Movie.id, title, rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercício 4
a) A query é:
```
SELECT Movie.id, title, rate, comment FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id;
```

b) A query é:
```
SELECT Movie.id as movie_id, title, MovieCast.actor_id as actor_id
FROM Movie
RIGHT JOIN MovieCast
ON Movie.id = MovieCast.movie_id;
```

c) A query é:
```
SELECT Movie.id as movie_id, title, AVG(Rating.rate) as rate 
FROM Movie
LEFT JOIN Rating 
ON Movie.id = Rating.movie_id 
GROUP BY Movie.id;
```

### Exercício 5
a) Essa query está pegando a tabela de filmes, juntando com a tabela de elenco e em seguida juntando com a tabela de atores. Precisamos usar dois `JOIN` para poder exibir as informações das 3 tabelas.

b) A query alterada ficaria assim:
```
SELECT m.id as movie_id, m.title, mc.actor_id as actor_id, a.name as actor_name 
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) A mensagem de erro retornada é:
> Error Code: 1054. Unknown column 'm' in 'field list'

Tem uma vírgula separando `m,title` e o SQL entende como sendo uma nova coluna. Então o retorno é que a coluna não existe. Para resolver esse problema devemos corrigir dessa forma: `m.title`.

d) A query é:
```
SELECT 
    Movie.id as movie_id, 
    Movie.title, 
    Actor.id as actor_id,
    Actor.name as actor_name, 
    rate, 
    comment 
FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON MovieCast.actor_id = Actor.id;
```

### Exercício 6
a) Essa é uma relação do tipo N:M, pois um filme pode ganhar tanto *Óscar de melhor filme* com *Óscar de melhor direção*. Ao mesmo tempo que um *Óscar de melhor filme* e *Óscar de melhor direção* pode ser dado para mais de um filme, desde que o ano seja diferente.

b) A query é:
```
CREATE TABLE MovieOscar (
	movie_id VARCHAR(255),
	name ENUM(
		'Óscar de melhor filme', 
        'Óscar de melhor direção', 
        'Óscar de melhor roteiro',
        'Óscar de melhor figurino'
	),
    award_date DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

c) A query é:
```
INSERT INTO MovieOscar (movie_id, name, award_date) 
VALUES 
(
	'001',
    'Óscar de melhor direção',
    '2007-10-02'
),(
	'002',
    'Óscar de melhor filme',
    '2013-06-06'
),
(
	'002',
    'Óscar de melhor direção',
    '2013-06-06'
),
(
	'003',
    'Óscar de melhor filme',
    '2018-11-06'
),
(
	'003',
    'Óscar de melhor direção',
    '2018-11-06'
),
(
	'004',
    'Óscar de melhor filme',
    '2020-11-20'
),
(
	'004',
    'Óscar de melhor direção',
    '2020-11-20'
),
(
	'004',
    'Óscar de melhor roteiro',
    '2020-11-20'
);
```

d) A query é:
```
SELECT m.id as movie_id, m.title, mo.name as award, mo.award_date 
FROM Movie m
LEFT JOIN MovieOscar mo
ON m.id = mo.movie_id;
```