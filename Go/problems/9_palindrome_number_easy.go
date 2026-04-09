package problems

import "math"

/**
Given an integer x, return true if x is a palindrome, and false otherwise.

Constraints:
- -2^31 <= x <= 2^31 - 1
*/

// Implementation goes here
func IsPalindrome(x int) bool {
	// Negative numbers aren't palindromes by default
	if x < 0 {
		return false
	}

	reverse := 0
	xCopy := x

	// Reverse x
	for x > 0 {
		// Move decimal to the left
		reverse = (reverse * 10) + (x % 10)
		x = int(math.Floor(float64(x / 10)))
	}

	return xCopy == reverse
}
