### Exercício 1
a) A resposta é um RowDataPacket com um objeto que contém as informações do actor ou da atriz com id correspondente ao que passamos como parâmetro.

b) Função para buscar atores/atrizes pelo nome:
```
const getActorByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}";
        `);
        return result[0][0];
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};
```

c) Função que conta atores/atrizes pelo gênero:
```
const countActorsByGender = async (gender: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) as total FROM Actor WHERE gender = "${gender}";
        `);
        const total = result[0][0].total;
        return total;
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};
```

### Exercício 2
a) Função para atualizar salário:
```
const updateSalary = async (
    id: number, 
    salary: number
) : Promise<void> => {
    try {
        await connection("Actor")
        .update({ salary: salary })
        .where("id", id);
        console.log(`Salario alterado`);
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    };
};
```

b) Função para deletar ator/atriz:
```
const deleteActor = async (id: number) : Promise<void> => {
    try {
        await connection("Actor")
        .where("id", id)
        .del();
        console.log(`Ator removido`);
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    };
};
```

c) Função que retorna a média de salários por gênero:
```
const averageByGender = async (gender: string): Promise<any> => {
    try {
        const result = await connection("Actor")
        .avg("salary as average")
        .where("gender", gender);
        return result[0].average;
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};
```