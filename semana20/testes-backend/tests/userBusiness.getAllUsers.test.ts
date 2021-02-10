import { UserBusiness } from "../src/business/UserBusiness";
import { UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";

describe("Testing getAllUsers Business", () => {
    let idGenerator = { } as IdGenerator;
    let hashGenerator = { } as HashGenerator;
    let userDatabase = { } as any;
    let tokenGenerator = { } as any;
    
    test("Should return Unauthorized Error", async () => {
        expect.assertions(3);

        userDatabase = { getAllUsers: jest.fn() } as any;
        tokenGenerator = { verify: jest.fn(() => { 
            return { id: "mockId", role: UserRole.NORMAL }
        })}

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        );

        try {
            await userBusiness.getAllUsers("mockToken");
        } catch (error) {
            expect(tokenGenerator.verify).toHaveReturnedWith(
                { id: "mockId", role: UserRole.NORMAL }
            );
            expect(error.statusCode).toBe(401);
            expect(error.message).toEqual("Only ADMIN users have access to this information");
        };
    });
});