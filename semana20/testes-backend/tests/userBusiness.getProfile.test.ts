import { UserBusiness } from "../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing getProfile UserBusiness", () => {
    let idGenerator = { } as IdGenerator;
    let hashGenerator = { } as HashGenerator;
    let userDatabase = { } as any;
    let tokenGenerator = { } as TokenGenerator;

    test("Should return User not found Error", async () => {
        expect.assertions(3);

        tokenGenerator = { verify: jest.fn(() => { 
            return { id: "mockId", role: UserRole.ADMIN }
        })} as any;

        userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        );

        try {
            await userBusiness.getProfile("token");
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(userDatabase.getUserById).toHaveBeenCalled();
        };
    });

    test("Should return User", async () => {
        expect.assertions(2);

        tokenGenerator = { verify: jest.fn(() => { 
            return { id: "mockId", role: UserRole.ADMIN }
        })} as any;

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

        const output = await userBusiness.getProfile("token");
 
        expect(userDatabase.getUserById).toHaveBeenCalledWith("mockId");
        expect(output).toEqual({
            id: "mockId",
            name: "Mock User",
            email:"mockuser@gmail.com",
            role: UserRole.ADMIN
        });        
    });
});