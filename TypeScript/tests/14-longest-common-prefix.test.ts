import { longestCommonPrefix } from "../problems/14-longest-common-prefix";

describe("longestCommonPrefix()", () => {
    test.each([
        [["flower","flow","flight"], "fl"],
        [["dog","racecar","car"], ""],
    ])('longestCommonPrefix(%j) should return %j', (input, expected) => {
        expect(longestCommonPrefix(input)).toBe(expected);
    });
});