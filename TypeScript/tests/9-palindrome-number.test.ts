import { isPalindrome } from "../problems/9-palindrome-number";
import { Test } from "./common";

interface IsPalindromeTest extends Test {
    input: number
    expected: boolean
}

const isPalindromeTests: IsPalindromeTest[] = [
    {
        name: "121 should return true",
        input: 121,
        expected: true,
    },
    {
        name: "-121 should return false",
        input: -121,
        expected: false,
    },
        {
        name: "10 should return false",
        input: 10,
        expected: false,
    },
];

describe("isPalindrome()", () => {
    isPalindromeTests.forEach(t => {
        it(t.name, () => { expect(isPalindrome(t.input)).toBe(t.expected) })
    });
});