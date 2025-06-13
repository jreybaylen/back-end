package gogitbook

import (
	"testing"
	gitbook "tutorial-app/go-git-book"
)

func TestGreetings(t *testing.T) {
	received := gitbook.Greetings()
	want := "Welcome Go Engineer!"

	if received != want {
		t.Errorf("Test failed: received=%q, want=%q", received, want)
	}
}
