import { input } from "../types/input";
import { USER_ROLES } from "../types/user";

export const checkInputs = (inputs: input[]) => {
    for (let input of inputs) {
        if ( !input.value ) {
            throw new Error(`The input '${input.name}' is required`);
        };
    };
};

export const checkValidRoles = (role: string) : boolean => {
    return role === USER_ROLES.NORMAL || role === USER_ROLES.ADMIN;
};