import { mergeTwoLists } from "../problems/21-merge-two-sorted-lists";
import { ListNode } from "../problems/common";
import { Test } from "./common";

interface MergeTwoListsTest extends Test {
    list1: ListNode | null
    list2: ListNode | null
    expected: ListNode | null
}

const mergeTwoListsTests: MergeTwoListsTest[] = [
    {
        name: "[1,2,4] and [1,3,4] = [1,1,2,3,4,4]",
        list1: new ListNode(1, new ListNode(2, new ListNode(4))),
        list2: new ListNode(1, new ListNode(3, new ListNode(4))),
        expected: new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))),
    },
    {
        name: "[] and [] = []",
        list1: null,
        list2: null,
        expected: null,
    },
        {
        name: "[] and [0] = [0]",
        list1: null,
        list2: new ListNode(0),
        expected: new ListNode(0),
    },
];

describe("mergeTwoLists()", () => {
    mergeTwoListsTests.forEach(t => {
        it(t.name, () => { expect(mergeTwoLists(t.list1, t.list2)).toEqual(t.expected) });
    });
});