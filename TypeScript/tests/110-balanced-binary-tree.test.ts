import { isBalanced, TreeNode } from "../problems/110-balanced-binary-tree";

describe("isBalanced()", () => {
    test.each([
        [new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))), true],
        [new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(2)), new TreeNode(2)), false],
        [null, true],
    ])('isBalanced(%j) should return %j', (input, expected) => {
        expect(isBalanced(input)).toBe(expected);
    });
});