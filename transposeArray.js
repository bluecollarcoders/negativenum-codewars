/*

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.



You need me to take two strings transpose them so they are top to bottom
first thing I would do is create a variable to hold empty array
then create a variable that concat's the two strings
then split and then join the strings
*/

const transposeTwoStrings = (array) => {
  var result = [];
  var joined = Math.max(array[0].length, array[1].length);

  for (let i = 0; i < joined; i++) {
    var parallel = (array[0][i] || " ") + " " + (array[1][i] || " ");
    result.push(parallel);
  }
  return result.join("\n");
};

console.log(transposeTwoStrings(["Hello", "World"]));
