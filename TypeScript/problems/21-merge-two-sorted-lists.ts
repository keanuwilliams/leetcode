import { ListNode } from "./common";

/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Constraints:
 *
 * The number of nodes in both lists is in the range [0, 50].
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order.
 */

/**
 * Merge the two lists into one sorted list. The list should be made by splicing
 * together the nodes of the first two lists. Return the head of the merged linked list.
 * @param list1 - first sorted list
 * @param list2 - second sorted list
 * @returns the head of the merged linked list
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummyHead: ListNode = new ListNode(0);
    let curr: ListNode = dummyHead;

    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val < list2.val) {
                curr.next = new ListNode(list1.val);
                curr = curr.next;
                list1 = list1.next;
            } else {
                curr.next = new ListNode(list2.val);
                curr = curr.next;
                list2 = list2.next;
            }
        } else if (list1) {
            curr.next = new ListNode(list1.val);
            curr = curr.next;
            list1 = list1.next;
        } else if (list2) {
            curr.next = new ListNode(list2.val);
            curr = curr.next;
            list2 = list2.next;
        }
    }

    return dummyHead.next;
};