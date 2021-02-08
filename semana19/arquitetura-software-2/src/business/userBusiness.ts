import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByPropriety } from "../data/userDatabase";
import { generateToken, getTokenData } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { authenticationData, user, USER_ROLES } from "./entities/user";
import { loginInputDTO, signupInputDTO, stringToUserRole, userProfileOutputDTO } from "../data/model/userModel";
import { task } from "./entities/task";
import { selectTasksByUserId } from "../data/taskDatabase";

export const businessSignup = async (
   input: signupInputDTO
): Promise<string> => {

   if (
      !input.name ||
      !input.nickname ||
      !input.email ||
      !input.password ||
      !input.role
   ) {
      throw new Error('Preencha os campos "name", "nickname", "email", "password" e "role"');
   };

   const id: string = generateId();
   const cypherPassword = hash(input.password);
   const role: USER_ROLES = stringToUserRole(input.role);
   const user: user = {
      id,
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: cypherPassword,
      role
   };

   await insertUser(user);

   const token: string = generateToken({
      id,
      role
   });

   return token;
};

export const businessLogin = async (
   input: loginInputDTO
) => {
   if (!input.email || !input.password) {
      throw new Error("'email' and 'password' required");
   };

   const user: user = await selectUserByPropriety("email", input.email);

   if (!user) {
      throw new Error("User not found");
   }

   const passwordIsCorrect: boolean = compare(input.password, user.password);

   if (!passwordIsCorrect) {
      throw new Error("Incorrect password");
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   });

   return token;
};

export const businessGetUserProfile = async (
   token: string
): Promise<userProfileOutputDTO> => {
   const payload: authenticationData = getTokenData(token);
   const user: user = await selectUserByPropriety("id", payload.id);

   if (!user) {
      throw new Error("User not found");
   };

   const tasks: task[] = await selectTasksByUserId(payload.id);

   const userDTO : userProfileOutputDTO = {
      id: user.id,
      name: user.name,
      email: user.email,
      nickname: user.nickname,
      tasks
   };

   return userDTO;
};