import { addTwoNumbers, ListNode } from "../problems/2-add-numbers";
import { Test } from "./common";

interface AddTwoNumbersTest extends Test {
    l1: ListNode | null
    l2: ListNode | null
    expected: ListNode | null
}

const addTwoNumbersTests: AddTwoNumbersTest[] = [
    {
        name: "[2,4,3] + [5,6,4] = [7,0,8]",
        l1: { val: 2, next: { val: 4, next: { val: 3, next: null } }, },
        l2: { val: 5, next: { val: 6, next: { val: 4, next: null } }, },
        expected: { val: 7, next: { val: 0, next: { val: 8, next: null } }, },
    },
    {
        name: "[0] + [0] = [0]",
        l1: { val: 0, next: null },
        l2: { val: 0, next: null },
        expected: { val: 0, next: null },
    },
    {
        name: "[9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]",
        l1: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } } } } },
        l2: { val: 9, next: { val: 9, next: { val: 9, next: null } } },
        expected: { val: 8, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, next: null } } } } } } } },
    },
];

describe("addTwoNumbers()", () => {
    addTwoNumbersTests.forEach(t => {
        it(t.name, () => { expect(addTwoNumbers(t.l1, t.l2)).toEqual(t.expected) });
    });
});