import express from "express";
import { AddressInfo } from "net";
import { signup } from './endpoints/signup';
import { login } from './endpoints/login';
import { getUserProfile } from "./endpoints/getUserProfile";
import { removeUser } from "./endpoints/removeUser";
import { getUserById } from "./endpoints/getUserById";

// Express settings
const app = express();
app.use(express.json());

app.get('/user/profile', getUserProfile);
app.get('/user', getUserById);
app.post('/user/signup', signup);
app.post('/user/login', login);
app.delete('/user/:id', removeUser);


// Server settings
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});