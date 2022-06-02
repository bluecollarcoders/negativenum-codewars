/*
instructions

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
////////////////////////////////
test case array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
////////////////////////////////

this is a 2d array first we create an empty array this is a matrix
so we would have to do nested for loop 
we would use i, j, k to represent looping over the three different arrays
*/
const snail = (array) => {
  var sortedArray = [];
  while (array.length) {
    sortedArray.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      sortedArray.push(array[i].pop());
    }
    sortedArray.push(...(array.pop() || []).reverse());
    for (let i = array.length - 1; i >= 0; i--) {
      sortedArray.push(array[i].shift());
    }
  }

  return sortedArray;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
