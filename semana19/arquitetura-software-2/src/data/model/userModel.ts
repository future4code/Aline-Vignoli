import { task } from "../../business/entities/task";
import { USER_ROLES } from "../../business/entities/user";

export type signupInputDTO = {
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: string
};

export type userProfileOutputDTO = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    tasks: task[]
};

export const userRoleToString = (role: USER_ROLES)
: string => {
    return role.toUpperCase() === USER_ROLES.ADMIN ? "ADMIN" : "NORMAL";
};

export const stringToUserRole = (role: string)
: USER_ROLES => {
    if ( role.toUpperCase() === "ADMIN") {
        return USER_ROLES.ADMIN;
    } else if ( role.toUpperCase() === "NORMAL") {
        return USER_ROLES.NORMAL;
    };

    throw new Error("The valid values for user roles are 'NORMAL' ou 'ADMIN'");
};