import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getAllUsers, getFilteredUsers, getOrderedUsers, getUsers, getUsersByType, getUsersPagination } from './endpoints/endpoints';

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get("/users/all", getAllUsers);

app.get("/users/search/name", getFilteredUsers);

app.get("/users/search/type", getUsersByType);

app.get("/users/all/order", getOrderedUsers);

app.get("/users/page", getUsersPagination);

app.get("/users/search", getUsers);


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});