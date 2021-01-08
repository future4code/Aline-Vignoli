export const accounts: Account[] = [
    {
        client: {
            name: "Márcio Vignoli",
            cpf: "323.232.323-32",
            dateOfBirth: "06-01-1990"
        },
        balance: 900,
        extract: []
    },
    {
        client: {
            name: "Aline Vignoli",
            cpf: "323.232.323-31",
            dateOfBirth: "20-01-1998"
        },
        balance: 1000,
        extract: []
    },
    {
        client: {
            name: "Germana Segte",
            cpf: "323.232.323-32",
            dateOfBirth: "11-11-1996"
        },
        balance: 3000,
        extract: []
    },{
        client: {
            name: "Carmen",
            cpf: "323.232.323-38",
            dateOfBirth: "06-01-1990"
        },
        balance: 580,
        extract: []
    },
];

export type User = {
    name: string,
    cpf: string,
    dateOfBirth: string
};

export type Account = {
    client: User,
    balance: number,
    extract: Transaction[]
};

export type Transaction = {
    value: number,
    date: string,
    description: string
};