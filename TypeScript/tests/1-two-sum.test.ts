import { twoSum } from "../problems/1-two-sum";
import { Test } from "./common";

export interface TwoSumTest extends Test {
    nums: number[]
    target: number
    expected: number[]
}

const twoSumTests: TwoSumTest[] = [
    {
        name: "[2,7,11,15] and 9 should return [0,1]",
        nums: [2,7,11,15],
        target: 9,
        expected: [0, 1],
    },
    {
        name: "[3,2,4] and 6 should return [1,2]",
        nums: [3,2,4],
        target: 6,
        expected: [1, 2],
    },
    {
        name: "[3,3] and 6 should return [0,1]",
        nums: [3,3],
        target: 6,
        expected: [0, 1],
    },
];

describe("TwoSum()", () => {
    twoSumTests.forEach(t => {
        it(t.name, () => { expect(twoSum(t.nums, t.target)).toEqual(t.expected) });
    });
});
