export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
};

export enum NACIONALITY {
    AMERICAN = "AMERICAN",
    BRAZILIAN = "BRAZILIAN"
};

export interface User {
    name: string,
    age: number,
    nacionality: NACIONALITY
};

export interface Casino {
    name: string,
    location: LOCATION
};

export interface Result {
    brazilians: ResultItem,
    americans: ResultItem
};

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
};

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