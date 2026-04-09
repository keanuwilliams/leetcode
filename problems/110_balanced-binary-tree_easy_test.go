package problems

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type isBalancedTest struct {
	name     string
	input    *TreeNode
	expected bool
}

// Helper to get the tests for this problem
func getIsBalancedTests() []isBalancedTest {
	return []isBalancedTest{
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

func TestIsBalanced(t *testing.T) {
	for _, tt := range getIsBalancedTests() {
		t.Run(tt.name, func(t *testing.T) {
			got := IsBalanced(tt.input)
			require.Equal(t, tt.expected, got)
		})
	}
}
