import express, {Express, Request, Response} from "express";
import cors from "cors";
import {countries, country} from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

// ENDPOINT getAllCountries
app.get("/countries/all", (req: Request, res: Response) => {

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }));

    res
        .status(200)
        .send(result);
});

// ENDPOINT getCountryById
app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    );

    if (result){
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    };
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});