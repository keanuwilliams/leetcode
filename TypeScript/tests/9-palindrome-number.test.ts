import { isPalindrome } from "../problems/9-palindrome-number";

describe("isPalindrome()", () => {
    test.each([
        [121, true],
        [-121, false],
        [10, false],
    ])('isPalindrome(%j) should return %j', (input, expected) => {
        expect(isPalindrome(input)).toBe(expected);
    });
});