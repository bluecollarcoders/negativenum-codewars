/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.



*/

const replaceDots = (str) => {
  return str.replace(/\./g, "-");
};

// refactored

const replaceDots2 = (str) => {
  var newString = "";

  for (let i = 0; i < str.length; i++) {
    newString += str[i] !== "." ? str[i] : "-";
  }
  return newString;
};
