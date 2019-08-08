const sum = require("../src/index")
describe('sum', () => {
    it("should have correct values", () => {
        expect(sum(1, 2)).toBe(3)
    })
});