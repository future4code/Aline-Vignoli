### Exercício 1
a) Interface User:
```
export interface User {
    name: string,
    balance: number
};
```

b) Função performPurchase:
```
export const performePurchase = (user: User, value: number) 
: User | undefined => {
    if (user.balance >= value) {
        return {
            ...user, 
            balance: user.balance - value
        };
    };
    return undefined;
};
```

### Exercício 2
b) Função verifyAge:
```
export const verifyAge = (
    casino: Casino, 
    users: User[]
): Result => {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            user.age >= 21 ?
            allowed.push(user) :
            unallowed.push(user);

        } else if (casino.location === LOCATION.BRAZIL) {
            user.age >= 18 ?
            allowed.push(user) :
            unallowed.push(user);
            break;
        };
    };

    const brazilians: ResultItem = {
        allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name),
        unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name)
    };

    const americans: ResultItem = {
        allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name),
        unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name)
    };

    return { brazilians, americans };
};
```

c) Resposta:
O mais difícil foi pensar em como organizar a ordem das verificações.
Tive dúvidas se deveria primeiro montar um array de allowed e outro de unallowed ou se deveria primeiro montar um array de brazilians e outro de americans.