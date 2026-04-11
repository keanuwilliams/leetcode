import { addTwoNumbers } from "../problems/2-add-numbers";
import { ListNode } from "../problems/common";
import { Test } from "./common";

interface AddTwoNumbersTest extends Test {
    l1: ListNode | null
    l2: ListNode | null
    expected: ListNode | null
}

const addTwoNumbersTests: AddTwoNumbersTest[] = [
    {
        name: "[2,4,3] + [5,6,4] = [7,0,8]",
        l1: new ListNode(2, new ListNode(4, new ListNode(3, null))),
        l2: new ListNode(5, new ListNode(6, new ListNode(4, null))),
        expected: new ListNode(7, new ListNode(0, new ListNode(8, null))),
    },
    {
        name: "[0] + [0] = [0]",
        l1: new ListNode(0, null),
        l2: new ListNode(0, null),
        expected: new ListNode(0, null),
    },
    {
        name: "[9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]",
        l1: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))))),
        l2: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))),
        expected: new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1, null)))))))),
    },
];

describe("addTwoNumbers()", () => {
    addTwoNumbersTests.forEach(t => {
        it(t.name, () => { expect(addTwoNumbers(t.l1, t.l2)).toEqual(t.expected) });
    });
});