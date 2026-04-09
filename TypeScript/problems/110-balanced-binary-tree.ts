/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 5000].
 * - -10^4 <= Node.val <= 10^4
*/

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * Given a binary tree, determine if it is height-balanced.
 * @param root - the root of the binary tree
 * @returns true if the binary tree is balanced; else, false
 */
export function isBalanced(root: TreeNode | null): boolean {
    // Base case is that we are at the end of the tree
    if (!root) {
        return true;
    }

    // Get the heights of each subtree
    const lHeight: number = getHeight(root.left);
    const rHeight: number = getHeight(root.right);

    // Any of the subrees aren't balanced, we return false
    if (Math.abs(lHeight-rHeight) > 1) {
        return false;
    }

    // Recursively check subtrees
    return isBalanced(root.left) && isBalanced(root.right);
}

/**
 * Helper to get the height of the binary tree from a node
 * @param node - node to start from
 * @returns the height of the binary tree
 */
function getHeight(node: TreeNode | null): number {
    if (!node) {
        return 0;
    }

    return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}