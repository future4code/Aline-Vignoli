import express from "express";
import { AddressInfo } from "net";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getLoggedUser } from "./endpoints/getLoggedUser";
import { getUserProfile } from "./endpoints/getUserProfile";

const app = express();
app.use(express.json());

app.get('/user/profile', getLoggedUser);
app.get('/user/:id', getUserProfile);
app.post('/signup', signup);
app.post('/login', login);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});