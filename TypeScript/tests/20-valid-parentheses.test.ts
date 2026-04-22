import { isValid } from "../problems/20-valid-parentheses";
import { Test } from "./common";

interface IsValidTest extends Test {
    input: string
    expected: boolean
}

const isValidTests: IsValidTest[] = [
    { name: "() = true", input: "()", expected: true },
    { name: "()[]{} = true", input: "()[]{}", expected: true },
    { name: "(] = false", input: "(]", expected: false },
    { name: "([]) = true", input: "([])", expected: true },
    { name: "([)] = false", input: "([)]", expected: false },
];

describe("isValid()", () => {
    isValidTests.forEach(t => {
        it(t.name, () => { expect(isValid(t.input)).toEqual(t.expected) });
    });
});