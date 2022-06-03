/*
Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array
test case [7,2,3,0,1,0] >>> [7,2,3,1,0,0]
I need to look through the array put all zeros at the end while keeping the order of the list of integers
first create an empty array to store the new array
I would then loop over the array 


*/
const removeZeros = (array) => {
  let limit = array.length;
  let tmp;
  for (let i = 0; i < limit; i++) {
    if (array[i] === 0 || array[i] === "0") {
      tmp = array[i];
      for (let j = i--; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }
      array[array.length - 1] = tmp;
      limit--;
    }
  }
  return array;
};

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
