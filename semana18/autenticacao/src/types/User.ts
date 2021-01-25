export type User = {
    id: string, 
    name?: string,
    nickname?: string,
    email: string,
    password: string
};

export const toUserModel = (obj: any): User => {
    const user: User = {
        id: obj.id,
        name: obj.name,
        nickname: obj.nickname,
        email: obj.email,
        password: obj.password
    };

    return user;
};