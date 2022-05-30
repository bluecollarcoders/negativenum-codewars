/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

const spinWords = (string) => {
  /*
    
   testcase
   this is a hamburger >>>> this is a regrubmah
   I want to look through the string any word that has more than 5 words reverse it I would have to split the string in indivual sections
   if then iterate if one of those sections are greater than or equal to
   5 reverse I would have to return the order of the string so I would 
   create a empty string to store the results
    
    */
  var newString = string.split(" ");
  // then loop over newString variable
  for (let i = 0; i < newString.length; i++) {
    if (newString[i].length >= 5) {
      newString[i] = newString[i].split("").reverse().join("");
    }
  }

  return newString.join(" ");

  /*
    refactor 
    
    
    */
};

const players = {
  "player 1": {
    score: 0,
  },
  "player 2": {
    score: 0,
  },
};

console.log(spinWords("Hey little soldier"));
