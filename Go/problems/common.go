package problems

import "errors"

// Definition for a binary tree node
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// Definition of a stack
type Stack struct {
	s []int
}

func NewStack() *Stack {
	return &Stack{s: make([]int, 0)}
}

func (s *Stack) Push(v int) {
	s.s = append(s.s, v)
}

func (s *Stack) Pop() (int, error) {
	if len(s.s) == 0 {
		return 0, errors.New("empty stack")
	}

	result := s.s[len(s.s)-1]
	s.s = s.s[:len(s.s)-1]
	return result, nil
}
