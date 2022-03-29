/*
Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my"


*/

function stringToArray(string) {
  // split a string
  var substrings = string.split(" ");
  return substrings;
}

console.log(stringToArray(""));

// refactored

const stringIsArray = (string) => {
  var newString = " ";
  var container = [];
  for (let str of string) {
    if (str !== " ") {
      newString += str;
    } else {
      container.push(newString);
      newString = " ";
    }
  }
  container.push(newString);
  return container;
};
console.log(stringIsArray(""));
