/*

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

we have to look through the array backwards
look to see how close the wolf is to the sheep
if the wolf is at the end of the array 
write pls go away and stop eating my sheep
if it's not get the position of the sheep and 
Oi, Sheep number ! You are about to be eaten by a wolf

One way to go about this is to loop through the list
write a condition if the queue has the wolf in the lastindex
return pls go away and stop eating my sheep
else `Oi, Sheep number ${index}! You are about to be eaten by a wolf`

*/

const warnTheSheep = (queue) => {
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] === "wolf" && i === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
    } else if (queue[i] === "wolf" && i !== queue.length - 1) {
      return `Oi! Sheep number ${
        queue.length - i - 1
      }! You are about to be eaten by a wolf!`;
    }
  }
};

console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
