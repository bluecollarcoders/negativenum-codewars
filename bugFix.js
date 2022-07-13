/*

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).


*/

const capitalizeWord = (word) => {
  var newString = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    newString += word[i];
  }

  return newString;
};

console.log(capitalizeWord("word"));
