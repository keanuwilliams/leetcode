import { romanToInt } from "../problems/13-roman-to-integer";

describe("romanToInt()", () => {
    test.each([
        ["III", 3],
        ["LVIII", 58],
        ["MCMXCIV", 1994],
    ])('romanToInt(%j) should return %j', (input, expected) => {
        expect(romanToInt(input)).toBe(expected);
    });
});