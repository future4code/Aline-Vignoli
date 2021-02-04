import { User } from "../../business/entities/User"

export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
};

export interface LoginInputDTO {
    email: string,
    password: string
};

export const toUserModel = (obj: any) => {
    return obj && new User(
        obj.id,
        obj.name,
        obj.email,
        obj.password
    );
};