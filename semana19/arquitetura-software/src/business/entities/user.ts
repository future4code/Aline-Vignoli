export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
};
 
export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
};

export type authenticationData = {
    id: string,
    role: USER_ROLES
};

export type input = {
    name: string,
    value: string
};

export const toUserModel = (object: any) : user => {
    const userModel: user = {
        id: object.id,
        name: object.name,
        email: object.email,
        password: object.password,
        role: object.role
    };

    return userModel;
};