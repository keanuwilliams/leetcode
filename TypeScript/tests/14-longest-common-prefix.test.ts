import { longestCommonPrefix } from "../problems/14-longest-common-prefix";
import { Test } from "./common";

interface LongestCommonPrefixTest extends Test {
    input: string[]
    expected: string
}

const longestCommonPrefixTests: LongestCommonPrefixTest[] = [
    {
        name: '["flower","flow","flight"] should return "fl"',
        input: ["flower","flow","flight"],
        expected: "fl",
    },
    {
        name: '["dog","racecar","car"] should return ""',
        input: ["dog","racecar","car"],
        expected: "",
    },
];

describe("longestCommonPrefix()", () => {
    longestCommonPrefixTests.forEach(t => {
        it(t.name, () => { expect(longestCommonPrefix(t.input)).toBe(t.expected) });
    });
});