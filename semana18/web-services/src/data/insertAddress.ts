import { address } from '../types/address';
import { connection } from './connection';
export const ADDRESS_TABLE = "Address";

export const insertAddress = async (address: address) => {
    await connection.insert({
        id: address.id,
        name: address.name,
        number: address.number,
        additional_info: address.additionalInfo,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state
    }).into(ADDRESS_TABLE);
};