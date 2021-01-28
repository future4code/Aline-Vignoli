import { Request, Response } from 'express';
import { getAddressByCep } from '../services/addressManager';
import { address } from '../types/address';

export const getAddressInfo = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try { 
        const { cep } = req.params;

        if ( isNaN(Number(cep)) || cep.includes("-") ) {
            errorCode = 406;
            throw new Error("Apenas números são válidos");
        };

        const address: address = await getAddressByCep(cep);
        res.status(200).send(address);

    } catch (error) {
        res.status(errorCode).send(error.message);
    };
}; 