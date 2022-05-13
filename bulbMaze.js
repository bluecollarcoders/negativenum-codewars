/*
You walk in a maze. You need to reach the exit through many rooms. These rooms are in a straight line.

You can only walk in the dark. Otherwise, you will be caught by the enemy.

Your trouble is that some rooms have light bulbs. If the light bulb is bright when you enter the room. You were caught by the enemy.

Fortunately, the status of these bulbs (on/off) is aoto-switched every minute. So you have a chance to go through the maze.

Task
Let's us use a string map to represent these rooms， like this: "xo oxox".

"x" means there is a bulb in the room, and its initial status is off;

"o" means there is a bulb in the room, and its initial status is on;

" "(space) means a room without bulb, it's always dark.

Your task is to determine if you can go through the maze. Return true if you can, false otherwise.

Note
Your initial position is the most left, the exit position is the most right.

Your moving speed is 1 minute per step. You can not stop before you start your moving until you reach the exit.


*/

const bulbMaze = (maze) => {
  // convert parameter to an array
  // use the split method to put words in an array form 'xo ooo'
  var puzzle = maze.split("");
  // loop thru string turning bulbs on and off
  for (let i = 0; i < puzzle.length; i++) {
    if (i === "o") return false;
    puzzle = puzzle.map((room) => {
      if (room === "x") return "o";
      if (room == "o") return "x";
      else return " ";
    });
  }
  return true;
};
