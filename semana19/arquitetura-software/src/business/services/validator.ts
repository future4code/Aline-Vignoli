import { USER_ROLES } from "../entities/user";

export const checkPassword = (password: string) : void => {
    if ( password.length < 6 ) {
        throw new Error("Invalid password, it must be at least 6 characaters in length");
    };
};

export const checkValidRoles = (role: string) : void => {
    if ( role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN ) {
        throw new Error("The valid roles are: 'NORMAL' or 'ADMIN'");
    };
};