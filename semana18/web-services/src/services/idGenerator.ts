import { v4 } from 'uuid';

export const generate = () : string => {
    return v4();
};