import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/verifyAge";

describe("verifyAge", () => {
    test("Brazilian allowed", () => {
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

    test("American allowed", () => {
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

    test("2 americans and 2 brazilians unallowed", () => {
        const brazilian: User = {
            name: "Aline",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american: User = {
            name: "Theresa Wayman",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Vegalicius",
            location: LOCATION.EUA
        };

        const result = verifyAge(
            casino, 
            [ brazilian, brazilian, american, american ]
        );

        expect(result.brazilians.unallowed).toEqual(["Aline", "Aline"]);
        expect(result.americans.unallowed).toEqual(["Theresa Wayman", "Theresa Wayman"]);
    });

    test("2 brazilians unallowed and 2 americans allowed", () => {
        const brazilian: User = {
            name: "Aline",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american: User = {
            name: "Theresa Wayman",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Vegalicius",
            location: LOCATION.EUA
        };

        const result = verifyAge(
            casino, 
            [ brazilian, brazilian, american, american ]
        );

        expect(result.brazilians.unallowed).toEqual(["Aline", "Aline"]);
        expect(result.americans.allowed).toEqual(["Theresa Wayman", "Theresa Wayman"]);
    });

    test("Brazilian allowed & brazilians allowed array length less than 2 and greater than 0", () => {
        const brazilian: User = {
            name: "Aline",
            age: 33,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: "Casinero",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(
            casino,
            [ brazilian ]
        );

        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
    });
});