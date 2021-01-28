import { connection } from './connection';
export const USER_ADDRESS_TABLE = "User_Address";

export const insertUserAddressRelation = async (userId: string, addressId: string) => {
    await connection.insert({
        user_id: userId,
        address_id: addressId
    }).into(USER_ADDRESS_TABLE);
};