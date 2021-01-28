export enum USER_ROLES{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
};

export type user = {
   id: string,
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
};

export const toUserModel = (object: any) : user => {
   const user = {
      id: object.id,
      name: object.name,
      email: object.email,
      password: object.password,
      role: object.role
   };

   return user;
};