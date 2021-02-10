import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing getUserById", () => {
    let idGenerator = { } as IdGenerator;
    let hashGenerator = { } as HashGenerator;
    let userDatabase = { } as any;
    let tokenGenerator = { } as TokenGenerator;

    test("Should return User not found error", async () => {
        expect.assertions(3);

        userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        );

        try {
            await userBusiness.getUserById("mockId");
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(userDatabase.getUserById).toHaveBeenCalled();
        };
    });

    test("Should return User", async () => {
        const userMock = new User(
            "mockId",
            "Mock User",
            "mockuser@gmail.com",
            "mockpassword",
            stringToUserRole("ADMIN")
        ); 

        userDatabase = { getUserById: jest.fn(async (id: string) => userMock) } as any;

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        );

        const output = await userBusiness.getUserById("mockId");
 
        expect(userDatabase.getUserById).toHaveBeenCalledWith("mockId");
        expect(output).toEqual({
            id: "mockId",
            name: "Mock User",
            email:"mockuser@gmail.com",
            role:"ADMIN"
        });
    });
});