import { mergeTwoLists } from "../problems/21-merge-two-sorted-lists";
import { ListNode } from "../problems/common";

describe("mergeTwoLists()", () => {
    test.each([
        [
            new ListNode(1, new ListNode(2, new ListNode(4))),
            new ListNode(1, new ListNode(3, new ListNode(4))),
            new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))),
        ],
        [null, null, null],
        [null, new ListNode(0), new ListNode(0)],
    ])('mergeTwoLists(%j, %j) should return %j', (list1, list2, expected) => {
        expect(mergeTwoLists(list1, list2)).toEqual(expected);
    });
});