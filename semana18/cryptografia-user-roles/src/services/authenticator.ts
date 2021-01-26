import * as jwt from "jsonwebtoken";

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
    const payload = jwt.verify(token, process.env.JWT_KEY!);
    return payload as AuthenticationData;
};

export type AuthenticationData = {
    id: string,
};