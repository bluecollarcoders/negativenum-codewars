/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
testcase 'din' >>> "((("

I need to take the parameter  variable and assign to a new variable symbolWord = word.length;
I'm doing this to loop through the array
Once I loop through the string 
I'll write a condition 
if symbolWord[i] === word.[0] return '(' 
if symbolWord[i] === word.[1] return ')'

*/
const duplicateEncode = (word) => {
  word = word.toLowerCase();
  newString = "";
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      newString += "(";
    } else {
      newString += ")";
    }
  }
  return newString;
};

console.log(duplicateEncode("dub"));
