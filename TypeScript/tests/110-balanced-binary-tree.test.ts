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
            left: { val: 9, left: null, right: null },
            right: {
                val: 20 ,
                left: { val: 15, left: null, right: null },
                right: { val: 7, left: null, right: null },
            },
        },
        expected: true,
    },
    {
        name: "Binary Tree [1,2,2,3,3,null,null,4,4] should return false",
        input: {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: { val: 4, left: null, right: null },
                    right: { val: 4, left: null, right: null },
                },
                right: { val: 2, left: null, right: null },
            },
            right: { val: 2, left: null, right: null },
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