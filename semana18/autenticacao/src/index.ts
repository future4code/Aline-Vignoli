import express from "express";
import { AddressInfo } from "net";
import { signup } from './endpoints/signup';
import { login } from './endpoints/login';
import { getLoggedUser } from "./endpoints/getLoggedUser";

// Express settings
const app = express();
app.use(express.json());

app.get('/user', getLoggedUser);
app.post('/user/signup', signup);
app.post('/user/login', login);


// Server settings
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});