/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

So I need to find the smallest value in the array or the index of that value

example
[1,2,3,4,5], second parameter holds a string 'value' = >> 1;
[1,2,3,4,5], second parameter holds a string 'index' = >> 0;

*/

const min = (arr, toReturn) => {
  var min = Math.min(...arr);

  if (toReturn === "value") return min;
  if (toReturn === "index") return arr.indexOf(min);
};
