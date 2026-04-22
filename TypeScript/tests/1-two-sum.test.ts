import { twoSum } from "../problems/1-two-sum";

describe("twoSum()", () => {
    test.each([
        [[2,7,11,15], 9, [0,1]],
        [[3,2,4], 6, [1,2]],
        [[3,3], 6, [0,1]],
    ])('twoSum(%j, %j) should return %j', (nums, target, expected) => {
        expect(twoSum(nums, target)).toEqual(expected);
    });
});
