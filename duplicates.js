/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
testcase >>> abcde = 0;
I would need to iterate over the length of the string then if string[i] is equal to itself increment by 1 
so I would have to create a count to hold the amount of times a duplicate occurs
*/
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

test case "indivisibility" -> 1 # 'i' occurs six times
*/
const duplicateCount = (text) => {
  var count = 0;
  var buffer = "";

  newString = text.toLowerCase().split("").sort().join("");

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === newString[i + 1] && newString[i] != buffer) {
      buffer = newString[i];
      count++;
      i++;
    }
  }
  return count;

  /*
 refactor
  try{ return text.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
    catch(e){ return 0; } // if TypeError
 */
};
console.log(duplicateCount("abdde"));
