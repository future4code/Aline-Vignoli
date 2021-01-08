import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

// EXPRESS AND CORS ACTVATION
const app: Express = express();

app.use(express.json());
app.use(cors());


// SERVER SETTINGS
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon start server.`);
    }
});