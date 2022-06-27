/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.


*/

const squareOrSquareRoot = (array) => {
  var newArray = [];

  for (let i of array) {
    if (Math.sqrt(i) == Math.floor(Math.sqrt(i))) {
      newArray.push(Math.sqrt(i));
    } else {
      newArray.push(i * i);
    }
  }
  return newArray;
};
