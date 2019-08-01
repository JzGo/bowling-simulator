# Bowling Simulator Challenge

This is a solution to a coding challenge I have received.

### Challenge Description:

Simulate a bowling game that generates random shots and tracks scores for a game.

### Notes on my solution:

#### Refactoring

I see a lot of opportunities to dry up my code, possibly using recursion:

- <strong>bowlingFrame</strong> function: The logic that executes a shot when it is determined another coould be made.
- <strong>calcFrame</strong> function: The implementation is broken and what I see indicates that there is again a lot of logic that may be encapsulated for DRYness and readability.

#### Composition

Given the implementation that I have so far, I find myself now considering what the potential is for improving readability and maintainability by implementing better composition and functional programming.