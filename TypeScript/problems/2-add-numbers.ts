/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Constraints:
 * - The number of nodes in each linked list is in the range [1, 100].
 * - 0 <= Node.val <= 9
 * - It is guaranteed that the list represents a number that does not have leading zeros.
 */

// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * @param l1 - non-negative number 1 represented as a non-empty linked list
 * @param l2 - non-negative number 2 represented as a non-empty linked list
 * @returns the sum as a linked list
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead: ListNode | null = new ListNode(0);
    let curr: ListNode | null = dummyHead;

    let carry: number = 0;

    while(l1 !== null || l2 !== null || carry !== 0) {
        const v1 = l1 ? l1.val : 0; // default to zero if val doesn't exist
        const v2 = l2 ? l2.val : 0; // default to zero if val doesn't exist

        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum % 10);
        curr = curr?.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};