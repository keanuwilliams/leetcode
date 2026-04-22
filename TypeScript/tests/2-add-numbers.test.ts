import { addTwoNumbers } from "../problems/2-add-numbers";
import { ListNode } from "../problems/common";

describe("addTwoNumbers()", () => {
    test.each([
        [new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))), new ListNode(7, new ListNode(0, new ListNode(8)))],
        [new ListNode(0), new ListNode(0), new ListNode(0)],
        [
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
            new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))),
        ],
    ])('addTwoNumbers(%j, %j) should return %j', (l1, l2, expected) => {
        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });
});