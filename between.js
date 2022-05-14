/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

const between = (a, b) => {
  // create an empty array to store
  // loop through a and b parameters
  // push the result to new array
  var holder = [];
  for (let i = a; i <= b; i++) {
    holder.push(i);
  }
  return holder;
};
