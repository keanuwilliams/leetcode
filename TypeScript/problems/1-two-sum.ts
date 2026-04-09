/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such
 * that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same
 * element twice.
 *
 * You can return the answer in any order.
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - only one valid answer exists
 */

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such
 * that they add up to target.
 * @param nums - array of integers
 * @param target - the target sum of integers
 * @returns indices of the two numbers such that they add up to the target
 */
export function twoSum(nums: number[], target: number): number[] {
    const hashMap: Record<number, number> = {};

    for (let currInd = 0; currInd < nums.length; currInd++) {
        const num = nums[currInd];
        const want = target - num;
        const wantInd = hashMap[want];
        if (wantInd !== undefined) {
            return [wantInd, currInd];
        }
        hashMap[num] = currInd;
    }

    return [];
};