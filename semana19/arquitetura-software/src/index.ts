import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { login, signup } from './controller/userController';

const app = express();
app.use(express.json());
app.use(cors());

app.put('/signup', signup);
app.post('/login', login);

const server = app.listen(process.env.PORT || 3000, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   };
});