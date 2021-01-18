import { recipe } from "./recipe"

export type user = {
   id: string,
   name: string,
   email: string,
   recipes: recipe[],
   password: string
}
