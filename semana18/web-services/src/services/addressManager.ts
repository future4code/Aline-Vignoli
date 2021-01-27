import axios from 'axios';
import { address } from '../types/address';

const BASE_URL: string = "https://viacep.com.br/ws";

export const getAddressByCep = async (cep: string) => {
    try {
        const result = await axios.get(`${BASE_URL}/${cep}/json`);
        const address: address = {
            name: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        };

        return address;
    } catch (error) {
        throw new Error(error.message);
    };
};