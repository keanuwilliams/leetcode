/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * Constraints:
 * - -2^31 <= x <= 2^31 - 1
 */

/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param x - the integer to check if it's a palindrome
 * @returns true if x is a palindrome; else, false
 */
export function isPalindrome(x: number): boolean {
    // Negative numbers aren't palindromes
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xCopy = x;

    while (x > 0) {
        // Move decimal to the left
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10)
    }

    return xCopy === reverse;
};