export const users: User[] = [
    {
        name: "Aline Vignoli",
        cpf: "323.232.323-31",
        dateOfBirth: "20-01-1998",
        transactions: []
    },
    {
        name: "Germana Segte",
        cpf: "323.232.323-32",
        dateOfBirth: "11-11-1996",
        transactions: []
    },
    {
        name: "Márcio Vignoli",
        cpf: "323.232.323-32",
        dateOfBirth: "06-01-1990",
        transactions: []
    }
]

export type User = {
    name: string,
    cpf: string,
    dateOfBirth: string,
    transactions: Transaction[]
}

export type Account = {
    client: User,
    balance: number,
    extract: Transaction[]
}

export type Transaction = {
    value: number,
    date: number,
    description: string
}