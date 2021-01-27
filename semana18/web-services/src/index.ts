import express from "express";
import { AddressInfo } from "net";
import { signup } from './endpoints/signup';
import { login } from './endpoints/login';
import { getUserProfile } from "./endpoints/getUserProfile";
import { removeUser } from "./endpoints/removeUser";
import { getUserById } from "./endpoints/getUserById";
import { getAddressInfo } from "./endpoints/getAddressInfo";
import { sendMail } from "./endpoints/sendMail";

// Express settings
const app = express();
app.use(express.json());

// Endpoints
app.get('/user/profile', getUserProfile);
app.get('/user', getUserById);
app.post('/user/signup', signup);
app.post('/user/login', login);
app.delete('/user/:id', removeUser);

app.get('/address/:cep', getAddressInfo);

app.post('/mail', sendMail);


// Server settings
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});