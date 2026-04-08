package binarytrees

import (
	"testing"

	"github.com/stretchr/testify/require"
)

/**
Given a binary tree, determine if it is height-balanced.
*/

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Test struct {
	name     string
	input    *TreeNode
	expected bool
}

func isBalanced(root *TreeNode) bool {

}

func getTests() []Test {
	return []Test{
		{
			name: "Binary Tree [3,9,20,null,null,15,7] should return true",
			input: &TreeNode{
				Val:  3,
				Left: &TreeNode{Val: 9},
				Right: &TreeNode{
					Val:   20,
					Left:  &TreeNode{Val: 15},
					Right: &TreeNode{Val: 7},
				},
			},
			expected: true,
		},
		{
			name: "Binary Tree [1,2,2,3,3,null,null,4,4] should return false",
			input: &TreeNode{
				Val: 1,
				Left: &TreeNode{
					Val: 2,
					Left: &TreeNode{
						Val:   3,
						Left:  &TreeNode{Val: 4},
						Right: &TreeNode{Val: 4},
					},
					Right: &TreeNode{Val: 3},
				},
				Right: &TreeNode{
					Val: 2,
				},
			},
			expected: false,
		},
		{
			name:     "Binary Tree [] should return true",
			input:    &TreeNode{},
			expected: true,
		},
	}
}

func main(t *testing.T) {
	for _, tt := range getTests() {
		t.Run(tt.name, func(t *testing.T) {
			got := isBalanced(tt.input)
			require.Equal(t, tt.expected, got)
		})
	}
}
