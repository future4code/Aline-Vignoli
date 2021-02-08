import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/verifyAge";

describe("verifyAge", () => {
    test("Should return `true` if a brazilian user is allowed to enter in a brazilian casino", () => {
        const brazilian: User = {
            name: "Aline",
            age: 33,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const casino: Casino = {
            name: "Casinera",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Aline"]);
    });

    test("Should return `true` if an american user is allowed to enter in a brazilian casino", () => {
        const american: User = {
            name: "Green Go",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Casinera",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [american]);
        expect(result.americans.allowed).toEqual(["Green Go"]);
    });
});