import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../types/User";

export const generateToken = (
    payload: AuthenticationData
): string => {

    const token: string = jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRE_TIME}
    );

    return token;
};

export const getData = (token: string): AuthenticationData => {
    const { id, role } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData;

    return { id, role };
};

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
};