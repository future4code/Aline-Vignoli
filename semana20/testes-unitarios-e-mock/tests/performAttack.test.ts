describe("Testing performAttack", () => {
    test("Should return true", () => {
        const validatorMock = jest.fn (()=> {
            return true;
        });
    });

    test("Should return false", () => {
        const validatorMock = jest.fn (()=> {
            return false;
        });
    });
});