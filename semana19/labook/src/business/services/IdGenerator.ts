import { v4 } from "uuid";

export class IdGenerator {

    public static generateId = (): string => v4();
};