/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Constraints:
 * - 1 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] consists of only lowercase English letters if it is non-empty.
 */

/**
 * Find the longest common prefix string amongst an array of strings
 * @param strs - array of strings to find the longest common prefix
 * @returns the longest common prefix string
 */
export function longestCommonPrefix(strs: string[]): string {
    strs.sort((a, b) => a.length - b.length); // sort the lengths smallest to largest
    let prefix: string = strs[0]; // use the smallest string to start
    let prefixLen: number = prefix.length; // tracker to know which index is the "stopping" point

    // Go through each string to determine if our prefix matches
    for (let i = 1; i < strs.length; i++) {
        let str: string = strs[i];

        // Found that the string doesn't have the same prefix
        // Will need to find where the next match is
        while (prefix !== str.substring(0, prefixLen)) {
            prefixLen--; // decrement the index
            // Early return if we aren't matching
            if (prefixLen === 0) {
                return "";
            }
            prefix = prefix.substring(0, prefixLen); // update the prefix
        }
    }

    return prefix;
};