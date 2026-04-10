import { isBalanced, TreeNode } from "../problems/110-balanced-binary-tree";
import { Test } from "./common";

interface IsBalancedTest extends Test {
    input: TreeNode | null
    expected: boolean
}

const isBalancedTests: IsBalancedTest[] = [
    {
        name: "Binary Tree [3,9,20,null,null,15,7] should return true",
        input: {
            val: 3,
            left: new TreeNode(9, null, null),
            right: new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)),
        },
        expected: true,
    },
    {
        name: "Binary Tree [1,2,2,3,3,null,null,4,4] should return false",
        input: {
            val: 1,
            left: new TreeNode(2, new TreeNode(3, new TreeNode(4, null, null), new TreeNode(4, null, null)), new TreeNode(2, null, null)),
            right: new TreeNode(2, null, null),
        },
        expected: false,
    },
    {
        name: "Binary Tree [] should return true",
        input: null,
        expected: true,
    },
];

describe("isBalanced()", () => {
    isBalancedTests.forEach(t => {
        it(t.name, () => { expect(isBalanced(t.input)).toBe(t.expected) });
    });
});