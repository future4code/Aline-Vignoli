### Exercício 1
a) Uma chave estrangeira é uma forma de relacionar uma tabela com a outra. A FK cria diz que determinada informação da tabela está referenciada, ou seja atrelada, e por isso esse dado depende de outra tabela para existir.

b) As querys são as seguintes:
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