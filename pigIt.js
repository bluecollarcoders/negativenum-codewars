/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
testcase >>> ('Pig latin is cool'); // igPay atinlay siay oolcay

I want to take the first letter in each word move to the end of the word 
then add ay to the end of the word
First I want to split each word by itself (pig latin is cool)
I want to create a varable with an empty string
I then want to loop over the the str parameter
then use regex and test method if any letter in the alphabet uppercase or lowercase passes the test reassign the str variable to take the first index of the str then and the string with 'ay' then join everything together
*/
const pigIt = (str) => {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      str[i] = str[i].slice(1) + str[i][0] + "ay";
    }
  }
  return str.join(" ");
};

// return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")
