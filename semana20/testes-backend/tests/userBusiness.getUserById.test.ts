import { UserBusiness } from "../src/business/UserBusiness";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing getUserById", () => {
    const idGenerator = { generate: jest.fn(() => "bananinha") } as IdGenerator;
    const hashGenerator = { hash: jest.fn(), compareHash: jest.fn() } as HashGenerator;
    const userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;
    const tokenGenerator = { generate: jest.fn(() => "token"), verify: jest.fn() } as TokenGenerator;
    
    const userBusiness = new UserBusiness(
        idGenerator,
        hashGenerator,
        userDatabase,
        tokenGenerator
    );

    test("Should return User not found error", async () => {
        expect.assertions(3);

        try {
            const output = await userBusiness.getUserById("mockId");
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(userDatabase.getUserById).toHaveBeenCalled();
        };
    });
});