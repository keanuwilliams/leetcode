package tests

import (
	"testing"

	binarytrees "github.com/keanuwilliams/leetcode-go/problems/binary_trees"

	"github.com/stretchr/testify/require"
)

type test struct {
	name     string
	input    *binarytrees.TreeNode
	expected bool
}

// Helper to get the tests for this problem
func getTests() []test {
	return []test{
		{
			name: "Binary Tree [3,9,20,null,null,15,7] should return true",
			input: &binarytrees.TreeNode{
				Val:  3,
				Left: &binarytrees.TreeNode{Val: 9},
				Right: &binarytrees.TreeNode{
					Val:   20,
					Left:  &binarytrees.TreeNode{Val: 15},
					Right: &binarytrees.TreeNode{Val: 7},
				},
			},
			expected: true,
		},
		{
			name: "Binary Tree [1,2,2,3,3,null,null,4,4] should return false",
			input: &binarytrees.TreeNode{
				Val: 1,
				Left: &binarytrees.TreeNode{
					Val: 2,
					Left: &binarytrees.TreeNode{
						Val:   3,
						Left:  &binarytrees.TreeNode{Val: 4},
						Right: &binarytrees.TreeNode{Val: 4},
					},
					Right: &binarytrees.TreeNode{Val: 3},
				},
				Right: &binarytrees.TreeNode{
					Val: 2,
				},
			},
			expected: false,
		},
		{
			name:     "Binary Tree [] should return true",
			input:    &binarytrees.TreeNode{},
			expected: true,
		},
	}
}

func TestIsBalanced(t *testing.T) {
	for _, tt := range getTests() {
		t.Run(tt.name, func(t *testing.T) {
			got := binarytrees.IsBalanced(tt.input)
			require.Equal(t, tt.expected, got)
		})
	}
}
