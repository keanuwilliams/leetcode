import { isValid } from "../problems/20-valid-parentheses";

describe("isValid()", () => {
    test.each([
        ["()", true],
        ["()[]{}", true],
        ["(]", false],
        ["([])", true],
        ["([)]", false],
    ])('isValid(%j) should return %j', (input, expected) => {
        expect(isValid(input)).toEqual(expected);
    });
});