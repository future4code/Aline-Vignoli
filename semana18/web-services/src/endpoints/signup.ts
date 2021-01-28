import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { AuthenticationData, generateToken } from '../services/authenticator';
import { generate } from '../services/idGenerator';
import { User, USER_ROLES } from '../types/User';
import { hash } from '../services/hashManager';
import { address } from '../types/address';
import { getAddressByCep } from '../services/addressManager';
import { insertAddress } from '../data/insertAddress';
import { insertUserAddressRelation } from '../data/insertUserAddressRelation';

export const signup = async (
    req: Request,
    res: Response
) : Promise<void> =>  {
    let errorCode: number = 400;
    try {
        const { name, nickname, email, password, role } = req.body;

        if ( !req.body.address ) {
            errorCode = 406;
            throw new Error('Informe o campo "address" com "cep", "number" e "additionalInfo"');
        }

        const { cep, number, additionalInfo } = req.body.address;

        if ( !email || !password || !name || !nickname ) {
            errorCode = 406;
            throw new Error('Preencha "name", "nickname", "email" e "password" para se cadastrar.');
        };

        if ( !cep || !number ) {
            errorCode = 406;
            throw new Error('Preencha seus endereços "cep" e "number"');
        };

        if ( isNaN(Number(cep)) || cep.includes("-") ) {
            errorCode = 406;
            throw new Error("Apenas números são válidos");
        };

        if ( role !== USER_ROLES.ADMIN &&
             role !== USER_ROLES.NORMAL
        ) {
            errorCode = 406;
            throw new Error('"role" precisa ser "ADMIN" ou "NORMAL".');
        };

        if ( !email.includes("@") ) {
            errorCode = 406;
            throw new Error('Um endereço de "email" válido deve conter "@".');
        };

        if ( password.length < 6 ) {
            errorCode = 406;
            throw new Error('A senha deve conter no mínimo 6 caracteres.');
        };

        const id: string = generate();
        const cypherPassword: string = hash(password);
        const myAddress: address = await getAddressByCep(cep);

        if (!myAddress) {
            errorCode = 404;
            throw new Error('CEP não encontrado');
        };

        const addressId: string = generate();
        const address: address = {
            id: addressId,
            name: myAddress.name,
            number: number,
            neighborhood: myAddress.neighborhood,
            additionalInfo: additionalInfo,
            city: myAddress.city,
            state: myAddress.state
        }

        const user: User = {
            id,
            name,
            nickname,
            email,
            password: cypherPassword,
            role
        };

        await insertUser(user);
        await insertAddress(address);
        await insertUserAddressRelation(user.id, addressId);

        const authData: AuthenticationData = {
            id: user.id,
            role
        };

        const token = generateToken(authData);

        res.status(200).send({token});

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message );
    };
};