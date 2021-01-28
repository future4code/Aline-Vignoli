import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../types/user";

export function generateToken(
   payload: AuthenticationData
): string {

   const token: string = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      { expiresIn: "1y" }
   );

   return token;
}

export function getTokenData(token: string): AuthenticationData {
   const payload = jwt.verify(
      token,
      process.env.JWT_KEY!
   ) as AuthenticationData

   return {
      id: payload.id,
      role: payload.role
   }
}

export type AuthenticationData = {
   id: string,
   role: USER_ROLES
}
