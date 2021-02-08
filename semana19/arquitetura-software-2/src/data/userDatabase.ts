import { connection } from "./connection"
import { user } from "../business/entities/user"
import { toUserModel } from "./model/userModel";

export const insertUser = async(
   user: user
): Promise<void> => {
   await connection.insert({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      password: user.password,
      role: user.role
   }).into('to_do_list_users');
};

export const selectUserByPropriety = async (
   name: string,
   value: string
): Promise<user> => {
   try {
      const result = await connection("to_do_list_users")
         .select("*")
         .where( name, "=", value);

      return toUserModel(result[0]);

   } catch (error) {
      throw new Error(error.slqMessage || error.message);
   };
};