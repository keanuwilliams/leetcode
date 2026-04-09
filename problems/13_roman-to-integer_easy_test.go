package problems

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type romanToIntegerTest struct {
	name     string
	input    string
	expected int
}

// Helper to get the tests for this problem
func getRomanToIntegerTest() []romanToIntegerTest {
	return []romanToIntegerTest{
		{
			name:     "III should return 3",
			input:    "III",
			expected: 3,
		},
		{
			name:     "LVIII should return 58",
			input:    "LVIII",
			expected: 58,
		},
		{
			name:     "MCMXCIV should return 1994",
			input:    "MCMXCIV",
			expected: 1994,
		},
	}
}

func TestRomanToInteger(t *testing.T) {
	for _, tt := range getRomanToIntegerTest() {
		t.Run(tt.name, func(t *testing.T) {
			got := RomanToInt(tt.input)
			require.Equal(t, tt.expected, got)
		})
	}
}
