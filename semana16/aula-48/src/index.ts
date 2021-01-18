import express, { Express, Request, Response } from "express";
import connection from './setup/connection';
import cors from "cors";
import { AddressInfo } from "net";
import { searchRecipeInput } from "./types/searchRecipeInput";
import { getAllUsers, getFilteredUsers } from './endpoints/endpoints';

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get("/users/all", getAllUsers);

app.get("/users/search", getFilteredUsers);

app.get("/recipes/all", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result: any = await connection.raw(`
         SELECT title, name AS "author", description
         FROM recipes_aula48
         JOIN users_aula48 
         ON user_id = users_aula48.id;
      `)

      const recipes = result[0]

      if (!recipes.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(recipes)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
});

app.get("/recipes/search", async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const {
         title,
         orderBy = "createdAt",
         orderType = "ASC",
         page = "1"
      } = req.query as searchRecipeInput

      const pageNumber: number = Number(page)

      if (!title) {
         res.statusCode = 422
         throw new Error(`"title" é obrigatório!`)
      }

      if (!["title", "createdAt"].includes(orderBy)) {
         res.statusCode = 422
         throw new Error(`Valores válidos para "orderBy" são "title" e "createdAt"`)
      }

      if (
         orderType !== "ASC" &&
         orderType !== "DESC"
      ) {
         res.statusCode = 422
         throw new Error(`Valores válidos para "orderType" são "ASC" e "DESC"`)
      }

      if (!pageNumber) {
         res.statusCode = 422
         throw new Error(`"page" deve ser um número positivo`)
      }

      const resultsPerPage: number = 6
      const offset: number = resultsPerPage * (pageNumber - 1)

      const recipes: any = await connection
         .select("*")
         .from("recipes_aula48")
         .where("title", "LIKE", `%${title}%`)
         .orderBy(orderBy, orderType)
         .limit(resultsPerPage)
         .offset(offset)

      if (!recipes.length) {
         res.statusCode = 404
         throw new Error("Nenhuma receita encontrada")
      }

      res.send(recipes)

   } catch (error) {
      res.send(error.sqlMessage || error.message)
   }
})

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});