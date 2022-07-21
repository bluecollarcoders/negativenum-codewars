/*

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

create an empty array
first I need to loop through the array 
then I need to multiply each item in the array * 2

*/

const maps = (x) => {
  var newArray = [];

  for (let i = 0; i < x.length; i++) {
    newArray(x[i] * 2);
  }

  return newArray;
};
