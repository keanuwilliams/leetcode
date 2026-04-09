import { romanToInt } from "../problems/13-roman-to-integer";
import { Test } from "./common";

export interface RomanToIntTest extends Test {
    input: string
    expected: number
}

const romanToIntTests: RomanToIntTest[] = [
    {
        name: "III should return 3",
        input: "III",
        expected: 3,
    },
    {
        name: "LVIII should return 58",
        input: "LVIII",
        expected: 58,
    },
    {
        name: "MCMXCIV should return 1994",
        input: "MCMXCIV",
        expected: 1994,
    },
];

describe("romanToInt()", () => {
    romanToIntTests.forEach(t => {
        it(t.name, () => { expect(romanToInt(t.input)).toBe(t.expected) })
    });
});