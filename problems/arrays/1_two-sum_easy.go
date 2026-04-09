package arrays

/**
Given an array of integers nums and an integer target, return indices of the two numbers such
that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same
element twice.

You can return the answer in any order.

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- only one valid answer exists
*/

// Implementation of the problem
func TwoSum(nums []int, target int) []int {
	hashMap := make(map[int][]int)

	// Add values into the hashmap
	for ind, num := range nums {
		_, isFound := hashMap[num]
		if !isFound {
			hashMap[num] = make([]int, 0)
		}
		hashMap[num] = append(hashMap[num], ind)
	}

	// Search for index by wanted value
	for currInd, num := range nums {
		want := target - num
		foundInds, isFound := hashMap[want]
		if isFound {
			for _, foundInd := range foundInds {
				if currInd == foundInd {
					continue
				}
				return []int{currInd, foundInd}
			}
		}
	}

	// Due to contraints, this will never be returned
	return []int{}
}
