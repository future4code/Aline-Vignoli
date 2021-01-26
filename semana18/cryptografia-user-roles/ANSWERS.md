### Exercício 1
a) `round` seria o número de "rodadas" utilizadas para encriptar uma senha, por exemplo. Quanto maior o round, mais demorado será o processo de codificação, mas também mais seguro.
`salt` é uma string aleatória que é gerada pelo bcrypt e adicionada a string de entrada, baseada no número de `rounds` passado como parâmetro.
O valor recomendado para `round` é de 12. Eu utilizei o valor recomendado pois é um bom equilibrio entre um tempo rápido de processamento e uma segurança efetiva do `hash`.

b) Função para cryptografar:
```
export const hash = (plainText: string): string => {
    const cost: number = Number(process.env.BCRYPT_COST);
    const salt: string = bcrypt.genSaltSync(cost);
    const cypherText: string = bcrypt.hashSync(plainText, salt);

    return cypherText;
};
```

c) Função para comparar string e hash:
```
export const compare = (
    plainText: string,
    cypherText: string
): boolean => {
    return bcrypt.compareSync(plainText, cypherText);
};
```

### Exercício 2

### Exercício 3

### Exercício 4

### Exercício 5

### Exercício 6