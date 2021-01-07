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

    res.status(200).send(result);
});

// ENDPOINT searchCountry
app.get("/countries/search", (req: Request, res: Response) => {     
    if (
        !req.query.name &&
        !req.query.capital &&
        !req.query.continent
    ) {
        res.status(404).send("Nenhum parâmetro de busca foi informado!")
    } else {
        let result: country[] = countries;

        if (req.query.name) {
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            );
        };

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes(req.query.capital as string)
            );
        };

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes(req.query.continent as string)
            );
        };

        if (result.length) {
            res.status(200).send(result);
        } else {
            res.status(404).send("Not found");
        };
    };
});

// ENDPOINT getCountryById
app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    );

    if (result){
        res.status(200).send(result);
    } else {
        res.status(404).send("Not found");
    };
});

// ENDPOINT editCountry
app.put("/countries/edit/:id", (req: Request, res:Response) => {
    let errorCode: number = 400;

    try {
        const {name, capital} = req.body;
        const index : number = countries.findIndex(
            country => country.id === Number(req.params.id)
        );

        if (index === -1){
            errorCode = 404;
            throw new Error("Id inválido");
        };

        if (!name){
            errorCode = 400;
            throw new Error("Nome não foi informado");
        };
    
        if (!capital){
            errorCode = 400;
            throw new Error("Capital não foi informada");
        };

        countries[index].name = name;
        countries[index].capital = capital;
        res.status(200).send(req.body);
    } catch (error) {
        console.log(error);
        res.status(errorCode).send(error.message);
    };  
});

// ENDPOINT deleteCountry
app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        if(!req.headers.authorization){
            errorCode = 401;
            throw new Error("Não autorizado");
        };

        if(req.headers.authorization.length < 10){
            errorCode = 400;
            throw new Error("A autorização deve ter no mínimo 10 caracteres")
        };

        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        );
   
        if(countryIndex === -1){
            errorCode = 404;
            throw new Error("Id inválido");
        };
   
        countries.splice(countryIndex, 1);
        res.status(200).send("País removido com sucesso");
    } catch (error) {
        console.log(error);
        res.status(errorCode).send(error.message);
    };
});

// ENDPOINT createCountry
app.post("/countries/create", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const {name, capital, continent} = req.body;

        if(!req.headers.authorization){
            errorCode = 401;
            throw new Error("Não autorizado");
        };

        if(req.headers.authorization.length < 10){
            errorCode = 400;
            throw new Error("A autorização deve ter no mínimo 10 caracteres")
        };

        if (!name){
            errorCode = 400;
            throw new Error("Nome não foi informado");
        };

        const countryName = countries.find(country => (
            country.name === name
        ));
   
        if (countryName){
            errorCode = 400;
            throw new Error("País já cadastrado")
        };
    
        if (!capital){
            errorCode = 400;
            throw new Error("Capital não foi informada");
        };

        if (!continent){
            errorCode = 400;
            throw new Error("Continente não foi informada");
        };

        const newCountry: country = {
            id: Date.now(),
            name: name,
            capital: capital,
            continent: continent
        }

        countries.push(newCountry)

        res.status(200).send(
            {
                message: "Success!",
                country: newCountry
            }
        );
    } catch (error) {
        console.log(error);
        res.status(errorCode).send(error.message);
    };
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});