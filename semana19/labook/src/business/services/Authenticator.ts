import * as jwt from "jsonwebtoken";

export type AuthenticationData = {
    id: string
};

export class Authenticator {
    
    public static generateToken(
        payload: AuthenticationData
    ): string {
        return jwt.sign(
           payload,
           process.env.JWT_KEY as string,
           {
              expiresIn: process.env.JWT_EXPIRE_TIME
           }
        );
    };
     
    public static getTokenData(
        token: string
    ): AuthenticationData {
        const result: any = jwt.verify(
           token,
           process.env.JWT_KEY as string
        );
     
        return { id: result.id, };
    };
};