package arrays

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type twoSumTest struct {
	name     string
	nums     []int
	target   int
	expected []int
}

func getTwoSumTests() []twoSumTest {
	return []twoSumTest{
		{
			name:     "[2,7,11,15] and 9 should return [0,1]",
			nums:     []int{2, 7, 11, 15},
			target:   9,
			expected: []int{0, 1},
		},
		{
			name:     "[3,2,4] and 6 should return [1,2]",
			nums:     []int{3, 2, 4},
			target:   6,
			expected: []int{1, 2},
		},
		{
			name:     "[3,3] and 6 should return [0,1]",
			nums:     []int{3, 3},
			target:   6,
			expected: []int{0, 1},
		},
	}
}

func TestIsTwoSum(t *testing.T) {
	for _, tt := range getTwoSumTests() {
		t.Run(tt.name, func(t *testing.T) {
			got := TwoSum(tt.nums, tt.target)
			require.Equal(t, tt.expected, got)
		})
	}
}
