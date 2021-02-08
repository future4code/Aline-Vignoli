import { performePurchase, User } from "../src/performePurchase";

describe("performePurchase", () => {
    test("Should return `true` if user balance is greater than purchase value", () => {
        const user: User = { name: "Aline", balance: 200 };
        const result = performePurchase(user, 100);

        expect(result).toEqual({
            ...user,
            balance: 100
        });
    });

    test("Should return `true` if user balance equal to purchase value", () => {
        const user: User = { name: "Aline", balance: 100 };
        const result = performePurchase(user, 100);

        expect(result).toEqual({
            ...user,
            balance: 0
        });
    });

    test("Should return `true` if user balance less than purchase value", () => {
        const user: User = { name: "Aline", balance: 50 };
        const result = performePurchase(user, 100);

        expect(result).toBeUndefined();
    });
});