package problems

import "math"

/**
Given a binary tree, determine if it is height-balanced.

Constraints:
- The number of nodes in the tree is in the range [0, 5000].
- -10^4 <= Node.val <= 10^4
*/

// Implementation goes here
func IsBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}

	// Get the heights of each subtree
	lHeight := getHeight(root.Left)
	rHeight := getHeight(root.Right)

	// Any of the subtrees aren't balanced, we return false
	if math.Abs(float64(lHeight-rHeight)) > 1 {
		return false
	}

	// Recursively check subtrees
	return IsBalanced(root.Left) && IsBalanced(root.Right)
}

// Helper for the implementation of the problem
func getHeight(node *TreeNode) int {
	if node == nil {
		return 0
	}

	return 1 + max(getHeight(node.Left), getHeight(node.Right))
}
