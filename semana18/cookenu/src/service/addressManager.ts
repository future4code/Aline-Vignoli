import axios from "axios";
import { address } from "../types/address";

const URL = "https://viacep.com.br/ws";

export async function getAddressByCep(cep: string): Promise<address> {
    try {

        const result = await axios.get(`${URL}/${cep}/json`);
        console.log(result);
        const myAddress: address = {
            name: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return myAddress;
    } catch (error) {
        throw new Error(error.message);
    }
}

