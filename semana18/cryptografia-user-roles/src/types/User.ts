export enum USER_ROLES {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
};

export type User = {
    id: string, 
    name: string,
    nickname: string,
    email: string,
    password: string,
    role?: USER_ROLES
};

export const toUserModel = (obj: any): User => {
    const user: User = {
        id: obj.id,
        name: obj.name,
        nickname: obj.nickname,
        email: obj.email,
        password: obj.password,
        role: obj.role
    };

    return user;
};