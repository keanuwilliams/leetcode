package problems

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type isPalindromeTest struct {
	name     string
	input    int
	expected bool
}

func getIsPalindromeTests() []isPalindromeTest {
	return []isPalindromeTest{
		{
			name:     "121 should return true",
			input:    121,
			expected: true,
		},
		{
			name:     "-121 should return false",
			input:    -121,
			expected: false,
		},
		{
			name:     "10 should return false",
			input:    10,
			expected: false,
		},
	}
}

func TestPalindromeNumber(t *testing.T) {
	for _, tt := range getIsPalindromeTests() {
		t.Run(tt.name, func(t *testing.T) {
			got := IsPalindrome(tt.input)
			require.Equal(t, tt.expected, got)
		})
	}
}
