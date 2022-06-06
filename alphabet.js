/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
I want split the string to indivdual letters 'tomorrow chicken is coming' >> '"t""o" "m" "o" ""
I want to loop over the length of the string
I then want to look at each letter in the substring 
I need to some how check the letter against something to see what number corresponds with the particular letter
I may have to create a hashtable {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, n:13, m:14, 0:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26}
I would have to loop over the hashtable as well
I would first create a variable that splits the string to substrings
then create a hashtable
then loop over the substring variable
then the hash table 
then compare and return the number associated with the letter from the hashtable
*/

const alphabetPosition = (text) => {
  var newOrder = "";

  for (let i = 0; i < text.length; i++) {
    let letter = text.toUpperCase().charCodeAt(i);
    if (letter > 64 && letter < 91) {
      newOrder += letter - 64 + " ";
    }
  }
  return newOrder.slice(0, newOrder.length - 1);
};

console.log(alphabetPosition("hello I like pbj"));
