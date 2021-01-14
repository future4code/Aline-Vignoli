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