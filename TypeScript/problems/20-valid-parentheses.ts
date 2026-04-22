/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[', and ']',
 * determine if the input is valid.
 *
 * An input string is valid if:
 * - open brackets must be closed by the same type of brackets
 * - open brackets must be closed in the correct order
 * - every close bracket has a corresponding open bracket of the same type
 *
 * @param s - string to validate
 * @returns true if the string is valid, else false
 */
export function isValid(s: string): boolean {
    const openingParens: Record<string, string> = { '(': ')', '[': ']', '{': '}' };
    const stack: string[] = [];

    // Go through the input string
    for (let char of s) {
        // Push opening parens into the stack
        if (openingParens[char]) {
            stack.push(char);
            continue;
        }

        // If ending paren, check the top of the stack
        // We have an invalid string at this point if:
        // 1. an end paren came before an open paren was pushed
        // or
        // 2. we have a mismatch in end paren and start paren
        const topOfStack: string | undefined = stack.pop();
        if (!topOfStack || openingParens[topOfStack] !== char) {
            return false;
        }
    }

    // If we got through the entire string, our stack should be empty
    return stack.length === 0 ;
}